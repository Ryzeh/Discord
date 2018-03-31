const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`OFC bot ready ! by Blushley`);
});

bot.on('guildMemberAdd', member => {

    var role = member.guild.roles.find('name', 'Membres🔷');

    member.addRole(role);

    let welcomechannel = member.guild.channels.find(`name`, `🏢bienvenues🏢`);
    welcomechannel.send(`Nous te souhaitons la bienvenue ${member} 😉`);
});


bot.on('guildMemberRemove', member => {
    let byechannel = member.guild.channels.find(`name`, `🏢bienvenues🏢`);
    byechannel.send(`Adieu ${member}, tu es partit trop tôt **『OFC.World』**`);
});



bot.login('NDI5NTg3MzEyOTc2OTg2MTE0.DaD0Kg.Q0J8dpTcLHM_Y2ScULO7AGFamoE');