const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Playlist de teste"),

    async execute(interaction){
        await interaction.reply("https://open.spotify.com/playlist/1qNvW0x1LvDI6GmNYPXM8u?si=f220850bb5864012")
    }
}