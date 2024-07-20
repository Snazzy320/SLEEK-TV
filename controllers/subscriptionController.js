const subscription = require("../model/subscriptionModel")


const addSubscription = async(req,res)=>{
    try {

        const user = req.user

        const { plan_type, start_date, end_date, payment_method, status } = req.body

        if(!plan_type) {
        return res.status(400).json ({message: "please insert plan_type"})
        }
        if(!start_date) {
        return res.status(400).json ({message: "please insert start_date"})
        }
        if(! end_date) {
        return res.status(400).json ({message: "please insert end_date"})
        }
        if(!payment_method) {
        return res.status(400).json ({message: "please insert payment_method"})
        }
        if(!status) {
        return res.status(400).json ({message: "please insert status"})
        }

        const createSubscription = new subscription({ plan_type, start_date, end_date, payment_method, status, user: user.id })

        await createSubscription.save()

        return res.status(200).json ({
            message: "successful",
            user: createSubscription
        })


        
    } catch (error) {
        return res.status(500).json({message: error.message})
        
    }
}

module.exports = {
    addSubscription
}