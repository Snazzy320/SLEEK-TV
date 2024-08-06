const Content = require("../models/content")
const path = require('path');


const createContent = async (req,res)=> {
    try {
        const user = req.user

        const {title, type,description,releaseDate, url} = req.body

        const newContent = new Content ({title, type,description,releaseDate, url,  user: user.id })
        
       await newContent.save()

       return res.status(200).json({
        message: "successful",
        user: newContent

       })
    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }
}



const streamContent= async (req, res, type) => {
    try {
        const content = await Content.findById(req.params.id);
        
        if (!content) {
            return res.status(404).json({ msg: 'Content not found' });
        }

        if (content.type !== type) {
            return res.status(400).json({ msg: `Not a ${type}` });
        }

        res.redirect(content.url)

        // const filePath = path.join(__dirname, '../', content.url);
        // res.sendFile(filePath);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: 'Server error' });
    }
};



const downloadContent = async (req, res) => {
    try {
        
                const content = await Content.findById(req.params.id);
        
                if (!content) {
                    return res.status(404).json({ msg: 'Content not found' });
                }
        
                if (content.url.startsWith('http')) {
                    // Handle URLs (e.g., YouTube link)
                    return res.redirect(content.url); // Redirect to the external URL
                } else {
                    // Handle local files
                    const filePath = path.join(__dirname, '../', content.url);
                    return res.download(filePath, (err) => {
                        if (err) {
                            console.error(err);
                            return res.status(500).send('Server error');
                        }
                    });
                }
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const searchContent = async (req, res) => {
    try {
        const contents = await Content.find({
            $or: [
                { title: new RegExp(req.query.title, 'i') },
                { artist: new RegExp(req.query.artist, 'i') },
            ],
        });
        res.json(contents);
    } catch (err){
        res.status(500).send('Server error');
    }
};

const likeContent = async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);
        if (!content) return res.status(404).json({ msg: 'Content not found' });

        content.likes += 1;
        await content.save();
        res.json(content);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

const addComment = async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);
        if (!content) return res.status(404).json({ msg: 'Content not found' });

        const { text } = req.body;
        content.comments.push({ user: req.user.id, text });
        await content.save();
        res.json(content.comments);
    } catch (err) {
        res.status(500).send('Server error');
    }
};

module.exports = {
    streamContent,
    downloadContent,
    searchContent,
    likeContent,
    addComment,
    createContent
};

