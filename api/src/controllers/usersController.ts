import UsersModel from "../models/users.model";
import bcrypt from "bcrypt";
import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import { User } from "types";


export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Récupérer l'utilisateur qui a cette adresse e-mail dans la base de données
    const user = await UsersModel.findOne<User>({email});
  
    // Si l'utilisateur n'existe pas
    if (!user) {
      res.status(400).send("Invalid email or password");
      return;
    }
  
    // Si l'utilisateur existe, vérifier le mot de passe
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      // Si le mot de passe est incorrect
      res.status(400).send("Invalid email or password");
      return;
    }
  
    user.last_login_at = Date.now();
    await UsersModel.findOneAndUpdate({email}, user)
  
    // Si le mot de passe est correct, créé un token de session et le renvoyer
    // const token = ""; // Mettre en place json web token (JWT)
    const tokenPayload = { id: user.id };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET || "", {
      expiresIn: "24h",
    });
  
    console.log("Token créé", token);

    console.log("User logged in", user.email);

    res.json({
      email: user.email,
      token,
    });
  

};

export const register = async (req: Request, res: Response) => {
    const { email, password } = req.body;


    console.log(req.body)

    try {
        // 1. Vérifier qu'un utilisateur avec cet e-mail n'existe pas déjà
    const user = await UsersModel.findOne<User>({email});

    console.log(user)
  
    // 2. S'il existe déjà, renvoyer une erreur
    if (user) {
      return res.status(403).json({
        status: "fail",
        message: "User already exists with this email"
      });

    }
  
    // Hasher le mot de passe avant de le stocker
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // 3. Sinon, créer l'utilisateur et on renvoie "OK"
    const newUser = await UsersModel.create({email, password: hashedPassword});
  
  
    res.status(200).json({
        status: "success",
        data: {
            user: newUser
        }
    });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Internal server Error",
            error: error
        });
    }
  
};