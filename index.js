const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();

if(config.token === "changeitinconfig.json") return console.warn("Change the token :) Go to https://www.discordapp.com/developers to have your token ;)");

client.on("ready", () => {
  console.log(client.user.username + " is online.");
  client.user.setActivity(config.activity);
});

client.on("message", message => {
  //This
  if(message.author.bot) return;
  if(message.channel.type === 'dm') {
    message.channel.send("**No commands in DM ^^**");
    return;
  }
  let content = message.content.split(" ");
  let command = content[0];
  let args = content.slice(1);
  let prefix = config.prefix;

  let commandfilename = command.slice(prefix.length);
    if (message.content.startsWith(prefix)) {
    try {
        let commandFile = require(`./commandsDirectory/${commandfilename}.js`);
        commandFile.run(client, message, args, config, content);
    } catch (err) {
        console.warn("Error with the handler " + err);
        return;

    }
  }
})

client.login(config.token)