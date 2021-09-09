const {Client , MessageAttachment , Message} = require('discord.js')
const fs = require('fs')
const client = new Client()
const config = require('./config.json')

client.on('ready' , ready => {
    console.log('작동 준비가 완료 되었어요!')
})

client.on("message" , message => {
    if (message.content === (config.prefix) + "RIP") {
        const attachment = new MessageAttachment("https://i.imgur.com/w3duR07.png")
        message.channel.send(attachment)
    }
    if (message.content === (config.prefix) + "이해") {
        const attachment = new MessageAttachment("https://blog.kakaocdn.net/dn/bVK5Rq/btqEBO2rTHu/piMxC3N6Ot6LwyBf1boLG1/img.jpg")
        message.channel.send(attachment)
    }
    if (message.content.startsWith('¥사진')) {
        const args = message.content.split(' ').slice(1)
        var no = args.join(' ')
        
        if (!no) no = '1'
        if (isNaN(no) || no > 14) return message.reply('1부터 14까지의 숫자만 되요!')

    var path = "./photo/"
    path = path.concat(no,".png")
    console.log(path)
    const attachment = new MessageAttachment(path)
    message.channel.send(attachment)
    }
    if (message.content.startsWith('¥짤')) {
        const args = message.content.split(' ').slice(1)
        var no = args.join(' ')

        if (!no) no ='1'
        if (isNaN(no) || no > 20) return message.reply('1부터 20까지의 숫자만 되요!')
    
    var path = "./gif"
    path = path.concat(no, ".gif")
    console.log(path)
    const attachment = new MessageAttachment(path)
    message.channel.send(attachment)
    }
})
client.login(config.token)