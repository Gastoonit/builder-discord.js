const { Client, Collection, GatewayIntentBits, EnumResolvers } = require("discord.js");
const { readdirSync } = require("node:fs");
const client = new Client({
    intents: [
		GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
	],
});
const config = require(`${process.cwd()}/src/json/client/bot.json`);

module.exports = client;

client.slashCommands = new Collection();
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
// client.mongoose()

client.login(config.BOT_TOKEN);
