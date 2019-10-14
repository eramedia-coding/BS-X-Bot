//reqired
const Discord = require("discord.js");
const client = new Discord.Client();
//events
const help = require("./events/help");
const helpserver = require("./events/helpserver");
const servers = {
    mc: require("./events/minecraft/Server1"),
    //Satellaview
    us: require("./events/satellaview/serverUS"),
    eu: require("./events/satellaview/serverEU"),
    global: require("./events/satellaview/serverGL"),
    satellaplay: require("./events/satellaview/satellaplay/Satellaplay"),
    satellaplay2: require("./events/satellaview/satellaplay/Satellaplay1")
};
const Invite = require("./events/invite");
const prefix = "!";

client.on("ready", () => {
    console.log("BS-X Computer Has Been Launched.");
    client.user.setActivity("on Servers! || !help");
});
//Autorole :)
//currently disabled. could be replaced by another bot in a future update.
//client.on("guildMemberAdd", member => {
//    console.log("a user has joined the server.");
//    //FORK NOTE: please change 'Satellite People' to your defult member role / delete it.
//    const role = member.guild.roles.find(role => role.name === "Satellite People");
//    if (!role) return;
//    member.addRole(role);
//});

// Help code
client.on("message", message => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "help") {
        if (args[0] === "server")
            return message.channel.send({ embed: helpserver.embed }).catch(console.error);
        return message.channel.send({ embed: help.embed }).catch(console.error);
    }
    //this one is in ./events/help.js yeah I did that

    //Commands Code
    if (command === "website") {
        message.author
            .send("> The EraMedia Website \n Go to https://EraMedia.ml to see our website!")
            .catch(() => {});
        return message.channel.send("Check your DM's.");
    }

    if (command === "server") {
        const server = servers[args.join(" ").toLowerCase()];
        if (!server) {
            message.delete().catch(console.error);
            return message.channel.send("> Usage: \n> !server <region / Server name>");
        }

        return message.channel.send({ embed: server.embed });
    }

    if (command === "invite") {
        message.delete().catch(console.error);
        return message.author.send({ embed: Invite.embed }).catch(() => {});
    }
});

//ignore

// FORK NOTE: Your Bot's Token. Available on https://discordapp.com/developers/applications/me
// TIP: Put it in the .env file.
client.login(process.env.token);
