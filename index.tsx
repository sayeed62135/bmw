
import { GoogleGenAI } from "@google/genai";
import { NAV_ITEMS, BMW_MODELS, FEATURES } from './constants.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Core Navigation Logic
    const navbar = document.getElementById('navbar');
    const sideMenu = document.getElementById('side-menu');
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const navLinks = document.getElementById('nav-links');
    const footerLinks = document.getElementById('footer-links');

    window.addEventListener('scroll', () => {
        if (navbar) navbar.classList.toggle('nav-scrolled', window.scrollY > 100);
    });

    const populateLinks = (items: any[]) => {
        if (!navLinks || !footerLinks) return;
        items.forEach((item, idx) => {
            // Main Side Menu Links
            const link = document.createElement('a');
            link.href = item.href;
            link.className = "group flex items-center gap-10 py-2";
            link.innerHTML = `
                <span class="text-white/10 text-xs font-bold tracking-widest">0${idx+1}</span>
                <span class="text-white text-5xl md:text-7xl font-bold tracking-tighter hover:translate-x-6 transition-transform duration-700">${item.label}</span>
            `;
            link.onclick = (e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) {
                    closeMenu();
                    setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 500);
                }
            };
            navLinks.appendChild(link);
            
            // Footer Links
            const fl = document.createElement('li');
            fl.innerHTML = `<a href="${item.href}" class="hover:text-white transition-colors">${item.label}</a>`;
            fl.onclick = (e) => {
                e.preventDefault();
                const target = document.querySelector(item.href);
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            };
            footerLinks.appendChild(fl);
        });
    };
    populateLinks(NAV_ITEMS);

    const openMenu = () => {
        if (sideMenu) {
            sideMenu.classList.remove('-translate-x-full', 'opacity-0');
            document.body.style.overflow = 'hidden';
        }
    };
    const closeMenu = () => {
        if (sideMenu) {
            sideMenu.classList.add('-translate-x-full', 'opacity-0');
            document.body.style.overflow = 'auto';
        }
    };

    if (menuOpen) menuOpen.onclick = openMenu;
    if (menuClose) menuClose.onclick = closeMenu;

    // 2. Intersection Observer for Reveal-Up
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

    // 3. Feature Highlights Slider
    const featContainer = document.getElementById('feature-container');
    const featNext = document.getElementById('feat-next');
    const featPrev = document.getElementById('feat-prev');

    if (featContainer) {
        FEATURES.forEach((f, idx) => {
            const card = document.createElement('div');
            card.className = "flex-shrink-0 w-[85vw] md:w-[600px] aspect-[16/10] relative group overflow-hidden snap-center feature-card reveal-up";
            card.style.transitionDelay = `${idx * 100}ms`;
            card.innerHTML = `
                <img src="${f.image}" class="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-[2s]">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-12 flex flex-col justify-end">
                    <p class="text-white/40 text-[9px] font-bold tracking-[0.5em] uppercase mb-4">Focus 0${idx+1}</p>
                    <h4 class="text-white text-3xl font-bold tracking-tight mb-4">${f.title}</h4>
                    <div class="w-12 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700"></div>
                </div>
            `;
            featContainer.appendChild(card);
            observer.observe(card);
        });

        // Use buttons for manual horizontal control
        featNext?.addEventListener('click', () => {
            featContainer.scrollBy({ left: 450, behavior: 'smooth' });
        });
        featPrev?.addEventListener('click', () => {
            featContainer.scrollBy({ left: -450, behavior: 'smooth' });
        });

        // Hijacking horizontal scroll logic removed as per user request.
        // Standard horizontal scrolling remains enabled.
    }

    // 4. Product Grid with BMW Aesthetic
    const productGrid = document.getElementById('product-grid');
    const filterButtons = document.querySelectorAll('.filter-btn') as NodeListOf<HTMLElement>;

    const renderProducts = (type = 'All') => {
        if (!productGrid) return;
        productGrid.innerHTML = '';
        const filtered = type === 'All' ? BMW_MODELS : BMW_MODELS.filter(m => m.type.includes(type));
        
        filtered.forEach((m, idx) => {
            const card = document.createElement('a');
            card.href = m.link;
            card.target = "_blank";
            card.className = "group block reveal-up";
            card.style.transitionDelay = `${idx * 100}ms`;
            card.innerHTML = `
                <div class="aspect-[16/10] bg-white p-12 mb-10 flex items-center justify-center transition-all duration-700 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)]">
                    <img src="${m.image}" class="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105">
                </div>
                <div class="flex flex-col gap-4">
                    <div class="flex justify-between items-center">
                        <span class="text-[9px] font-bold tracking-[0.4em] text-black/30 uppercase">${m.type}</span>
                        <span class="text-xs font-bold tracking-widest">Explore →</span>
                    </div>
                    <h4 class="text-3xl font-bold tracking-tighter">${m.name}</h4>
                </div>
            `;
            productGrid.appendChild(card);
            observer.observe(card);
        });
    };

    filterButtons.forEach(btn => {
        btn.onclick = () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.getAttribute('data-filter') || 'All');
        };
    });
    renderProducts();

    // 5. AI Concierge
    const aiLauncher = document.getElementById('ai-launcher');
    const aiChat = document.getElementById('ai-chat');
    const aiClose = document.getElementById('ai-close');
    const aiMessages = document.getElementById('ai-messages');
    const aiInput = document.getElementById('ai-input') as HTMLInputElement;
    const aiSend = document.getElementById('ai-send');

    if (aiLauncher && aiChat) {
        aiLauncher.onclick = () => aiChat.classList.toggle('hidden');
        if (aiClose) aiClose.onclick = () => aiChat.classList.add('hidden');

        const addMessage = (text: string, role: string) => {
            if (!aiMessages) return;
            const div = document.createElement('div');
            div.className = `flex ${role === 'user' ? 'justify-end' : 'justify-start'}`;
            div.innerHTML = `
                <div class="max-w-[85%] p-6 text-xs leading-relaxed ${
                    role === 'user' 
                    ? 'bg-[#191D1C] text-white' 
                    : 'bg-white text-black border border-black/5 shadow-sm font-medium'
                }">
                    ${text}
                </div>
            `;
            aiMessages.appendChild(div);
            aiMessages.scrollTop = aiMessages.scrollHeight;
        };

        const handleChat = async () => {
            const msg = aiInput.value.trim();
            if (!msg || !aiMessages) return;
            aiInput.value = '';
            addMessage(msg, 'user');

            const loading = document.createElement('div');
            loading.className = 'text-[9px] uppercase tracking-widest text-black/30 font-bold p-2';
            loading.innerText = 'Concierge is analyzing...';
            aiMessages.appendChild(loading);

            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const response = await ai.models.generateContent({
                    model: 'gemini-3-flash-preview',
                    contents: msg,
                    config: { 
                        systemInstruction: "You are the Executive Motors Digital Concierge in Bangladesh. Your tone is sophisticated, precise, and high-end. You provide information about the BMW i5, i7, iX3, and 7 Series models. Always encourage visiting the Meghna Tower showroom or calling 16765 for personalized consultations." 
                    }
                });
                if (loading.parentNode) aiMessages.removeChild(loading);
                addMessage(response.text || "I apologize, our network is momentarily occupied. Please call 16765.", 'bot');
            } catch (e) {
                if (loading.parentNode) aiMessages.removeChild(loading);
                addMessage("Our digital systems are undergoing maintenance. Please contact our 16765 hotline for immediate assistance.", 'bot');
            }
        };

        if (aiSend) aiSend.onclick = handleChat;
        if (aiInput) aiInput.onkeypress = (e) => e.key === 'Enter' && handleChat();
        addMessage("Good day. I am the Executive Motors Digital Concierge. How may I assist your exploration of BMW excellence today?", 'bot');
    }
});
