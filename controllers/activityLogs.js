// ACTIVITY LOG CONTROLLER

const User = require('../models/user')

module.exports = {
    create,
    index
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
        const foundUser = await User.findByIdAndUpdate(req.body.user._id, {
            $push: {activitiesLogged: newActivity}
        }, {new: true});
        // await user.save();
        console.log('ACTIVITY LOGGED!!', foundUser)
        res.status(200).json(foundUser);
    } catch (err) {
        console.error(err)
    }
}

async function index (req, res) {
    console.log('hit the route!!')
    try {
        const activityResponse = await User.findOne({_id: req.body.user._id})
        console.log('activity response is: ',activityResponse)
    } catch (err) {
        console.log(err)
    }
}

// async function create (req, res) {
//     try {

//         const newActivity = {
//             name: req.body.name,
//             activityType: req.body.activityType,
//             inOut: req.body.inOut,
//             rating: req.body.rating,
//             details: req.body.details,
//             duration: req.body.duration,
//             description: req.body.description,
//             user: req.body.user._id
//         }
//         console.log(newActivity)
//         const foundUser = await User.findOne({id:req.body.user._id})
//         // await user.save();
//         console.log('ACTIVITY LOGGED!!', foundUser)
//         res.status(200)
//     } catch (err) {
//         console.error(err)
//     }
// }