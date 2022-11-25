import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    login: String,
    password: String,
  },
  {
    strict: true,
  }
);

export default mongoose.model('User', userSchema);
