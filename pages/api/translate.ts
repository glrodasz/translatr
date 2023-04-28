import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";
import { MAX_COUNT } from "@/utils/constants";
import buildMessages from "@/helpers/buildMessages";

const TOKEN_FACTOR = 4;
const MAX_TOKENS = (MAX_COUNT / TOKEN_FACTOR) * 3;
const GTP_MODEL = "gpt-3.5-turbo";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const cache = new Map<string, string>();

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { text } = req.body;

  if (req.method === "POST") {
    const cachedTranslation = cache.get(text);

    if (cachedTranslation) {
      console.log("Hit cache layer");
      return res.status(200).json({ translatedText: cachedTranslation });
    }

    try {
      const response = await openai.createChatCompletion({
        model: GTP_MODEL,
        messages: buildMessages(text),
        temperature: 0,
        max_tokens: MAX_TOKENS,
      });

      const translatedText =
        response.data?.choices?.[0]?.message?.content?.trim() ?? "";

      cache.set(text, translatedText);

      res.status(200).json({ translatedText });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Something went wrong with the translation." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default handler;
