const { Events } = require("discord.js");

module.exports = {
  name: Events.InteractionCreate,
  emiter: "on",
  run: async (client, interaction) => {
    if (interaction.isChatInputCommand()) {
      const command = client.slashCommands.get(interaction.commandName);
      try {
        await command.run(client, interaction);
      } catch (err) {
        console.log(err);
      }
    }
  },
};
