const prefix = require('./config.json')
const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client()
const prefix2 = require('./config.json')
const config = require('./config.json')
const { Z_HUFFMAN_ONLY } = require('zlib')
const mongodb = require('mongodb')


client.on('ready' , ready => {
    console.log('작동 준비가 완료 되었어요!')
})

const convertImoticon = (who) => {
    if(who === "가위"){
        return "✌️"
    }
    else if(who === "바위"){
        return "✊"
    }
    else if (who=== "보"){
        return "🖐️"
    }
}

client.on("message" , message => {
    if(message.content === (config.prefix2) + " 간식먹을래?")
    message.reply("**`무슨 간식이야? 꼬기야 아니면 채소야? 채소는 싫은데...`**")
    if(message.content === (config.prefix2) + " 자기소개해")
    message.reply("**`안녕! 난 쪼꼬팹시네 강아지인 쌉기여미 꼬미야!`**")
    if(message.content === (config.prefix2) + " ")
    message.reply("")
    if(message.content === "가위" || message.content === "바위" || message.content === "보") {
        const human = message.content
        const list = ["가위", "바위", "보"]
        const random = Math.floor(Math.random() * 3)

        const bot = list[random]

        let winner = ""

        if(human === bot) {
            winner = "비겼어요!"
        }
        else {
            human === "가위" ? (winner = bot === "바위" ? "봇" : "인간") : ""
            human === "바위" ? (winner = bot === "보" ? "봇" : "인간") : ""
            human === "보" ? (winner = bot === "가위" ? "봇" : "인간") : ""
        }
        const result = 
        `
        사람은 ${convertImoticon(human)}을 냈구요!  봇은 ${convertImoticon(bot)} 을 냈어요!
        ${winner === "비겼어요!" ? "쩝 한 판 더 합시다 이번엔 간식 얻어가겠슴미다 아 승자는" : winner + "이 이겼어요!!"}
        `

        message.reply(result)
        }
})  
client.login(config.token)
