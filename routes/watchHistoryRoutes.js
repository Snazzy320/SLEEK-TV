const express = require("express")
const {  handleWatchHistory } = require("../controllers/watchHistoryController")
const  {  verifyUser  } =require("../middlewares/authentication-2")


const router = express.Router()

router.post("/watch-history",  handleWatchHistory )


module.exports = router