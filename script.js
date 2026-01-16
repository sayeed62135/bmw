
import { GoogleGenAI } from "@google/genai";
import { NAV_ITEMS, BMW_MODELS, FEATURES } from './constants.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Setup
    const navbar = document.getElementById('navbar');
    const sideMenu = document.getElementById('side-menu');
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const navLinks = document.getElementById('nav-links');
    const footerLinks = document.getElementById('footer-links');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('nav-scrolled', window.scrollY > 80);
    });

    const populateLinks = (container, items) => {
        items.forEach((item, idx) => {
            const link = document.createElement('a');
            link.href = item.href;
            link.className = "group flex items-center gap-6";
            link.innerHTML = `
                <span class="text-white/20 text-xs font-bold">0${idx+1}</span>
                <span class="text-white text-4xl font-light hover:translate-x-4 transition-transform inline-block">${item.label}</span>
            `;
            link.onclick = () => sideMenu.classList.add('-translate-x-full');
            container.appendChild(link);
            
            // Populate footer too
            const fl = document.createElement('a');
            fl.href = item.href;
            fl.className = "hover:text-black transition-colors";
            fl.innerText = item.label;
            footerLinks.appendChild(fl);
        });
    };
    populateLinks(navLinks, NAV_ITEMS);

    menuOpen.onclick = () => sideMenu.classList.remove('-translate-x-full');
    menuClose.onclick = () => sideMenu.classList.add('-translate-x-full');

    // 2. Feature Slider (Scroll-Lock)
    const featureContainer = document.getElementById('feature-container');
    const featureDots = document.getElementById('feature-dots');

    FEATURES.forEach((f, idx) => {
        const card = document.createElement('div');
        card.className = "flex-shrink-0 w-[85vw] md:w-[500px] aspect-[4/5] relative group overflow-hidden snap-center bg-[#1e2221]";
        card.innerHTML = `
            <img src="${f.image}" class="absolute inset-0 w-full h-full object-cover opacity-70">
            <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent p-10 flex flex-col justify-end">
                <h4 class="text-white text-3xl font-bold">${f.title}</h4>
            </div>
        `;
        featureContainer.appendChild(card);

        const dot = document.createElement('button');
        dot.className = `h-[2px] w-4 bg-white/10 hover:bg-white/40 transition-all ${idx === 0 ? 'w-8 bg-white' : ''}`;
        dot.onclick = () => featureContainer.scrollTo({ left: card.offsetLeft - 48, behavior: 'smooth' });
        featureDots.appendChild(dot);
    });

    featureContainer.addEventListener('wheel', (e) => {
        const atStart = featureContainer.scrollLeft <= 5;
        const atEnd = featureContainer.scrollLeft >= (featureContainer.scrollWidth - featureContainer.clientWidth - 5);
        if ((e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart)) {
            e.preventDefault();
            featureContainer.scrollLeft += e.deltaY;
        }
    }, { passive: false });

    // 3. Product Grid
    const productGrid = document.getElementById('product-grid');
    const renderProducts = (type = 'All') => {
        productGrid.innerHTML = '';
        const filtered = type === 'All' ? BMW_MODELS : BMW_MODELS.filter(m => m.type === type);
        filtered.forEach(m => {
            const card = document.createElement('a');
            card.href = m.link;
            card.className = "group block";
            card.innerHTML = `
                <div class="aspect-[16/10] bg-white p-8 mb-8 flex items-center justify-center transition-shadow group-hover:shadow-xl">
                    <img src="${m.image}" class="w-full h-auto object-contain group-hover:scale-110 transition-transform duration-500">
                </div>
                <div class="flex justify-between items-center mb-2">
                    <span class="text-[9px] font-bold tracking-widest text-black/40 uppercase">${m.type}</span>
                </div>
                <h4 class="text-2xl font-bold">${m.name}</h4>
            `;
            productGrid.appendChild(card);
        });
    };
    renderProducts();

    // 4. AI Concierge
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const aiLauncher = document.getElementById('ai-launcher');
    const aiChat = document.getElementById('ai-chat');
    const aiClose = document.getElementById('ai-close');
    const aiMessages = document.getElementById('ai-messages');
    const aiInput = document.getElementById('ai-input');
    const aiSend = document.getElementById('ai-send');

    aiLauncher.onclick = () => aiChat.classList.toggle('hidden');
    aiClose.onclick = () => aiChat.classList.add('hidden');

    const addMessage = (text, role) => {
        const div = document.createElement('div');
        div.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
        div.innerHTML = `<div class="max-w-[85%] p-4 text-sm ${role === 'user' ? 'bg-[#191D1C] text-white' : 'bg-white text-black border'}">${text}</div>`;
        aiMessages.appendChild(div);
        aiMessages.scrollTop = aiMessages.scrollHeight;
    };

    const handleChat = async () => {
        const msg = aiInput.value.trim();
        if (!msg) return;
        aiInput.value = '';
        addMessage(msg, 'user');

        try {
            const response = await ai.models.generateContent({
                model: 'gemini-3-flash-preview',
                contents: msg,
                config: { systemInstruction: "You are the Executive Motors Concierge in Bangladesh. Help with BMW i5, i7, X1 inquiries. Be polite and luxury-focused." }
            });
            addMessage(response.text, 'bot');
        } catch (e) {
            addMessage("Apologies, I am experiencing technical difficulties. Please call 16765.", 'bot');
        }
    };

    aiSend.onclick = handleChat;
    aiInput.onkeypress = (e) => e.key === 'Enter' && handleChat();
    addMessage("Welcome to Executive Motors. How may I assist your BMW inquiry?", 'bot');
});
