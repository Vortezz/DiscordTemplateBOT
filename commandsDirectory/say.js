const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if (!args[0]) {
        const error = new Discord.MessageEmbed()
        .setTitle(`:x: Error`)
        .setDescription("You haven't say any text...")
        .setColor('RED')
        .setTimestamp();
        message.channel.send(error)
        return
    }
    text = message.content.split(' ').slice(1).join(' ');
    text = text.replace('config.token', 'We will not give the token :)');
    const say = new Discord.MessageEmbed()
        .setTitle(`Text of ${message.author.username}`)
        .setDescription(text)
        .setColor('GREEN')
        .setTimestamp();
        message.channel.send(say)
}
module.exports.help = {
  name: "say"
}
