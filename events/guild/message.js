require('dotenv').config();
const profileModel = require (`../../models/profileSchema`);


module.exports = async (client, Discord, message) => {
    const prefix = process.env.PREFIX;
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    let profileData;
    try{
        profileData = await profileModel.findOne({userID: message.author.id})
        if (!profileData){
            let profile = await profileModel.create({
                userID: message.author.id,
                serverID: message.guild.id,
                coins: 100,
                bank: 0
            });
        }
    } catch(err) {
        console.log(err);
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.Commands.get(cmd);

    if(command){
        command.execute(client, message, args, Discord, profileData);
    }
}