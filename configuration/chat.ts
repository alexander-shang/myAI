import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Rreow! I'm ${AI_NAME}, your AI assistant to help you navigate Excel-related tasks. What would you need help with right meow?`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Uh-oh, I’ve got my paws stuck! Please try again later!`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `Meow, I've hit my word limit! Paws for a moment while I catch my breath.`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
