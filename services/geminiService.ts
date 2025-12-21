
import { GoogleGenAI } from "@google/genai";

/**
 * Gemini Service for MarocZon Marketplace with Rate-Limit Resilience
 */

// Simple in-memory cache to prevent redundant API calls
const pitchCache: Record<string, string> = {};

// Localized Fallbacks for when API quota is exhausted (Error 429) or Forbidden (Error 403)
const fallbacks: Record<string, string> = {
  ar: "منتجات عالية الجودة بأسعار تنافسية للجملة. تواصل معنا للمزيد.",
  en: "High-quality products at competitive wholesale prices. Contact us for details.",
  fr: "Produits de haute qualité à des prix de gros compétitifs. Contactez-nous.",
  zh: "高品质产品，极具竞争力的批发价格。联系我们了解更多详情。"
};

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a professional B2B seller pitch for a product.
 * Includes caching and rate-limit handling.
 */
export const generateSellerPitch = async (productName: string, language: string = 'ar') => {
  const cacheKey = `${productName}-${language}`;
  if (pitchCache[cacheKey]) return pitchCache[cacheKey];

  const ai = getAI();
  try {
    // Using 'gemini-flash-latest' for broader availability and to avoid 403 errors with preview models
    const response = await ai.models.generateContent({
      model: 'gemini-flash-latest',
      contents: `You are a professional B2B marketing expert. Write a short, persuasive sales pitch for the product: "${productName}". 
      Target wholesalers and bulk buyers on the MarocZon marketplace.
      Respond ONLY with the pitch text in ${language === 'ar' ? 'Arabic' : language === 'fr' ? 'French' : language === 'zh' ? 'Chinese' : 'English'}.
      Keep it under 20 words.`,
      config: {
        temperature: 0.6,
        topP: 0.9,
      }
    });
    
    const result = response.text?.trim() || fallbacks[language] || fallbacks['en'];
    pitchCache[cacheKey] = result;
    return result;
  } catch (error: any) {
    // Handle Rate Limit (429) and Permission Denied (403)
    if (
      error?.message?.includes('429') || 
      error?.status === 429 || 
      error?.message?.includes('RESOURCE_EXHAUSTED') ||
      error?.message?.includes('403') ||
      error?.status === 403
    ) {
      console.warn(`Gemini API Issue for "${productName}". Using fallback.`, error.message);
      return fallbacks[language] || fallbacks['en'];
    }
    
    console.error("Gemini Pitch Generation Error:", error);
    return fallbacks[language] || fallbacks['en'];
  }
};

/**
 * Provides smart category or keyword suggestions based on a search query.
 */
export const getSmartSearchSuggestions = async (query: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-flash-latest',
      contents: `User is searching for "${query}" on MarocZon (B2B Marketplace). Provide 3 related business categories or trending search terms. Return as a comma-separated list.`,
    });
    return response.text?.split(',').map(s => s.trim()) || [];
  } catch (error) {
    return [];
  }
};
