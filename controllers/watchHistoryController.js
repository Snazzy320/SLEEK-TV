const watchHistory = require("../models/watchHistoryModel")
const Content = require("../models/content")
const usersEntries = require("../models/userModel")


const getWatchHistory = async (req,res)=>{
    try {
        const user = req.user

        const history = await  Content.find({ user: user.id }).sort({ watchedAt: -1 });
        
        
        
        return res.status(200).json({
            message: "successful",
            count: history.length,
            history
        
        })

        
    } catch (error) {

        return res.status(500).json({message: error.message})
        
    }
}




module.exports= {
    getWatchHistory
}