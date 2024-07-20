const express = require("express")
const { addSubscription } = require("../controllers/subscriptionController")
const  {  verifyUser  } =require("../middlewares/authentication-2")


const router = express.Router()

router.post("/add-subscription",verifyUser, addSubscription)



module.exports = router