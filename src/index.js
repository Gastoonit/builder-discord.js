const { Client, Collection, GatewayIntentBits, EnumResolvers } = require("discord.js");
const { readdirSync } = require("node:fs");
const client = new Client({
    intents: 3232255
});
const config = require("./json/client/bot.json");

module.exports = client;

client.slashCommands = new Collection();
client.slashArray = [];

/* Handlers */
for (const folder of readdirSync(`./handlers`)) {
      const files = readdirSync(`./handlers/${folder}`).filter(
        (file) => file.endsWith(".js")
      );

      for (const file of files) {
        require(`./handlers/${folder}/${file}`)(client);
    }
}

/* Export */
client.builder()
client.eventos()
// client.mongoose()

client.login(config.BOT_TOKEN);
