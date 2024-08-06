const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    media_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Media', required: true },
    rating: { type: Number, required: true },
    review_text: { type: String },
    review_date: { type: Date, default: Date.now }
}, { timestamps: true });

const Review =new mongoose.model('Review', reviewSchema);
module.exports = Review;
