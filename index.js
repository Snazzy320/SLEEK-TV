const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const connectDatabase = require("./database/data-base-entries")
const path = require('path')
const userRoutes = require("./routes/userRoutes")
const adminRoutes = require("./routes/adminRoutes.js")
const subscriptionRoutes = require("./routes/subscriptionRoutes.js")
const watchHistoryRoutes = require("./routes/watchHistoryRoutes.js")




app = express()

// middlewares
app.use(express.json())

app.use(cors())


const PORT = process.env.PORT || 5010

// function to connect to db
connectDatabase()

app.listen(PORT, ()=>{
    console.log(`Server Sarted Running on ${PORT}`)
})

// app.get("/", (req,res)=>{
//     return res.status(200).json({message: "Welcome To Our SLEEK TV"})
// })

app.use("/api", userRoutes)
app.use("/admin", adminRoutes)
app.use("/subscription",subscriptionRoutes)
app.use("/watchHistory",watchHistoryRoutes)

app.use('/api/content', require('./routes/content'));
app.use('/api/profiles', require('./routes/profile'));
app.use('/api/recommendations', require('./routes/recommendation'));
app.use('/api/offline', require('./routes/offline'));





app.use((req,res)=>{
    res.status(404).json({
        message: "sorry this endpoint does not exists."
    })
})