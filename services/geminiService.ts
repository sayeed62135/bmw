
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getBMWAdvice = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are a professional BMW expert at Executive Motors Ltd in Bangladesh. You help customers understand the luxury, engineering, and performance of different BMW models. Be polite, sophisticated, and helpful. Focus on the models available in Bangladesh like the i5, i7, X1, and 7 Series.",
      }
    });
    return response.text || "I'm sorry, I'm having trouble connecting to my database. Please contact us directly at 16765.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently performing maintenance on my engine. Please reach out to our human specialists.";
  }
};
