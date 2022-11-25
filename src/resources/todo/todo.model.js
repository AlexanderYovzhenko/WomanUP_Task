import mongoose, { Schema } from 'mongoose';

const taskSchema = new Schema(
  {
    taskRows: {
      type: Map,
      of: {
        name: String,
        description: String,
      },
    },
  },
  {
    strict: false,
  }
);

export default mongoose.model('Task', taskSchema);
