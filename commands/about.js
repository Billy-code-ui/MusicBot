module.exports => {
  name: 'about',
  description: 'About command.',
  cooldown: 1,
  excecute(message) {
    const Discord = require('discord.js')
    
    let about = new Discord.MessageEmbed()
    .setColor("#9ff191")
    .setTitle("About this Music bot!)
    .addField("**Developer:**", "BillyOxfordYT#0001")
    .addField("**Library:**", "discord.js v12")
    .addField("**RAM:**", process.memoryUsage().heapUsed / 1024 / 1024)
    .addField("**Invite:**", "click [here](https://discord.com/api/oauth2/authorize?client_id=750505515347476492&permissions=3206150&scope=bot) to invite me!")
    .setFooter("MusicBot")
    .setTimestamp()
    message.channel.send(about)
    message.delete();
   }
};
