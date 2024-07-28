import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI('AIzaSyAgG00D7Uji05MmrNvy-ozN9l3t6GGkZTI');

const model = genAI.getGenerativeModel({ model: "gemini-pro" });

async function generate(prompt, userQuery) {
  try {
    const fullQuery = `${prompt} ${userQuery}`;

    const result = await model.generateContent(fullQuery);
    const response = await result.response;
    const text = await response.text();

    return text;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}

export default class ChatAssistant {

  async sendMessage(message) {
    try {
      const prompt = `You are a helpful and knowledgeable customer support assistant. Your role is to assist users with their questions and issues by providing accurate, polite, and concise answers. Here are some guidelines for your responses:`;
      console.log(message)
      const responseText = await generate(prompt, message);
      return responseText;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }
};
