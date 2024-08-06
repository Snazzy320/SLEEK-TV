const mongoose = require('mongoose');

const watchHistorySchema = new mongoose.Schema({
    // user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    media_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', required: true },
    watchedAt: { type: Date, default: Date.now },
    progress: { type: Number, default: 0 },
    user: {
        type: String, required: true
    },

    // last_watched: { type: Date, default: Date.now }
}, { timestamps: true });

const WatchHistory =new mongoose.model('Watch History', watchHistorySchema);
module.exports = WatchHistory;
