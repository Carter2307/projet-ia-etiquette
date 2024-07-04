import { NextFunction, Response, Request } from "express";
import OpenAi from "openai";

const openai = new OpenAi({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

export const generateEtiquette = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Curcuma" }],
    model: "ft:gpt-3.5-turbo-0125:personal:etiquette-ai-agent:9gu1g9zu",
  });

  console.log(chatCompletion.choices[0].message.content);

  next();
};
