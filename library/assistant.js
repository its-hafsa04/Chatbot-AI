const axios = require('axios');
require('dotenv').config();

class ChatAssistant {
  constructor(apiKey) {
    this.apiKey = apiKey || process.env.API_KEY;
    this.apiBaseUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  }

  async getResponse(message) {
    try {
      const response = await axios.post(this.apiBaseUrl, {
        prompt: message,
        max_tokens: 150,
        n: 1,
        stop: ['\n'],
        temperature: 0.9,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
        },
      });
      return response.data.choices[0].text.trim();
    } catch (error) {
      throw new Error(`Error getting response: ${error.message}`);
    }
  }
}

module.exports = ChatAssistant;
