const adminEntries = require("../model/adminModel")
const usersEntries = require("../model/userModel")
const media = require("../model/mediaModel")




const createMedia = async(req, res)=>{
    try {

        const user = req.user

        const { title, description, url, type } = req.body

        const alreadyExistingTitle = await media.findOne({title})

        if(alreadyExistingTitle){
            return res.status(400).json({message: "this title already exists!"})
        }

        if(!title){
            return res.status(400).json({message: "pls insert title"})
        }

    
        if(!url){
            return res.status(400).json({message: "pls insert url"})
        }
    
    

        const newMedia = new media({ title, description, url, type, user: user.id })
    
    
        // // Save user details
        await newMedia.save()

        

      return res.status(200).json({
        message: "successful",
        user: newMedia
      })     


        
    } catch (error) {

        return res.status(500).json({message: error.message})
        
    }

}

module.exports = {
    createMedia
}
