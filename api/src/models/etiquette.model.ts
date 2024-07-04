import mongoose from "mongoose";

const schema = new mongoose.Schema({
  nom: String,
  ddm: String,
  origin: String,
  nomScientifique: String,
  description: String,
  precautions: [String],
  isComplete: Boolean,
  lot: String,
  create_at: {
    type: Date,
    default: Date.now() 
  },
});

export default new mongoose.Model("etiquette", schema);
