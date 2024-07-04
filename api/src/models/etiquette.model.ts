import mongoose from "mongoose";

const schema = new mongoose.Schema({
  nom: String,
  ddm: String,
  origin: String,
  lot: String,
});

export default new mongoose.Model("etiquette", schema);
