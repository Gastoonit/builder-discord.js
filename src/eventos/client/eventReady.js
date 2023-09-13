const { Events } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  emiter: "once",
  run: async (client) => {

    console.log(`✅️ | ¡${client.user.username} en línea!`)

  }
};
