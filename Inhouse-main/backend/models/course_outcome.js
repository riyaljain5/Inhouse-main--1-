// models/courseOutcomesModel.js

import mongoose from 'mongoose';
const { Schema } = mongoose;

const courseOutcomesSchema = new Schema({
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
    co: {
        type: Array,
        default: ["Subcode.1", "Subcode.2", "Subcode.3", "Subcode.4", "Subcode.5", "Subcode.6",]
    },
    outcome: {
        type: Array,
        default: ["", "", "", "", "", ""]
    }
});

const CourseOutcome = mongoose.model('CourseOutcome', courseOutcomesSchema);

export { CourseOutcome };