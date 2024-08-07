const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    preferences: [String],
    watchlist: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Content' }],
    history: [{ content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' }, watchedAt: { type: Date, default: Date.now } }],
});

const Profile =new mongoose.model('Profile', profileSchema);

module.exports = Profile;