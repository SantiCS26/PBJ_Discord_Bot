const fs = require('fs')

module.exports = (client, Discord) => {
    const command_file = fs.readdirSync('./Commands/').filter (file => file.endsWith('.js'));

    for (const file of command_file){
        const command = require(`../Commands/${file}`);

        if (command.name){
            client.Commands.set(command.name, command);
        }else{
            continue;
        }
    }
}