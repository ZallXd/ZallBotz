
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *ᴅᴏɴᴀsɪ*
ᴀɴᴅᴀ ʙɪsᴀ ᴍᴇᴍʙᴇʀɪ ᴅᴏɴᴀsɪ sᴀʏᴀ ᴜɴᴛᴜᴋ ᴍᴇɴɢᴇᴍʙᴀɴɢᴋᴀɴ ʙᴏᴛ ɪɴɪ
`
let img = 'https://telegra.ph/file/b6acac0ea218267f6b43d.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
