import * as activityAPI from './activity-api';
import * as usersService from './users-service'

export async function getAct(act) {
    try { 
    const activity = await activityAPI.getActivity(act);
    console.log('activity:', activity)
    return activity 
    } catch (err) {
        console.log(err)
    }
}

export async function getActs() {
    try {
      // Fetch the list of activities from the server
      const activities = await activityAPI.getActivity();
      console.log('activities:', activities);
      return activities;
    } catch (err) {
      console.log(err);
    }
  }

export async function updateAct(currentActivity) {
    try {
        // send data from react to server
        await activityAPI.updateActivity(currentActivity)
        // server updates in db
        // make sure myactivities has updated data
        await usersService.updateUserState();
    } catch (err) {
        console.log(err)
    }
}

export async function deleteAct(activityId) {
    try {
        // send request to delete activity by ID
        await activityAPI.deleteActivity(activityId);
        // server updates in db
        // make sure myactivities has updated data
        await usersService.updateUserState();
    } catch (err) {
        console.log(err);
    }
}