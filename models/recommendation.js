const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
    content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
    recommendedFor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Profile' }],
    score: { type: Number, required: true },
});

const Recommendation =new mongoose.model('Recommendation', recommendationSchema);

module.exports = Recommendation;
