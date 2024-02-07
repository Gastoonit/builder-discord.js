const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("hola, descripción!"),
    run: async (client, interaction) => {
	    
     const Embed = new EmbedBuilder()
      .setTitle("Título del embed")
      .setDescription("Descripción del embed")
      .setColor("Random")

     return interaction.reply({
	  content: "- 🙋 | hola, soy un bot alegre! // hi i'm a happy bot",
	  embeds: [Embed],
     });

 }
}
