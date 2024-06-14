// models/coIECWModel.js

import mongoose from 'mongoose';
const { Schema } = mongoose;

const coIECWSchema = new Schema({
    ut: { type: Number, },
    classwork: { type: Number, },
    total: { type: Number, }
});

const CO_IE_CW = mongoose.model('CO_IE_CW', coIECWSchema);

export default CO_IE_CW;
