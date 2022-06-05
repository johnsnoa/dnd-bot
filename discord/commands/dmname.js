const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dmname')
		.setDescription('Grab a DM nickname from the nicknames table'),
	async execute(interaction) {
        const messages = await interaction.channel.messages.fetchPinned();
		const messages_content = messages.map((message) => { return { id: message.id, content: message.content }});

        const selected = messages_content[Math.floor(Math.random() * messages_content.length)];
        
        const replymsg = (selected && selected.content) || 'There are not any messages pinned.';
        if(selected) await interaction.channel.messages.fetch(selected.id).then((message) => message.unpin());
        return(interaction.reply({content: replymsg, ephemeral: true}));
	},
};