const express = require('express');
const { getRecommendations } = require('../controllers/recommendationController');
const router = express.Router();
const  {  verifyUser  } =require("../middlewares/authentication-2")

router.get('/:profileId', verifyUser, getRecommendations);

module.exports = router;