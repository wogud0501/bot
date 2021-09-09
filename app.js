const Discord = require('discord.js')
const fs = require('fs')
const config = require('./config.json')
const prefix = require('./config.json')
const client = new Discord.Client()

client.on("ready" , ready => {
    console.log("작동 준비가 완료 되었어요!")
    client.user.setActivity("신명나게 간식을 뜯는중!")
})


client.on("message" , message => {
    if(message.content === (config.prefix) + "핑") 
    message.reply(`${Date.now() - message.createdTimestamp}ms 에요! API 핑은 ${Math.round(client.ws.ping)}ms에요!`)
    
    if(message.content === (config.prefix) + "아바타") 
    message.reply(message.author.displayAvatarURL())
    })
client.login(config.token)