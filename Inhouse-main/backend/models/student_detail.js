import mongoose from 'mongoose';
const { Schema } = mongoose;

const studentDetailsSchema = new Schema({
    roll_no: { type: String, unique: true },
    prn: { type: String },
    name: { type: String },
    co_attain_UE: { type: Schema.Types.ObjectId, ref: 'CO_Attain_UE' },
    co_attain_IE_CW: { type: Schema.Types.ObjectId, ref: 'CO_Attain_IE_CW' }
});

const StudentDetail = mongoose.model('StudentDetail', studentDetailsSchema);

export { StudentDetail };