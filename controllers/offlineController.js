const path = require('path');
const fs = require('fs');

const downloadOfflineContent = async (req, res) => {
    try {
        const filePath = path.join(__dirname, '../uploads', req.params.filename);
        if (!fs.existsSync(filePath)) return res.status(404).json({ msg: 'File not found' });

        res.download(filePath);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

module.exports = { downloadOfflineContent };
