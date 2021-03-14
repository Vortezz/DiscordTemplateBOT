const Discord = require('discord.js')
const emojis = require('../config/emojis.json')
const color = require('../config/colors.json')

module.exports.run = async (client, message, args) => {
    if (message.author.id != 697530946072739903 && message.author.id != 745792173798326275) {
		const error = new Discord.MessageEmbed()
        .setTitle(`${emojis.error} Erreur`)
        .setDescription("Tu n'as pas la permission d'effectuer cette commande !\nCommande réservée à la Team Fox")
        .setColor(color.RED)
        .setTimestamp();
        message.channel.send(error)
        return
    }
    if (!args[0]) {
        const syntax = new Discord.MessageEmbed()
              .setTitle(`${emojis.error} Erreur de syntaxe`)
              .setDescription(`**Usage : **\`?reload [Commande]\`\n\n**[] Obligatoire**\n**() Optionnel**`)
              .setColor(color.RED)
              .setTimestamp();
	  message.channel.send(syntax)
	  return
    }
    const commandName = args[0].toLowerCase();
    const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

		if (!command) {
			const error = new Discord.MessageEmbed()
        	.setTitle(`${emojis.error} Erreur`)
        	.setDescription(`Je n'ai pas trouvé de commande nommée \`${commandName}\``)
        	.setColor(color.RED)
        	.setTimestamp();
       		 message.channel.send(error)
        	return
		}

		delete require.cache[require.resolve(`./${commandName}.js`)];

		try {
			const newCommand = require(`./${commandName}.js`);
			message.client.commands.set(newCommand.name, newCommand);
		} catch (err) {
			console.log(err);
			const error = new Discord.MessageEmbed()
        	.setTitle(`${emojis.error} Erreur`)
        	.setDescription(`Je n'ai pas réussi à reload \`${commandName}.js\`\nErreur : ${err}`)
        	.setColor(color.RED)
        	.setTimestamp();
       		 message.channel.send(error)
        	return
		}
		const done = new Discord.MessageEmbed()
        	.setTitle(`${emojis.done} Action réussie`)
        	.setDescription(`La commande \`${commandName}\` a été reload !`)
        	.setColor(color.GREEN)
        	.setTimestamp();
       		 message.channel.send(done)
		const webhook_logs = new Discord.WebhookClient('778183014714703892', 'SpWZgCNwiIrzARH0ak3JhbCCUPZQJdp4wFgozIkTtV8wH0y4WO7fikPL5D7PbJvMxjzu');
		webhook_logs.send(`:warning: Le fichier \`${commandName}.js\` a été reload`)
}
module.exports.help = {
  name: "reload"
}