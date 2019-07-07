const Discord = require('discord.js');
const config = require('./config.json');
const { prefix } = require('./config.json');
const client = new Discord.Client();
const { RichEmbed } = require('discord.js');

client.on('ready', () => {
    console.log(`===================================`)
    console.log(`Bot Loaded: ${client.user.tag}`)
    console.log(`Bot Author: Ori#0004`)
    console.log(`Servers: ${client.guilds.size}`)
    console.log(`Users using Bot: ${client.users.size}`)
    console.log(`Bot Version: 1.1`)
    console.log('Library: Discord.js')
    console.log(`===================================`)
    client.user.setStatus('dnd')
    client.user.setActivity("people type '+plan'", { type: "WATCHING" })
});

client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith(`${prefix}plan`)) {
        const embed = new RichEmbed()
        .setTitle('Songoda Survival Server Plans')
        .setColor(0x008080)
        .setDescription(`Welcome to Songoda Survival\n \nHere are the plans for the server:\n \nWe are going to all have houses moderately close together, From there we will build tunnels underground for fast ways to get in and out of places, We want this to all be a collective effort as we're all gonna be in one nice community of players!\n \nUse **+su <suggestion>** in <#597161939793215596> to vote on ideas.\n \nHave fun :wink:`)
        .setThumbnail(`${client.user.avatarURL}`)

        message.channel.send({embed})
    }
});
client.on('message', message => {
    if (!message.guild) return;
      if (message.content.startsWith(`+su`)) {
          const embed = new RichEmbed()
          .setAuthor('New Suggestion')
          .setTitle('Upvote | Downvote')
          .setColor(0xF08080)
          .setDescription('Suggest plans in: <#597161939793215596>\n ``+su <suggestion>``\n \nDiscuss the suggestion and we __all__ will collectively decide if we should add it to the plan! :smile:')
          .setThumbnail(`${message.author.displayAvatarURL}`)
          .addBlankField(true)
          .addField('Suggestion:',
          `**${message.author.lastMessage}**`)
          .addField('Suggestion by:',
          `**${message.author.tag}**`)
  
          client.channels.get("597161939793215596").send(embed);
          message.delete();
    }
});
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === '👋new-peoples');
    if (!channel) return;
    channel.send(`Player, <@${member.id}>, Just joined the server!`)
    member.send(`Hello <@${member.id}>, Welcome to Songoda Survival server :smile:\n \nType +su <suggestion> to suggest plans to add & type +plans to view the current plans!`)
    member.addRole('597161677737164817')
    console.log(`<${member.user.tag}> joined & was given Survivalist role`)
});
client.on('message', message => {
    if (message.content.includes(`fag`, `FAG`, `Fag`)) {
        message.channel.send('<:PanCop:589141466727841793>')
        message.delete()
    }
})
client.login(config.token)
