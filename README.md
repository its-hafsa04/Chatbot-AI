# AI Customer Assistant

`ai-customer-assistant` is a customer support chat bot powered by Google Generative AI. This package allows you to easily integrate an AI-powered customer support assistant into your projects.

## Features

- Responds to user queries with accurate, polite, and concise answers.
- Uses Google Generative AI to generate responses.
- Easy to integrate into any Node.js project.

## Installation

Install the package using npm:

```bash
npm install ai-customer-assistant
```

## Setup

Before using the package, you need to set up your Gemini API key:

1. Create a `.env` file in your project's root directory.
2. Add your Gemini API key to the `.env` file:

```
API_KEY=your_api_key_here
```

Make sure to replace `your_api_key_here` with your actual Gemini API key.

## Usage

### ES Module

If you are using ES modules, ensure your package.json includes `"type": "module"`:

```json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ai-customer-assistant": "^1.0.0"
  }
}
```

Then, you can import and use the `ChatAssistant` class:

```javascript
import { ChatAssistant } from 'ai-customer-assistant';

const chatAssistant = new ChatAssistant();

(async () => {
  try {
    const response = await chatAssistant.sendMessage("What are you doing?");
    console.log("Response from AI Customer Assistant:", response);
  } catch (error) {
    console.error("Error:", error);
  }
})();
```

### CommonJS

If you are using CommonJS, you will need to dynamically import the package:

```javascript
(async () => {
  const { ChatAssistant } = await import('ai-customer-assistant');

  const chatAssistant = new ChatAssistant();

  try {
    const response = await chatAssistant.sendMessage("What are you doing?");
    console.log("Response from AI Customer Assistant:", response);
  } catch (error) {
    console.error("Error:", error);
  }
})();
```

## API

### ChatAssistant

#### `sendMessage(message: string): Promise<string>`
- `message` - The user's query.
- Returns a Promise that resolves to the AI-generated response.

## Example

```javascript
import { ChatAssistant } from 'ai-customer-assistant';

const chatAssistant = new ChatAssistant();

(async () => {
  try {
    const response = await chatAssistant.sendMessage("How can I reset my password?");
    console.log("Response from AI Customer Assistant:", response);
  } catch (error) {
    console.error("Error:", error);
  }
})();
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the ISC License - see the LICENSE file for details.