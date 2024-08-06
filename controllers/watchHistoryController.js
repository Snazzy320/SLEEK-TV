const watchHistory = require("../models/watchHistoryModel")
const usersEntries = require("../models/userModel")



const handleWatchHistory = async(req,res)=>{
    try {
       const user = req.user

       const { media_id, progress} = req.body

        
            if(!media_id) {
            return res.status(400).json ({message: "please insert media_id"})
            }
            if(!progress) {
            return res.status(400).json ({message: "please insert progress"})
            }
            

        const createWatchHistory = new watchHistory ({ media_id, progress, user: user.id})
        
        await createWatchHistory.save()
    


        return res.status(200).json({
            message: "successful",
            watchHistory: createWatchHistory

        })
        
    } catch (error) {
        return res.status(500).json({message: error.message})
        
        
    }
}


const getWatchHistory = async (req,res)=>{
    try {
        const user = req.user

        const history = await  watchHistory.find({ user: user.id }).sort({ watchedAt: -1 });
        
        
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
    handleWatchHistory,
    getWatchHistory
}