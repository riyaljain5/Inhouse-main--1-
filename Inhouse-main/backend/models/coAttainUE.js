// models/coAttainUEModel.js

import mongoose from 'mongoose';
const { Schema } = mongoose;

const coAttainUESchema = new Schema({
    ESE: { type: Number, },
    MidSem: { type: Number, },
    PR_OR: { type: Number, },
    TermWork: { type: Number, },
    Total: { type: Number, }
});

const CO_Attain_UE = mongoose.model('CO_Attain_UE', coAttainUESchema);

export { CO_Attain_UE };
