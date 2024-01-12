const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client( {intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MESSAGE_REACTIONS"]}, {partials: ["MESSAGE", "CHANNEL", "REACTION"]} );
const mongoose = require('mongoose');


const fs = require('fs');

client.Commands = new Discord.Collection();
client.events = new Discord.Collection();

let handler = ['command_handler.js', 'event_handler.js'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

mongoose.connect(process.env.MONGODB_SRV, {
    useNewURLParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to the Database!');
}).catch((err)=>{
    console.log(err);
});

client.login(process.env.DISCORD_TOKEN);

