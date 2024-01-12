module.exports = {
    name: 'ping',
    description: "The bot responds back with \'pong\'",
    execute(client, message, args, Discord){
        message.channel.send('pong');
    }
}