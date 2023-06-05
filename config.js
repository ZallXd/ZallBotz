import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6281251051640', 'ᴢᴀʟʟ sᴛᴏʀᴇ', true],
  ['6285731706147', 'ᴢᴀʟʟ', true], 
  [] 
] //Numeros de owner 

global.mods = ['6281251051640'] 
global.prems = ['6281251051640', '6285731706147']
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.packname = 'ᴢᴀʟʟ ʙᴏᴛ' 
global.author = '@ᴢᴀʟʟ sᴛᴏʀᴇ' 
global.fgig = '▢ Instagram\nhttps://www.instagram.com/zallstorereal\n' 
global.dygp = 'https://chat.whatsapp.com/Bmb4I127aL7JNS3YS0VnKb'
global.fgsc = '' 
global.fgyt = ''
global.fgpyp = ''
global.fglog = 'https://i.imgur.com/Owmb93c.png' 

global.wait = '*⌛ _ᴡᴀɪᴛ..._*\n*▰▰▰▰▰▰▰▰▱▱ 80%*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
