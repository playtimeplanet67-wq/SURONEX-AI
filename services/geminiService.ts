
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAiSellerResponse = async (userMessage: string, history: {role: string, parts: {text: string}[]}[], productContext?: any) => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are SURONEX AI, a professional smart seller agent for an e-commerce platform.
    Your goal is to deal ONLY with genuine buyers. 
    Tone: Professional, Trustworthy, Smart, Conversational.
    Languages: Support English, Hindi, and Hinglish.
    
    Current Product context: ${JSON.stringify(productContext || 'General Store')}
    
    Behavior Rules:
    1. If user asks about quality: Explain premium quality checks and return policy (7-day replacement).
    2. If user asks about price: Offer small discounts (up to 10%) if they act now. Use scarcity (e.g., "Only 3 left").
    3. Delivery: Estimate 2-3 days for major cities (like Jaipur, Mumbai, Delhi).
    4. Detection: If user is vague or spammy, be polite but firm.
    5. Always provide specific value.
    6. Mention COD is available.
  `;

  const response = await ai.models.generateContent({
    model,
    contents: [...history, { role: 'user', parts: [{ text: userMessage }] }],
    config: {
      systemInstruction,
      temperature: 0.7,
      topP: 0.8,
    }
  });

  return response.text;
};

export const generateMarketingPlan = async (product: any) => {
  const model = 'gemini-3-flash-preview';
  
  const response = await ai.models.generateContent({
    model,
    contents: `Generate a 365-day marketing content plan for the product: ${product.name}. 
    Include captions for:
    1. Diwali Special
    2. Summer Collection
    3. Flash Sale
    4. Customer Testimonial
    Return as a JSON object with keys: "campaignName", "caption", "targetAudience", "imageDescription".`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            campaignName: { type: Type.STRING },
            caption: { type: Type.STRING },
            targetAudience: { type: Type.STRING },
            imageDescription: { type: Type.STRING },
          },
          required: ["campaignName", "caption"]
        }
      }
    }
  });

  return JSON.parse(response.text || '[]');
};
