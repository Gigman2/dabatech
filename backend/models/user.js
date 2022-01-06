const mongoose = require('mongoose');
const {composeWithMongoose} = require("graphql-compose-mongoose")
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
    photo: {
        type: Number
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
    UserSchema: mongoose.model("users", User),
    UserTC: composeWithMongoose(mongoose.model("user", User))
}