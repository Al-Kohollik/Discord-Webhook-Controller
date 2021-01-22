const fs = require('fs');
const ini = require('ini');
const readline = require('readline');
const Discord = require('discord.js');

const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));

const whSlices = config.WebhookURL.split('/');
let WebhookID = whSlices.slice(5, 6);
let WebhookToken = whSlices.slice(6, 7);

const webhookClient = new Discord.WebhookClient(WebhookID, WebhookToken);

console.log("Webhook Controller has started.\nType and enter messages you want the webhook to send here.");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    webhookClient.send(line);
});
