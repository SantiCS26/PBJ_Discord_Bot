module.exports = {
    name: 'clear',
    description: "Clears previous bot messages",
    async execute(client, message, args, Discord){
        
        if (!args[0])
         return message.reply('Please enter the amount of messages that you want to clear.');

        if (isNaN(args[0])) 
         return message.reply('Please enter a real number!');

        if(args[0] > 50)
         return message.reply('Hey buddy, that\s too many messages, lower you number!');

        if (args[0] < 1)
         return message.reply ('If you couldn\'t tell, it\s impossible to delete less than 1 message.');

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            message.channel.send (String(args[0]) + ' messages have been succesfully deleted!')
        })
    }
}