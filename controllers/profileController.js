const Profile = require('../models/profile');
const User = require('../models/userModel');

const createProfile = async (req, res) => {
    const { name, preferences } = req.body;
    // try {
        const profile = new Profile({ user: req.user.id, name, preferences });
        await profile.save();

        const user = await User.findById(req.user.id);
        user.profiles.push(profile);
        await user.save();

        res.json(profile);
//     } catch (err) {
//         res.status(500).send('Server error');
//     }
};

const getProfiles = async (req, res) => {
    try {
        const profiles = await Profile.find({ user: req.user.id });
        res.json(profiles);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

module.exports = { createProfile, getProfiles };
