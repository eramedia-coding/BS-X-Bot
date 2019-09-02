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
      "name": "!server",
      "value": "========"
    },
    {
      "name": "Usage",
      "value": "!server <region>"
    },
    {
      "name": "Details",
      "value": "Shows All Avalible Servers! \nUsing Regions!"
    },
    {
      "name": "Regions",
      "value": "US, EU, Global"
    }
  ]
};

module.exports.embed = embed