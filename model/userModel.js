
const mongoose = require("mongoose")



const userSchema = new mongoose.Schema({

    userName: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    phoneNumber:  { type: Number, required: true },

    profile_picture: { type: String },

    subscriptions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' }],

    watch_history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'WatchHistory' }],

    favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],

    role: {
        type: String, required: true, enum: ['user', 'admin'], default: 'user' 
    }

},{timestamps:true })


const usersEntries = new mongoose.model("user's Entries", userSchema)

module.exports = usersEntries