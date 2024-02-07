const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("hola")
    .setDescription("hola, descripción!"),
    run: async (client, interaction) => {
	    
     return interaction.reply({
	content: "- 🙋 | hola, soy un bot alegre! // hi i'm a happy bot",
	ephemeral: false
     });

 }
}
