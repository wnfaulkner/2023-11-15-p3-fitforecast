const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const User = require('./user')

const SALT_ROUNDS = 6;

const activityLogSchema = new Schema({
    name: String,
    activityType: {
        type: String,
        enum: ['Run', 'Hike', 'Yoga', 'Walk', 'Weights', 'Meditation']
    },
    inOut: {enum:['Indoor', 'Outdoor']},
    rating: {enum:['1', '2', '3', '4', '5']},
    details: String,
    duration: {enum:['30mins', '30m-1hr', '1hr-2hr', '2hr+']},
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});



module.exports = mongoose.model('ActivityLog', activityLogSchema);