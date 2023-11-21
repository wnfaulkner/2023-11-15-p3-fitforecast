// ACTIVITY LOG CONTROLLER

const User = require('../models/user')

module.exports = {
    create
}

async function create(req, res) {
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
        };

        console.log('New Activity:', newActivity);

        const foundUser = await User.findByIdAndUpdate(
            req.body.user._id,
            { $push: { activitiesLogged: newActivity } },
            { new: true }
        );

        console.log('User after update:', foundUser);

        // Additional logging for debugging
        console.log('User ID in request:', req.body.user._id);
        console.log('User ID in foundUser:', foundUser._id);

        res.status(200).json(foundUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
