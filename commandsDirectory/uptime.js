const Discord = require('discord.js')
const emojis = require('../config/emojis.json')
const color = require('../config/colors.json')

module.exports.run = async (client, message, args) => {
  const done = new Discord.MessageEmbed()
        	.setTitle(`Calcul...`)
        	.setColor('RANDOM')
        	.setTimestamp();
  message.channel.send(done).then((msg)=>{
    days = Math.floor((client.uptime / (1000 * 60 * 60 * 24)) % 60).toString()
    hours = Math.floor((client.uptime / (1000 * 60 * 60)) % 60).toString()
    minuts = Math.floor((client.uptime / (1000 * 60)) % 60).toString()
    seconds = Math.floor((client.uptime / 1000) % 60).toString()

    const done = new Discord.MessageEmbed()
        	.setTitle(`:timer: Action réussie`)
          .setDescription(`Temps d'activité du BOT :`)
          .addField(`Jours :`, days)
          .addField(`Heures :`, hours)
          .addField(`Minutes :`, minuts)
          .addField(`Secondes :`, seconds)
        	.setColor(color.GREEN)
        	.setTimestamp();
       		 msg.edit(done)
  })
}
module.exports.help = {
  name: "uptime"
}