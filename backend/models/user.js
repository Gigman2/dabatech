const mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new Schema({
    name: {
        type: String
    },
    bio: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    avatar: {
        type: String
    }
},
{
    timestamps: {createdAt: "created_at", updatedAt: "updated_at"}
});

module.exports = {
    UserSchema: mongoose.model("users", User)
}