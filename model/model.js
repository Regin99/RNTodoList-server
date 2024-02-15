import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  isImportant: {
    type: Boolean,
    default: false
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model('todo', dataSchema);
