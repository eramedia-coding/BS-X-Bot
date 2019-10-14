const Discord = require("discord.js");
const commando = require("discord.js-commando")

const embed = {
  "color": 16777215,
  "footer": {
    "icon_url": "https://cdn.discordapp.com/attachments/617442660038344803/617560922814414848/Webp.net-resizeimage.jpg",
    "text": "EraMedia Made || BS-X Computer"
  },
  "fields": [
    {
      "name": "Minecraft Servers",
      "value": "================"
    },
    {
      "name": "MC World Network",
      "value": "The MC World Revial Project. \n!server mcworld"
    },
    {
        "name": "Joe's Minecraft Server",
        "value": "Details Unknown. \n!server jms"
    },
    {
      "name": "Page 1/1",
      "value": "Showing 0/0"
    }
  ]
};

module.exports.embed = embed