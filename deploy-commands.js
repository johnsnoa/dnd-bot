const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong!')
        .addStringOption(option => 
            option
                .setName('character-name')
                .setDescription("Your character's name")
                .setRequired(true)
        ),
	new SlashCommandBuilder().setName('server').setDescription('Replies with server info!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
    new SlashCommandBuilder()
            .setName('create-character')
            .setDescription('Create a new character sheet')
            .addStringOption(option => option
                .setName('name')
                .setDescription('Character name')
                .setRequired(true))
            .addStringOption(option => option
                .setName('class')
                .setDescription('Character class')
                .setRequired(true))
            .addIntegerOption(option => option
                .setName('level')
                .setDescription('Class level')
                .setRequired(false)),            
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);