const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  //The code for your command take place here
  message.channel.send(`**🏓 The latency is ${Date.now() - message.createdTimestamp} ms.**`);
}
//You can change the name of the command here
module.exports.help = {
  name: "ping",
  description: "Show the latency of the BOT"
}