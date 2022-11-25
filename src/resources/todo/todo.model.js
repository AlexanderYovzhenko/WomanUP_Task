import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    strict: false,
  }
);

export default mongoose.model('Task', taskSchema);
