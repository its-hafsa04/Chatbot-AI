import ChatAssistant from "./assistant.js";

const chatAssistant = new ChatAssistant();

(async () => {
  try {
    const response = await chatAssistant.sendMessage(
      "Hello, how can I help you?"
    );
    console.log("Response from Gemini API:", response);
  } catch (error) {
    console.error("Error:", error);
  }
})();
