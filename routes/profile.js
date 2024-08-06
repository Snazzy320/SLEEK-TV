const express = require('express');
const { createProfile, getProfiles } = require('../controllers/profileController');
const  {  verifyUser  } =require("../middlewares/authentication-2")
const router = express.Router();

router.post('/',  verifyUser  , createProfile);
router.get('/',  verifyUser  , getProfiles);

module.exports = router;