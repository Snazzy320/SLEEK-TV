const express = require('express');
const {createContent, streamContent, downloadContent, searchContent, likeContent, addComment } = require('../controllers/contentController');
const  {  verifyUser  } =require("../middlewares/authentication-2")
const router = express.Router();

router.post('/', verifyUser ,  createContent)
router.get('/video/:id', verifyUser , (req, res) => streamContent(req, res, 'video'));
router.get('/audio/:id', verifyUser , (req, res) => streamContent(req, res, 'audio'));
router.get('/download/:id', verifyUser , downloadContent);
router.get('/search', searchContent);
router.post('/like/:id', verifyUser , likeContent);
router.post('/comment/:id', verifyUser, addComment);

module.exports = router;
