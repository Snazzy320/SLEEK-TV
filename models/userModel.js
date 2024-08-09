
const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({

    firstName: { type: String, required: true },

    lastName: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    profiles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],

    subscriptions: { type: String, ref: 'Subscription' },


    role: {
    }

},{timestamps:true })


const usersEntries = new mongoose.model("user's Entries", userSchema)

module.exports = usersEntries