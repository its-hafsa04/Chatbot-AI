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
    const response = await result.response;
    const text = await response.text();

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
      const prompt = "Your prompt here"; // Replace with your desired prompt
      console.log(message);
      const responseText = await generate(prompt, message);
      return responseText;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
}
