// models/subjectModel.js

import mongoose from 'mongoose';
const { Schema } = mongoose;

const subjectSchema = new Schema({
    subject_code: { type: String, required: true },
    subject_name: { type: String, required: true },
    batch_id: { type: Schema.Types.ObjectId, ref: 'Batch' },
    subject_data: { type: Schema.Types.ObjectId, ref: 'Subject_Data' }
});

const Subject = mongoose.model('Subject', subjectSchema);

export { Subject };
