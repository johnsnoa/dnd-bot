// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token, clientId, guildId } = require('./config.json');
const fs = require('fs');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

let charJson = JSON.parse(
    fs.readFileSync('./characters.json', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    })
);

let characters = charJson['characters'];

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

    const options = interaction.options;
	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply(c.name);
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	} else if (commandName === 'create-character') {
        /*let c = {
            name: options.get('name').value,
            level: options.get('level').value,
        };
        for (var i = 0; characters != null && i < characters.length; i++) {
            if (characters[i].name === c.name) {
                await interaction.reply('A character with that name already exists! Use the command `edit-character` instead.');
                return;
            }
        }
        characters.push(c);
        fs.writeFile('./characters.json', JSON.stringify(charJson), err => {
            if (err) {
                console.error(err);
            }
        });*/

        await interaction.reply(`New character created: ${c.name} (Level ${c.level})`);
    }
});

// Login to Discord with your client's token
client.login(token);