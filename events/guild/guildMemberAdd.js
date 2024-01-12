const profileModel = require (`../../models/profileSchema`);

module.exports = async (client, discord, member) =>{
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        coins: 100,
        bank: 0
    });
    profile.save();

}