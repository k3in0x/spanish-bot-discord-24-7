const Discord = require('discord.js');

const client = new Discord.Client();

const token = process.env.token;
 
 

client.on('ready', () => {

    console.log('I am ready!');

});

 

// THIS  MUST  BE  THIS  WAY

client.login(token).catch(err => console.log(err));

//"token" is the Client Secret
