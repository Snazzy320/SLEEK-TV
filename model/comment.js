const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    media_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', required: true },
    comment_text: { type: String, required: true },
    comment_date: { type: Date, default: Date.now }
}, { timestamps: true });

const Comment =new mongoose.model('Comment', commentSchema);
module.exports = Comment;
