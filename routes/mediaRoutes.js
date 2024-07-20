const express = require("express")

const { createMedia } = require("../controllers/mediaController")
const  {  verifyUser  } =require("../middlewares/authentication-2")

const router = express.Router()


router.post("/create-media", verifyUser, createMedia )

module.exports = router