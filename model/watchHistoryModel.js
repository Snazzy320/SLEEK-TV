const mongoose = require('mongoose');

const watchHistorySchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    media_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', required: true },
    watch_date: { type: Date, default: Date.now },
    progress: { type: Number, default: 0 },
    last_watched: { type: Date, default: Date.now }
}, { timestamps: true });

const WatchHistory =new mongoose.model('WatchHistory', watchHistorySchema);
module.exports = WatchHistory;
