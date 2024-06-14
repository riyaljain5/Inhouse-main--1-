import mongoose from 'mongoose';
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    subject: {
        type: [{ code: String, name: String }],
        required: true,
        validate: [arrayLimit, 'Subjects are required for teachers']
    }
});

function arrayLimit(val) {
    return val.length > 0;
}

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

export const User = mongoose.model('User', UserSchema);
