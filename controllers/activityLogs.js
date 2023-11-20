// ACTIVITY LOG CONTROLLER

const User = require('../models/user')

module.exports = {
    create
}

async function create (req, res) {
    try {

        const newActivity = {
            name: req.body.name,
            activityType: req.body.activityType,
            inOut: req.body.inOut,
            rating: req.body.rating,
            details: req.body.details,
            duration: req.body.duration,
            description: req.body.description,
            user: req.body.user._id
        }
        console.log(newActivity)
        const user = await User.findByIdAndUpdate(req.body.user._id, {
            $push: {activitiesLogged: newActivity}
        }, {new: true});
        console.log('ACTIVITY LOGGED!!')
        res.status(200)
    } catch (err) {
        console.error(err)
    }
}