const express = require("express")
const { getWatchHistory } = require("../controllers/watchHistoryController")
const  {  verifyUser  } =require("../middlewares/authentication-2")


const router = express.Router()

router.post("/create-watch-history",verifyUser )
router.get("/get-watch-history",verifyUser,  getWatchHistory )


module.exports = router