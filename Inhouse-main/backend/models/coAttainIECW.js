import mongoose from 'mongoose';
const { Schema } = mongoose;

const coAttainIECWSchema = new Schema({
    CO1: {
        UT1: { type: Number },
        CW: { type: Number },
        Total: { type: Number }
    },
    CO2: {
        UT1: { type: Number },
        CW: { type: Number },
        Total: { type: Number }
    },
    CO3: {
        UT2: { type: Number },
        CW: { type: Number },
        Total: { type: Number }
    },
    CO4: {
        UT2: { type: Number },
        CW: { type: Number },
        Total: { type: Number }
    },
    CO5: {
        CW: { type: Number },
        Total: { type: Number }
    },
    CO6: {
        CW: { type: Number },
        Total: { type: Number }
    }
});

const CO_Attain_IE_CW = mongoose.model('CO_Attain_IE_CW', coAttainIECWSchema);

export { CO_Attain_IE_CW };
