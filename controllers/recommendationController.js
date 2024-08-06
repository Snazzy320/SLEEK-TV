const Recommendation = require('../models/recommendation');
const Content = require('../models/content');
const Profile = require('../models/profile');

const getRecommendations = async (req, res) => {
    try {
        const profile = await Profile.findById(req.params.profileId);
        if (!profile) return res.status(404).json({ msg: 'Profile not found' });

        const recommendations = await Recommendation.find({ recommendedFor: profile._id }).populate('content');
        res.json(recommendations.map(rec => rec.content));
    } catch (err) {
        res.status(500).send('Server error');
    }
};

module.exports = { getRecommendations };
