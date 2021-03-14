const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    const calculation = new Discord.MessageEmbed()
        	.setTitle(`Calculation...`)
        	.setColor('RANDOM')
        	.setTimestamp();
    message.channel.send(calculation).then((msg)=>{
    days = Math.floor((client.uptime / (1000 * 60 * 60 * 24)) % 60).toString()
    hours = Math.floor((client.uptime / (1000 * 60 * 60)) % 60).toString()
    minuts = Math.floor((client.uptime / (1000 * 60)) % 60).toString()
    seconds = Math.floor((client.uptime / 1000) % 60).toString()

    const uptime = new Discord.MessageEmbed()
        	.setTitle(`:timer: Success`)
          .setDescription(`BOT uptime :`)
          .addField(`Days :`, days)
          .addField(`Hours :`, hours)
          .addField(`Minuts :`, minuts)
          .addField(`Seconds :`, seconds)
        	.setColor('GREEN')
        	.setTimestamp();
       		 msg.edit(uptime)
  })
}
module.exports.help = {
  name: "uptime"
}
