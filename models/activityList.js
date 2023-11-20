// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt');

// const SALT_ROUNDS = 6;

// const activityListSchema = new Schema({
//     indoor: ['Meditation','Yoga']
//     ,
//     outHotClear: {
//         type: String,
//         enum: ['Run', 'Hike', 'Yoga', 'Walk', 'Weights', 'Meditation']
//     },
//     outColdClear: {
        
// });

// const warm = 'define warm here referencing the weather API data';
// const activityList = [
//     {
//         temp: cold, 
//         activity: [
//             {weather: snow, snowboard},
//         ]},
//     {temp: warm, weather:[clear, sunny, rain, snow], activity: [run, hike, ]},
//     {temp: hot, weather:[clear, sunny, rain, snow], activity: [swim]}
// ]

// // module.exports = mongoose.model('ActivityLog', activityListSchema);

class Activity {
    constructor(names, weather, minTemp, maxTemp){
        this.names = names;
        this.weather = weather;
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
    }
}


const activityList = [
    new Activity(['Snowboard'], ['snow'], -10, 32),
    new Activity(['Run', 'Hike', 'Swim'], ['clear', 'sunny'], 50, 80),
    // New activities here
];


