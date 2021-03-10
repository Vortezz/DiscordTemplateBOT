const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    /*Place your code here !*/
    const pinging = new Discord.MessageEmbed()
        	.setTitle(`Pinging...`)
        	.setColor('RANDOM')
        	.setTimestamp();
    message.channel.send(pinging).then((msg)=>{
    const ping = new Discord.MessageEmbed()
        	.setTitle(`:ping_pong: **Latency : ${msg.createdTimestamp - message.createdTimestamp}ms**`)
        	.setColor('RANDOM')
        	.setTimestamp();
    msg.edit(ping);
  })
}
/*Change the command name !*/
module.exports.help = {
  name: "ping",
  description: "Show the latency of the BOT"
}
