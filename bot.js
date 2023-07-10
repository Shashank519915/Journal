// bot.js
require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const prefix = process.env.PREFIX;

// Event handler when the bot is ready
client.on("ready", () => {
  console.log(`Logged in !!`);
});

// Event handler for incoming messages
client.on("messageCreate", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "journal") {
    const journalCommand = require("./journalCommand");
    journalCommand.execute(message, args);
  } else if (command === "fetch") {
    const fetchCommand = require("./fetchCommand");
    fetchCommand.execute(message);
  } else if (command === "delete") {
    const deletecommand = require("./deleteCommand.js");
    deletecommand.execute(message, args);
  }
});

// Log in to Discord
client.login(process.env.DISCORD_TOKEN);
