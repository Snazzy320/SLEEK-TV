const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    description: { type: String },
    media_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }]
}, { timestamps: true });

const Playlist =new mongoose.model('Playlist', playlistSchema);
module.exports = Playlist;
