// models/courseObjectiveModel.js

import mongoose from 'mongoose';
const { Schema } = mongoose;

const courseObjectiveSchema = new Schema({
    subject_id: {
        type: Schema.Types.ObjectId,
        ref: "Subject"
    },
    subject_data_id: {
        type: Schema.Types.ObjectId,
        ref:"Subject_Data"
    },
    subject_name: {
        type: String,
    },
    objectives: {
        type: Array,
        default: ["", "", "", "", "", ""]
    }
});

const CourseObjective = mongoose.model('CourseObjective', courseObjectiveSchema);

export { CourseObjective };