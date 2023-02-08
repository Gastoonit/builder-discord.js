const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { readdirSync } = require("node:fs");
const config = require(`${process.cwd()}/src/json/client/bot.json`);

module.exports = (client) => {
  client.builder = async () => {
    for (const folder of readdirSync(`${process.cwd()}/src/slashCommands`)) {
      const files = readdirSync(`${process.cwd()}/src/slashCommands/${folder}`).filter(
        (file) => file.endsWith(".js")
      );

      for (const file of files) {
        const builder = require(`${process.cwd()}/src/slashCommands/${folder}/${file}`);
        client.slashCommands.set(builder.data.name, builder);
        client.slashArray.push(builder.data.toJSON());
      }
    }

    const rest = new REST({ version: "10" }).setToken(config.BOT_TOKEN);
    try {
      const data = await rest.put(Routes.applicationCommands(config.BOT_ID), {
        body: client.slashArray,
      });
      console.log(`${data.length} | ✅️`);
    } catch (err) {
      console.error(err);
    }
  }
}
