module.exports = {
    name: 'balance',
    //aliases: ["bal", "bl"]
    description: "The bot shows the user's current amount of PBJ credits!",
    execute(client, message, args, Discord, profileData){
        message.channel.send(`Your wallet balance is: ${profileData.PBJ_Credits}, your bank balance is: ${profileData.bank}`);
    }
}