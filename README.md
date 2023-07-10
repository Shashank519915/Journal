# Discord Journal Bot

The Discord Journal Bot is a chatbot designed to help users keep a journal directly within a Discord server. It provides a convenient way for users to write their daily journal entries, with the option to perform grammar checks using the [TextGears API](https://textgears.com/). Each user's entries are stored privately in separate JSON files.

## Features

- **Journal Entry:** Users can enter their daily journal entry by using the `!journal` command.
- **Grammar Check:** The bot offers the ability to perform grammar checks on the journal entry using the TextGears API.
- **Private Storage:** Each user's journal entries are stored privately in separate JSON files.
- **Delete Entry:** Users can delete their last journal entry using the `!delete` command.
- **Modular and Extensible:** The code is organized into separate modules for easy maintainability and extensibility.

## Technologies Used

This project is built with the following technologies:

- [Node.js](https://nodejs.org/): A JavaScript runtime environment for server-side development.
- [Discord.js](https://discord.js.org/): A powerful library for interacting with the Discord API.
- [TextGears API](https://textgears.com/): An API for grammar and style checking of textual content.
- JSON file storage: Simple file-based storage using JSON format.

## Getting Started

To get started with the Discord Journal Bot, follow these steps:

1. **Clone the repository.**
2. **Install dependencies.** Run `npm install discord.js@14.11.0 dotenv@16.3.1 node-fetch@2.6.5` to install the required dependencies.
3. **Configure environment variables.** Create a `.env` file in the root directory and provide the necessary environment variables (e.g., Discord bot token, TextGears API key  and bot prefix).
4. **Customize the bot.** Modify the bot's behavior and commands as per your requirements.
5. **Run the bot.** Launch the bot using `node bot.js`.
6. **Invite the bot.** Invite the bot to your Discord server using the OAuth2 URL provided by Discord.
7. **Start journaling.** Begin journaling by using the `-journal` command.

Feel free to explore the code and make any modifications or improvements as needed. Happy journaling!

## License

This project is licensed under the [MIT License](LICENSE).
