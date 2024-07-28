import axios from "axios";
import "dotenv/config";

export default class ChatAssistant {
  constructor() {
    this.apiKey = process.env.API_KEY;
    this.apiEndpoint = "https://api.google.com/gemini/v1/chat"; // Replace with actual endpoint
  }

  async sendMessage(message) {
    try {
      const response = await axios.post(this.apiEndpoint, {
        message,
        key: this.apiKey,
      });
      return response.data;
    } catch (error) {
      console.error("Error sending message:", error);
      throw error;
    }
  }

  async receiveMessage() {
    // Implement according to Gemini API documentation
  }
}
