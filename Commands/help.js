module.exports = {
    name: 'help',
    description: "Showcases the list of commands",
    execute(client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#b45f06')
        .setTitle('List of Commands')
        .setDescription('***Always be sure to start with \'!\'***')
        .addFields(
            {name : '!help', value : 'The bot will send the list of commands.'},
            {name : '!ping', value : 'The bot replies with \'pong\'. ' },
            {name : '!clear (# of messages to delete)', value : 'Bot will delete the selected # of messages.'},
            {name : '!competition / !comp', value : 'This allows the user to select a team for the current competition.'},
            {name : '!balance', value : 'Shows the user\'s current balance in PB&J Credits'},
            {name : '!beg', value : 'Allows the user to randomly gain a certain amount of money(**Max is 500**)'}
        )
        
        message.channel.send({embeds: [newEmbed]});
    }
}