const watchHistory = require("../model/watchHistoryModel")


const handleWatchHistory = async(req,res)=>{
    try {
       const user = req.user
        const { user_id, media_id, watch_date, progress, last_watched } = req.body

        if(!user_id) {
            return res.status(400).json ({message: "please insert user_id"})
            }
            if(!media_id) {
            return res.status(400).json ({message: "please insert media_id"})
            }
            if(!watch_date) {
            return res.status(400).json ({message: "please insert watch_date"})
            }
            

        const createWatchHistory = new watchHistory ({ user_id, media_id, watch_date, progress, last_watched })
        
        await createWatchHistory.save()

        return res.status(200).json({
            message: "successful",
            watchHistory: createWatchHistory

        })
        
    } catch (error) {
        return res.status(500).json({message: error.message})
        
        
    }
}

module.exports= {
    handleWatchHistory
}