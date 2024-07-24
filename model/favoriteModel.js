const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    media_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', required: true },
    added_date: { type: Date, default: Date.now }
}, { timestamps: true });

const Favorite =new mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;
