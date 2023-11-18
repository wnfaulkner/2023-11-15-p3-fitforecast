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

function getRandomActivity(currentWeather, temp) {
    // Filtering activities based on weather and temp criteria
    const filteredActivities = activityList.filter(activity => {
        return (
            activity.weather.includes(currentWeather) &&
            activity.minTemp <= temp &&
            temp <= activity.maxTemp
        );
    });

    // Randomly selecting an activity from the filtered list
    if (filteredActivities.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredActivities.length);
        return filteredActivities[randomIndex].name;
    } else {
        return "No suitable activities found.";
    }
}
