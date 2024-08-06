const express = require('express');
const { downloadOfflineContent } = require('../controllers/offlineController');
const  {  verifyUser  } =require("../middlewares/authentication-2")
const router = express.Router();

router.get('/download/:filename', verifyUser, downloadOfflineContent);

module.exports = router;