// USER MODEL

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const activityLogSchema = new Schema({
    name: String,
    activityType: {
        type: String,
        enum: ['Run', 'Hike', 'Yoga', 'Walk', 'Weights', 'Meditation'],
        default: 'Run'
    },
    indoorOutdoor: {
        type: String,
        enum:['Indoor', 'Outdoor'],
        default: 'Indoor'
    },
    rating: {
        type: String,
        enum:['1', '2', '3', '4', '5'],
        default: '1'
    },
    details: String,
    duration: {
        type: String,
        enum:['30mins', '30m-1hr', '1hr-2hr', '2hr+'],
        default: '30mins'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date,
        default: new Date(Date.now())
    }
});

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    profilePic: String,                    
    //Set as a string for now, to use URLs. When implementing Multer this may change
    location: {type: Number, required: true},
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    },
    activitiesLogged: [ activityLogSchema ]
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    },
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});

module.exports = mongoose.model('User', userSchema);