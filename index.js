const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const connectDatabase = require("./database/data-base-entries")
const userRoutes = require("./routes/userRoutes")
const adminRoutes = require("./routes/adminRoutes.js")
const mediaRoutes = require("./routes/mediaRoutes.js")
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

app.get("/", (req,res)=>{
    return res.status(200).json({message: "Welcome To Our Streaming Service"})
})

app.use("/api", userRoutes)
app.use("/admin", adminRoutes)
app.use("/media",mediaRoutes)
app.use("/subscription",subscriptionRoutes)
app.use("/watchHistory",watchHistoryRoutes)



app.use((req,res)=>{
    res.status(404).json({
        message: "sorry this endpoint does not exists."
    })
})