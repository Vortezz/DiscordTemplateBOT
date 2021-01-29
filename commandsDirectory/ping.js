const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  //Set your code here
  message.channel.send(`**🏓 The latency is ${Date.now() - message.createdTimestamp} ms.**`);
}
//Change the command name !
module.exports.help = {
  name: "ping",
  description: "Show the latency of the BOT"
}
