const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, enum: ['movie',"video", 'tv_show'], required: true },
    description: { type: String, required: true },
    releaseDate: { type: Date, default: Date.now },
    url: { type: String, required: true },
    likes: { type: Number, default: 0 },
    comments: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, text: String }],
    recommendations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recommendation' }],
    user: {
        type: String, required: true
    },
});

const Content =new mongoose.model('Content', contentSchema);

module.exports = Content;
