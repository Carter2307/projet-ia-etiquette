import mongoose from "mongoose";

const schema = new mongoose.Schema({
 email: String,
 password: String,
 last_login_at: {
    type: Date,
    default: Date.now() 
  },
  create_at: {
    type: Date,
    default: Date.now() 
  },
});


export default mongoose.model("User", schema);