const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const ActivityLog = require('./activityLog')

const SALT_ROUNDS = 6;

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
    //location: {type: Number, required: true},
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    },
    activitiesLogged: [{
        type: Schema.Types.ObjectId,
        ref:'ActivityLog'
    }]
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});

module.exports = mongoose.model('User', userSchema);