const fs = require("fs")

let handler = async (m, { Sky, isCreator, Reply, text, example }) => {

if (!text) return m.reply(example("plugin name?"))
if (!text.endsWith(".js")) return m.reply("Name file in the required format .js")
if (!fs.existsSync("./plugins/" + text.toLowerCase())) return m.reply("File plugins successfully loaded!")
let res = await fs.readFileSync("./plugins/" + text.toLowerCase())
return m.reply(`${res.toString()}`)
}

handler.command = ["getp", "gp", "getplugins", "getplugin"]

module.exports = handler