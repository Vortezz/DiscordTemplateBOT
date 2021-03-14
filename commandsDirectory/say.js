const Discord = require('discord.js')
const emojis = require('../config/emojis.json')
const color = require('../config/colors.json')

module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        const error = new Discord.MessageEmbed()
        .setTitle(`${emojis.error} Erreur`)
        .setDescription("Tu n'as pas mis de texte à me faire dire...")
        .setColor(color.RED)
        .setTimestamp();
        message.channel.send(error)
        return
    }
    text = message.content.split(' ').slice(1).join(' ');
    text = text.replace('config.token', 'On ne va pas te donner le token quand même...');
    const say = new Discord.MessageEmbed()
        .setTitle(`Texte de ${message.author.username}`)
        .setDescription(text)
        .setColor(color.GREEN)
        .setTimestamp();
        message.channel.send(say)
}
module.exports.help = {
  name: "say"
}