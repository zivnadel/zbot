import { BaseCommandInteraction, Client } from "discord.js";
import { Command } from "../Commands";

export const Spam: Command = {
	name: "spam",
	description: "Spam a requested user with pings",
	type: "CHAT_INPUT",
	options: [
		{
			name: "user",
			type: "USER",
			required: true,
			description: "Enter the username of who you want to spam",
		},
		{
			name: "times",
			type: "INTEGER",
			required: true,
			description: "Enter the number of times you want to ping the user",
		},
	],
	run: async (client: Client, interaction: BaseCommandInteraction) => {
		const user = interaction.options.get("user")?.value;
		const times = interaction.options.get("times")?.value;

		let content: string = "";

		for (let i = 0; i < times!; i++) {
			content += `<@${user}> `;
		}

		await interaction.followUp({
			ephemeral: false,
			content,
		});
	},
};
