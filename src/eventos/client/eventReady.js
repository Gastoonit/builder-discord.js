const { Events } = require('discord.js');

module.exports = {
  name: Events.Ready,
  emiter: "once",
  run: async (client) => {

   console.log("✅️ | Bot en linea")

  }
};
