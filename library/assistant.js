import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const API = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(API);

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function generate(prompt, userQuery) {
  try {
    // Prepend the prompt to the user's query
    const fullQuery = `${prompt} ${userQuery}`;

    // Get the response from the AI model
    const result = await model.generateContent(fullQuery);
    const response = result.response;
    const text = response.text();

    // Return the AI's response
    return text;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}

// Exported module to handle chat messages
export default class ChatAssistant {
  async sendMessage(message) {
    try {
      const prompt = `You are a helpful and knowledgeable customer support assistant. Respond to users' questions and issues with accurate, polite, and concise answers. Keep your responses to 1-2 lines.`;
      console.log(message);
      const responseText = await generate(prompt, message);
      return responseText;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
}
