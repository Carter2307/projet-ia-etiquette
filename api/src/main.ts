import "dotenv/config";
import configDb from "./config/db";
import app from "./app";

const port = parseInt(process.env.PORT || "0") || 3000;

//Connexion à la base de donnée
configDb().then();

app.listen(port, "127.0.0.1", () => {
  console.log(`Server à démarrer à l'addresse: http:localhost:${port}`);
});
