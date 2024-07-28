import ChatAssistant from "./assistant.js";

const chatAssistant = new ChatAssistant();

(async () => {
  try {
    // user's query
    const response = await chatAssistant.sendMessage("Hello!");
    console.log("Response from Gemini API:", response);
  } catch (error) {
    console.error("Error:", error);
  }
})();
