// ACTIVITY LOG CONTROLLER

const User = require('../models/user')

module.exports = {
    create,
    show,
    update,
    delete: deleteActivity
}

async function update (req, res) {
    try {
        const updatedField = req.body;
        const foundUser = await User.findOneAndUpdate(
            {'activitiesLogged._id': updatedField._id },
            { $set: { 'activitiesLogged.$': updatedField}},
            {new: true}
        );
        res.status(200).json(foundUser)
    } catch (err) {
        console.log(err)
    }
}

async function create(req, res) {
    console.log(req.body)
    try {
        const newActivity = {
            name: req.body.name,
            activityType: req.body.activityType,
            inOut: req.body.inOut,
            rating: req.body.rating,
            details: req.body.details,
            duration: req.body.duration,
            description: req.body.description,
            user: req.body.user._id,
            date: req.body.date
        };

        // console.log('New Activity:', newActivity);

        const foundUser = await User.findByIdAndUpdate(
            req.body.user._id,
            { $push: { activitiesLogged: newActivity } },
            { new: true }
        );

        // console.log('User after update:', foundUser);
        // Additional logging for debugging
        // console.log('User ID in request:', req.body.user._id);
        // console.log('User ID in foundUser:', foundUser._id);

        res.status(200).json(foundUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//displays the specific logged activity we clicked on
async function show(req, res) {
    console.log('SHOW ROUTE')
    try {
        const activityId = req.params.activityId;
        const foundUser = await User.findOne({'activitiesLogged._id': activityId})
        const activity = foundUser.activitiesLogged.find((act) => act._id.toString() === activityId);
        console.log('activity in controller', activity)
        res.status(200).json(activity)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function deleteActivity(req, res) {
    try {
        const activityId = req.params.activityId;

        // Find the user by the activity ID and pull the activity from the array
        const foundUser = await User.findOneAndUpdate(
            { 'activitiesLogged._id': activityId },
            { $pull: { activitiesLogged: { _id: activityId } } },
            { new: true }
        );

        if (!foundUser) {
            // If user or activity not found, return a 404 status
            return res.status(404).json({ error: 'User or activity not found' });
        }

        res.status(204).send(); // 204 No Content for a successful delete
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}