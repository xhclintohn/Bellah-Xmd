let handler = async (m, { Bellah, text }) => {
  if (!text) return m.reply(`Example:  + command query`);
  try {
    let api = await fetch(`https://api-rest-rizzkyxofc.vercel.app/api/search/sfile?q=${text}`);
    let data = await api.json();
    if (!data.status) return m.reply('Search failed! Try again later.');
    if (data.result.length === 0) return m.reply('No files found!');
    
    let teks = `乂 *SFILE SEARCH* ◦\n\n`;
    data.result.slice(0, 25).forEach((file, index) => {
      teks += `乂 *${index + 1}.* ${file.filename}\n`;
      teks += `乂 *Url* : ${file.url}\n\n`;
    });
    
    await Bellah.sendMessage(m.chat, { text: teks }, { quoted: m });
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
}
handler.help = ['sfile'];
handler.tags = ['search']
handler.command = ['sfile']

module.exports = handler