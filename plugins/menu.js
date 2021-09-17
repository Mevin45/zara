const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'menu', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/VmvRcR4/zara1.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `⛦━━━━━✨️𝐌𝐞𝐯𝐢𝐧✨️━━━━━⛦


𝐇𝐞𝐥𝐥𝐨👋 𝐈 𝐚𝐦 𝐚 𝐌𝐞𝐯𝐢𝐧 𝐛𝐨𝐭.
            *🌼 𝓩𝓐𝓡𝓐🌼*

▣▣▣▣▣▣▣▣▣🔰🔰🔰▣▣▣▣▣▣▣▣▣▣▣
✨️🅼🅴🅳🅸🅰 🅲🅾🅼🅼🅰🅽🅳✨️

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -song <text>
💜🅤🅢🅔➜ Downloads song for you.
⚠️.song  baby love

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -video <yt link>
💜🅤🅢🅔➜ Downloads video from YouTube link.

⏭️🄲🄾🄼🄼🄰🄽🄳➜  -insta <link>
💜🅤🅢🅔➜   Downloads content from instagram.

⏭️🄲🄾🄼🄼🄰🄽🄳➜  -yt<text>
💜🅤🅢🅔➜   Gives you YT links.

⏭️🄲🄾🄼🄼🄰🄽🄳➜  -show <show name>
💜🅤🅢🅔➜   Get info related to tv series and shows.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -gif 
💜🅤🅢🅔➜ Converts video to gif.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -tomp3 
💜🅤🅢🅔➜ Converts video into audio.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -say <text>
💜🅤🅢🅔➜ Converts text into voice.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -img <text>
💜🅤🅢🅔➜ It sends image from google.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -trt <language code>
💜🅤🅢🅔➜ Translate the text you tag.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -wiki <text>
💜🅤🅢🅔➜ It sends Wikipedia result.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -lyric <text>
💜🅤🅢🅔➜ Finds the lyrics of the song.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -covid <country code>
💜🅤🅢🅔➜ Send the covid stats of your country.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -weather <city>
💜🅤🅢🅔➜ Tells you about the weather of your place.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -removebg 
💜🅤🅢🅔➜ Removes the background of tge image.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -ocr
💜🅤🅢🅔➜ Finds the text written on the image.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -wallpaper
💜🅤🅢🅔➜ It sends you random wallpaper.

■□■□■□■□■□🌼 𝓩𝓐𝓡𝓐🌼■□■□■□■□■□
😂🅵🆄🅽  🅲🅾🅼🅼🅰🅽🅳🆂😂

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -joke 
💜🅤🅢🅔➜ It sends a random joke.
 
⏭️🄲🄾🄼🄼🄰🄽🄳➜ -meme <text>
💜🅤🅢🅔➜ Cations the image into a meme.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -quote 
💜🅤🅢🅔➜ It sends a random quote.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -ss <website link>
💜🅤🅢🅔➜ It sends the screenshot of the website.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -changesay <text>
💜🅤🅢🅔➜ Converts text into changesay meme image.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -trumpsay
💜🅤🅢🅔➜ Convert text into Trump's tweet.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -compliment 
💜🅤🅢🅔➜ Gives you a compliment.

⏭️🄲🄾🄼🄼🄰🄽🄳➜  -bitly <link>
💜🅤🅢🅔➜   Shorten your link.

⏭️🄲🄾🄼🄼🄰🄽🄳➜  -dict 
💜🅤🅢🅔➜   Dictionary [-dict en;anime]

⏭️🄲🄾🄼🄼🄰🄽🄳➜  -zodiac <leo> 
💜🅤🅢🅔➜   Tells you about your horoscope.

⏭️🄲🄾🄼🄼🄰🄽🄳➜  -qr <text>
💜🅤🅢🅔➜   Converts text into qr code.

⏭️🄲🄾🄼🄼🄰🄽🄳➜  -movie 
💜🅤🅢🅔➜  Gives you info about movie.
⚠️movie master

⏭️🄲🄾🄼🄼🄰🄽🄳➜  -anime <text>
💜🅤🅢🅔➜  Gives you info about anime.
⚠️anime 🌼 𝓩𝓐𝓡𝓐🌼
▣▣▣▣▣▣▣▣▣▣🌼 𝓩𝓐𝓡𝓐🌼▣▣▣▣▣▣▣▣▣▣
🤡🆂🆃🅸🅲🅺🅴🆁  🅲🅾🅼🅼🅰🅽🅳🤡

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -sticker 
💜🅤🅢🅔➜ Converts img/gif into a sticker.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -photo 
💜🅤🅢🅔➜ Converts sticker into image.

⏭️🄲🄾🄼🄼🄰🄽🄳➜ -attp <text>
💜🅤🅢🅔➜ Converts text into glowing sticker.
⚠️ex  attp 🌼 𝓩𝓐𝓡𝓐🌼
▣▣▣▣▣▣▣▣▣🔰🔰🔰▣▣▣▣▣▣▣▣▣▣▣
═════✨️🌼 𝓩𝓐𝓡𝓐🌼✨️═════
▣▣▣▣▣▣▣▣▣𝐌𝐞𝐯𝐢𝐧▣▣▣▣▣▣▣▣▣▣▣

`}) 

}));
