const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    	if (message.author.id != 697530946072739903 && message.author.id != 745792173798326275) {
		const error = new Discord.MessageEmbed()
        		.setTitle(`:x: Error`)
        		.setDescription("You can't do that !\nOnly for BOT team")
        		.setColor('RED')
        		.setTimestamp();
        	message.channel.send(error)
        	return
    	}
    	if (!args[0]) {
        	const syntax = new Discord.MessageEmbed()
              		.setTitle(`${emojis.error} Syntax error`)
              		.setDescription(`**Use : **\`?reload [Command]\`\n\n**[] Required**\n**() Optionnal**`)
              		.setColor('RED')
              		.setTimestamp();
	  	message.channel.send(syntax)
	  	return
    	}
    	const commandName = args[0].toLowerCase();
    	const command = message.client.commands.get(commandName)
			|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) {
		const error = new Discord.MessageEmbed()
        		.setTitle(`:x: Error`)
        		.setDescription(`No command called \`${commandName}\``)
        		.setColor('RED')
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
        		.setTitle(`:x: Error`)
        		.setDescription(`I can't reload \`${commandName}.js\`\nError : ${err}`)
        		.setColor('RED')
        		.setTimestamp();
       		message.channel.send(error)
        	return
	}
	const done = new Discord.MessageEmbed()
        	.setTitle(`:white_check_mark: Success action`)
        	.setDescription(`The command \`${commandName}\` have been reloaded !`)
        	.setColor('GREEN')
        	.setTimestamp();
       	message.channel.send(done)
}
module.exports.help = {
  name: "reload"
}
