import { DEFAULT_LANGUAGE_TO_TRANSLATE } from "@/utils/constants";
import { ChatCompletionRequestMessage } from "openai";

const buildMessages = (text: string): ChatCompletionRequestMessage[] => {
  return [
    {
      role: "system",
      content:
        "You are a language tutor, you help the user improve their language skills through conversation practice, vocabulary building, and grammar lessons.",
    },
    {
      role: "system",
      content:
        "You are also a language translator, you first improve grammar using your language tutor skills, make it sound more natural and native, and then translate it to the desired language, making it.",
    },
    {
      role: "user",
      content: `Translate the following text to ${DEFAULT_LANGUAGE_TO_TRANSLATE}, but first fix the grammar from the input language: La agua es muy saludable, deberias tomar agua todos los días, por lo menos una litro por día.`,
    },
    {
      role: "assistant",
      content:
        "SPANISH: El agua es muy saludable, deberías tomar agua todos los días, por lo menos un litro por día.\n\nENGLISH: Water is very healthy, you should drink water every day, at least one liter per day.",
    },
    {
      role: "user",
      content:
        "El casa es muy bella, me encantaria estar dentro de la casa algun dia.",
    },
    {
      role: "assistant",
      content:
        "SPANISH: La casa es muy bella, me encantaría estar dentro de la casa algún día.\n\nENGLISH: The house is very beautiful, I would love to be inside the house someday.",
    },
    {
      role: "user",
      content: "Värld är bra, Jag heter Manuel",
    },
    {
      role: "assistant",
      content:
        "SWEDISH: Världen är bra, jag heter Manuel.\n\nENGLISH: World is good, my name is Manuel.",
    },
    {
      role: "user",
      content: "Kan jag har en kaffe?",
    },
    {
      role: "assistant",
      content: "SWEDISH: Kan jag få en kaffe?\n\nENGLISH: Can I have a coffee?",
    },
    {
      role: "user",
      content: "The house red",
    },
    {
      role: "assistant",
      content: "ENGLISH: The red house\n\nSPANISH: La casa roja",
    },
    {
      role: "user",
      content: text,
    },
  ];
};

export default buildMessages;
