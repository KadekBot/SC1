const chalk = require("chalk")
const fs = require("fs")

global.antilink = false
global.antiwame = false
global.autodltt = false
global.autosticker = false
global.autoreadsw = true
global.hituet = 0
global.creator = "6283114072346@s.whatsapp.net"
global.thumb = fs.readFileSync(`./image/thumb.png`)
global.fake = `© KadekBotzz`
global.packname = `Jangan Lupa Sewa`
global.author = `KadekBotzz`
global.ownerNomor = '6283114072346'
global.ownerName = 'KadekBotzz'
global.ownerNumber = ["6283114072346@s.whatsapp.net"]
global.mess = {
    wait: 'Loading ...',
    succes: 'Done',
    admin: 'Fitur khusus admin group!',
    botAdmin: 'Bot bukan admin!',
    owner: 'Fitur khusus owner bot!',
    group: 'Fitur khusus dalam group!',
    private: 'Fitur khusus dalam private chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!',
    error: 'Error',
    premium: 'Sepertinya anda bukan user premium',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})