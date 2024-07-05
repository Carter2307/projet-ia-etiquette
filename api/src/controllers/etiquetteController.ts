import { error } from "console";
import { Request, Response } from "express";
import OpenAi from "openai";
import type {Etiquette} from "../types/types"
import EtiquetteModel from "../models/etiquette.model";


const openai = new OpenAi({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

const assitantPrompt = `Tu es un expert en herboristerie. Je vais te donner le nom d'une épice et tu vas me fournir les informations nécessaires pour concevoir une étiquette. Les informations doivent inclure :\n\n- Le nom scientifique de l'épice.\n- Une courte description (3 lignes max) des bienfaits et des cas d'utilisation de l'épice.\n- Deux précautions à prendre lors de l'utilisation de l'épice.\n\nLes réponses doivent être en français et sous forme de json.`


export const create = async (req: Request, res: Response) => {

  const data: Etiquette = req.body;

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: assitantPrompt },
      {role: "user", content: data.nom}
    ],
    model: "ft:gpt-3.5-turbo-1106:personal::9hWdcSGN",
  });


  const parsedResponse = chatCompletion.choices[0].message.content?.replace("```json", "").replace('```', "")

  const gen = JSON.parse(parsedResponse as string);

  console.log(gen);

  const etiquette = await EtiquetteModel.create({
      ...data, 
      nomScientifique: gen.nom_scientifique,
      description: gen.description,
      precautions: gen.precautions,
      isComplete: true,
  })


  try {
    res.status(200).json({
      status: "success",
      data : {
        etiquette: etiquette
      }
    })

  }catch(e){
    console.error(error);
    res.status(500).json({
        status: "fail",
        message: error
    })
  }

};


export const getAll = async (req: Request, res: Response) => {

  try {
    const etiquettes = await EtiquetteModel.find();

    res.status(200).json({
        status: "success",
        data: {
          etiquettes: etiquettes
        }
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
        status: "fail",
        message: error
    })
  }
}



export const getEtiquette = async (req: Request, res: Response) => {

  try {
    const etiquette = await EtiquetteModel.findById(req.params.id);

    res.status(200).json({
        status: "success",
        data: {
          etiquette: etiquette
        }
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({
        status: "fail",
        message: error
    })
  }
}
