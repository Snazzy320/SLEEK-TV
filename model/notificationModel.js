const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    read_status: { type: Boolean, default: false },
    sent_date: { type: Date, default: Date.now }
}, { timestamps: true });

const Notification =new mongoose.model('Notification', notificationSchema);
module.exports = Notification;
