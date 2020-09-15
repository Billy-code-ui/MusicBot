module.exports = {
	name: 'help',
	description: 'help command.',
	cooldown: 5,
	execute(message) {
	    const Discord = require('discord.js')
	    const help = new Discord.MessageEmbed()
	    .setColor("RANDOM")
	    .setTitle("Commands!")
	    .setDescription("**Here are the commands for this bot!**\n\nhelp\nnp\nplay\nvolume\nskip\nstop\nqueue")
	    message.channel.send(help)
	    message.delete();
	}
};
