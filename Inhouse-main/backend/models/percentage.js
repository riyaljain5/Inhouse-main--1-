import mongoose from 'mongoose';
const { Schema } = mongoose;

const percentageSchema = new Schema({
  co: {
    type: String,
    required: true,
  },
  percentage_po: {
    type: [Number],
    default: [],
  },
  percentage_pso: {
    type: [Number],
    default: [],
  },
});

const PercentageModel = mongoose.model('PercentageModel', percentageSchema);

export default PercentageModel;