import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the main schema
const semSubjectsSchema = new Schema({
  Sem_number: {
    type: Number,
    required: true,
    min: 1,
    max: 8
  },
  subjects: [
    {
      subject_code: {
        type: String,
        required: true
      },
      subject_name: {
        type: String,
        required: true
      }
    }
  ]
});

// Create the model
const SemSubjects = mongoose.model('SemSubjects', semSubjectsSchema);

export {SemSubjects};
