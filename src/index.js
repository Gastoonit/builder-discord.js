const Discord = require("discord.js");
const { GatewayIntentBits, EnumResolvers } = require("discord.js");
const { readdirSync } = require("node:fs");
const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildVoiceStates
    ]
});
const config = require("./src/json/client/bot.json");

module.exports = client;

client.slashCommands = new Discord.Collection();
client.slashArray = [];

/* Handlers */
for (const folder of readdirSync(`${process.cwd()}/src/handlers`)) {
      const files = readdirSync(`${process.cwd()}/src/handlers/${folder}`).filter(
        (file) => file.endsWith(".js")
      );

      for (const file of files) {
        require(`${process.cwd()}/src/handlers/${folder}/${file}`)(client);
    }
}

/* Export */
client.builder()
client.eventos()

client.login(config.BOT_TOKEN);
