import {
	BaseCommandInteraction,
	ChatInputApplicationCommandData,
	Client,
} from "discord.js";
import { Spam } from "./commands/Spam";

export interface Command extends ChatInputApplicationCommandData {
	run: (client: Client, interaction: BaseCommandInteraction) => void;
}

export const Commands: Command[] = [Spam];
