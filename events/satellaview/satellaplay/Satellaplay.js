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
      "name": "SatellaPlay",
      "value": "============"
    },
    {
      "name": "How To Connect",
      "value": "1.) Download the BS-X BIOS. (https://project.satellaview.org/download/BS-X%20BIOS%20(English)%20[No%20DRM]%20[2016%20v1.3].sfc) \n2.) Download your SNES emulator of choice. (SNES9x is recommended.) (https://github.com/snes9xgit/snes9x/releases/download/1.60/snes9x-1.60-win32-x64.zip)\n3.) Click the arrow near the X button.\n4.) Click 'Map Network Drive'\n5.) Mount this URL to Drive (satellaplay.ddns.net)\n6.) Download the latest broadcast data (Avalible In the Drive)\n7.) Extract and place into the BS-X data folder (SatData for SNES9x)\n8.) Launch the BIOS.\n9.) Enjoy!"
    },
    {
      "name": "WARNING:",
      "value": "This Service is only in the US."
    },
    {
      "name": "Instrutions || Page 1 / 2",
      "value": "!server satellaview2"
    }
  ]
};

module.exports.embed = embed
