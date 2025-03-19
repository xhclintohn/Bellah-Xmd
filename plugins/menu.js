const fs = require("fs");
const ffmpeg = require("fluent-ffmpeg");
const axios = require("axios");

const qchanel = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: `120363344966376128@newsletter`,
newsletterName: `⏤͟͟͞͞Bellah📌 || Whatsapp Channel ⭐`,
jpegThumbnail: "",
caption: `GiddyTennor. ⚡`,
inviteExpiration: Date.now() + 1814400000
}}}
const pushname = m.pushName || "No Name"
let handler = async (m, { Bellah }) => {
    let teksnya = `
ʜɪ,${pushname}!*   *This is* *Bellah Xmd a multi device awesome 
bot made by Giddy Tennor*


⚝ *I N F O - B O T* ⚝
  
  ≡ *BotName* : ${global.botname}
  ≡ *Name* : ${pushname}
  ≡ *Prefix* : ${global.xprefix}
  ≡ *Totalfeature* : 109
  
*//Owner Menu//*
 ❥listgc
 ❥self
 ❥public
 ❥autotype
 ❥autorecordtype
 ❥autorecording
 ❥autostatusview
 ❥autoblock
 ❥onlypc
 ❥onlygc
 ❥block
 ❥unblock

*//Group Menu//*
 ❥antibardword
 ❥antiforeign
 ❥antilinkgc
 ❥open
 ❥close
 ❥kickall
 ❥poll
 ❥hidetag 
 ❥tagall
 ❥poll
 ❥promote
 ❥add
 ❥join
 ❥demote
 ❥left 
 ❥resetlink
 ❥linkgc
 ❥setppgc

*//Download menu//*
 ❥play
 ❥song
 ❥play2
 ❥lyrics 
 ❥ytmp3 
 ❥ytmp4 
 ❥igdl
 ❥igstalk 
 ❥apk
 ❥idgc
 ❥idch
 ❥remini
 ❥trackip
 ❥myip
 ❥wallpaper
 ❥gitclone
 ❥tt
 ❥spotifydown
 ❥spotifysearch
 ❥quiz
 ❥mediafire

 *//Crash Menu//*
 ❥Bellah-trash
 ❥Bellah-flow
 ❥Bellah-spam
 ❥Bug-group

*//Setting Menu//*
 ❥setcallprivacy
 ❥setreactionmode
 ❥setreadtextprivacy
 ❥public/self

*//Plugins Menu//*
 ❥menu2
 ❥listplugin
 ❥getplugin
 ❥brat

*//Other Menu//*
 ❥translate
 ❥friend
 ❥define
 ❥quote
 ❥emojimix
 ❥bible
 ❥quran
 ❥repo
 ❥ping
 ❥ip
 ❥owner
 ❥uptime
 ❥url
 ❥vv
 ❥anime
 ❥toaudio
 ❥tovideo
 ❥addvolvideo 
 ❥addvolaudio 
 ❥delete
 ❥couple
 ❥friend
 ❥translate
 ❥country
 ❥stalkch
 ❥kalkulator
 ❥upswtext
 ❥upswvid
 ❥upswimge
 ❥upswaudio
 ❥enc
 ❥pair
 ❥sendlocation
 
> join updates gc
https://chat.whatsapp.com/CzFlFQrkdzxFw0pxCBYM7H
  
  
  
  
  
  
`;

let videoUrl = 'https://e.top4top.io/m_3250qlhay1.mp4'; // Ganti dengan URL video
let videoPath = './temp-video.mp4'; 
let thumbnailPath = './thumbnail.jpg'; 

try {

console.log('Mengunduh video...');
const response = await axios({
method: 'get',
url:videoUrl,
responseType: 'stream',
});

const writer = fs.createWriteStream(videoPath);
response.data.pipe(writer);

writer.on('finish', () => {
console.log('Video berhasil diunduh!');

ffmpeg(videoPath)
.screenshots({
count: 1,
folder: './',
filename: 'thumbnail.jpg',
size: '320x180' 
})
.on('end', async () => {
console.log('Thumbnail berhasil dibuat!');

await Bellah.sendMessage(m.chat, {
video: { url:videoUrl }, 
mimetype: 'video/mp4',
caption: teksnya,
jpegThumbnail: fs.readFileSync(thumbnailPath)
}, { quoted: qchanel });

await Bellah.sendMessage(m.chat, { 
audio: { url: 'https://files.catbox.moe/qpllra.mp3' }, 
mimetype: 'audio/mpeg', 
ptt: true }, { quoted: qchanel });

fs.unlinkSync(videoPath);
fs.unlinkSync(thumbnailPath);
})
.on('error', (err) => {
console.error('Gagal membuat thumbnail:', err);
});
});
} catch (error) {
console.error('Gagal mengunduh video:', error);
await Bellah.sendMessage(m.chat, { text: "Gagal mengunduh video, pastikan link valid!" }, { quoted: m });
}
};


handler.command = ["menu2"];

module.exports = handler;
