require('../settings');

let handler = async (m, { Bellah, text, reply, prefix, command }) => {
  if (!text) return reply(`Ex: +brat i love you`)
  const media = `https://brat.caliphdev.com/api/brat?text=${text}`;

  Bellah.sendImageAsSticker(m.chat, media, m, {
    packname: "Bellah Xmd",
    author: "Giddy Tennor"
  });
}

handler.help = ['sticker brat'];
handler.tags = ['sticker'];
handler.command = ["sbrat", "brat"];

module.exports = handler;
