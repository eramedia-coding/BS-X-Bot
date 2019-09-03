//reqired
const Discord = require("discord.js");
const client = new Discord.Client();
//events
const help = require('./events/help')
const helpserver = require('./events/helpserver')
const serverUS = require('./events/serverUS')
const serverEU = require('./events/serverEU')
const serverGL = require('./events/serverGL')
const Satellaplay = require('./events/Satellaplay')
const Satellaplay1 = require ('./events/Satellaplay1')
const Invite = require ('./events/invite')


client.on("ready", () => {
  console.log("BS-X Computer Has Been Launched.");
  client.user.setActivity("on Servers! || !help")
});
//Autorole :)

client.on('guildMemberAdd', member => {
  console.log('a user has joined the server.');
  //FORK NOTE: please change 'Satellite People' to your defult member role / delete it.
  const role = member.guild.roles.find('name', 'Satellite People');
  member.addRole(role);
});

// Help code
client.on('message', message => {
 
  if(message.content.startsWith("!help")) {
  if(message.content.startsWith("!help server")) {
    //this one is embed
   message.channel.send({embed : helpserver.embed}).catch(console.error)};
   return};
     //this one is in ./events/help.js yeah I did that
 message.channel.send({embed : help.embed}).catch(console.error);



//Commands Code

  if(message.content.startsWith('!website')) {
   message.author.send('> The EraMedia Website \n Go to https://EraMedia.ml to see our website!')
   message.channel.send("Check your DM's.")};
  
  if(message.content.startsWith('!server')) { 
   if(message.content.startsWith('!server us')) {
     message.delete().catch(console.error)
     message.channel.send({embed : serverUS.embed}).catch(console.error)
     return
   }

   if(message.content.startsWith('!server eu')) {
     message.delete().catch(console.error)
     message.channel.send({embed : serverEU.embed}).catch(console.error)
     return
   }

   if(message.content.startsWith('!server global')) {
     message.delete().catch(console.error)
     message.channel.send({embed : serverGL.embed}).catch(console.error)
     return
   }
   if(message.content.startsWith('!server satellaplay')) {
     if(message.content.startsWith('!server satellaplay 2')) {
       message.delete().catch(console.error)
       message.channel.send({embed : Satellaplay1.embed});
       return
     }
     message.delete().catch(console.error)
     message.channel.send({embed : Satellaplay.embed});

     return
   }
   message.delete().catch(console.error)
   message.channel.send("> Usage: \n> !server <region / Server name>")
    }

    if(message.content.startsWith(!invite)) {
message.delete().catch(console.error)
message.author.send(embed , Invite.embed);
    };

//Banned Words / Websites

 if(message.content.includes('Nigger')) {
   message.delete().catch(console.error)
       message.author.send('The N-Word? WHY dude!')
};

if(message.content.includes('fuck')) {
  message.delete().catch(console.error)
  message.author.send('Why THAT WORD DUDE?')
}

 if(message.content.includes('https://discord.gg')) {
   message.delete().catch(console.error)
       message.author.send('Invites are not allowed dude!')
}});


//ignore


// FORK NOTE: Your Bot's Token. Available on https://discordapp.com/developers/applications/me
// TIP: Put it in the .env file.
client.login(process.env.token);
