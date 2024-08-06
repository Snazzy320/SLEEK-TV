
const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({

    userName: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    phoneNumber:  { type: Number, required: true },

    profile_picture: { type: String },

    profiles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],

    subscriptions: { type: String, ref: 'Subscription' },


    role: {
    }

},{timestamps:true })


const usersEntries = new mongoose.model("user's Entries", userSchema)

module.exports = usersEntries