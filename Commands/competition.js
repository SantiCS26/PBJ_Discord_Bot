module.exports = {
    name: 'competition',
    name: 'comp',
    description: "player can make choices based on reaction chosen",
    async execute(client, message, args, Discord){

        const channel = message.guild.channels.cache.find(channel => channel.name === "roles");;
        const teamJelly = message.guild.roles.cache.find(role => role.name === "Team Jelly");
        const teamPB = message.guild.roles.cache.find(role => role.name === "Team Peanut Butter");

        const teamJellyEmoji = '🍇';
        const teamPBEmoji = '🥜';

        let competition = new Discord.MessageEmbed()
            .setColor('#e50000')
            .setTitle('Choose a team to play on!')
            .setDescription('Choosing a team will decide who you will play for!\n\n'
                + `${teamJellyEmoji} for Team Jelly\n`
                + `${teamPBEmoji} for Team Peanut Butter`);

        let messageEmbed = await message.channel.send({embeds: [competition]});
        messageEmbed.react(teamJellyEmoji);
        messageEmbed.react(teamPBEmoji);

        client.on('messageReactionAdd', async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            
            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name === teamJellyEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teamJelly);
            }
                if (reaction.emoji.name === teamPBEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(teamPB);
            }

        }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel){
                if (reaction.emoji.name === teamJellyEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(teamJelly);
            }
                if (reaction.emoji.name === teamPBEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(teamPB);
            }

        }
        });

    }
}