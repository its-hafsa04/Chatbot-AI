import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(AIzaSyAgG00D7Uji05MmrNvy-ozN9l3t6GGkZTI);

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
      console.log(message)
      const responseText = await generate(prompt, message);
      return responseText;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
};
