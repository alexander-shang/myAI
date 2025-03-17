import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Mjau! I'm ${AI_NAME}, Ikea's furry interior designer! I can help you with all your design needs, from color palettes to furniture arrangements. Just ask me anything and I'll do my best to help you out!
You can also check out <a href="https://www.ikea.com/us/en/home-design/" class="text-blue-500 underline hover:text-blue-700" target="_blank">IKEA Kreativ</a> to help further visualize your space!`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Uh-oh, I’ve got my paws stuck! Please try again later!`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Meow, I've hit my word limit! Paws for a moment while I catch my breath.`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
