const commando = require('discord.js-commando');
const bot = new commando.Client();
const TOKEN = 'NDc0MzUzOTU4OTQ1NTU0NDUz.DkPSOQ.X4UQpVrAztAAlh5N68B9Qze33v8'



bot.on('message', function(message){    
    if(message.content == '^^join Hebrew')
    {
        message.channel.send('Added ' + message.author + ' to Hebrew role');
        let memberRole = message.member.guild.roles.find("name", "Hebrew");
        message.member.addRole(memberRole);
    }
});

bot.on('message', function(message){    
    if(message.content == '^^join hebrew')
    {
        message.channel.send('Added ' + message.author + ' to Hebrew role');
        let memberRole = message.member.guild.roles.find("name", "Hebrew");
        message.member.addRole(memberRole);
    }
});

bot.on('message', function(message){    
    if(message.content == '^^join English')
    {
        message.channel.send('Added ' + message.author + ' to English role');
        let memberRole = message.member.guild.roles.find("name", "English");
        message.member.addRole(memberRole);
    }
});


bot.on('message', function(message){    
    if(message.content == '^^join english')
    {
        message.channel.send('Added ' + message.author + ' to English role');
        let memberRole = message.member.guild.roles.find("name", "English");
        message.member.addRole(memberRole);
    }
});

bot.on('ready',function(){
    console.log("Ready");
})

bot.login(TOKEN);