import mongoose from "mongoose";

export default async function configDb() {
  try {
    if (process.env.MONGODB_URI) {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connexion réussi à la base de donnée')
    } else {
      throw new Error("Impossible de se connecté à la base de donnée");
    }
  } catch (error) {
    console.error(error);
  }
}
