import sendRequest from "./send-request";

// Function to get activity details by sending a 
// GET request to the specified URL
export function getActivity(act) {
    // Use the sendRequest function to initiate a 
    // GET request to the specified URL
    // and return the result (a promise that resolves 
    // to the response JSON)
    return sendRequest(`/myactivity/${act}`)
}

export function updateActivity(currentActivity) {
    // Extract the activity ID from the 
    // currentActivity object
    const actId = currentActivity._id
    // use the sendRequest function to send a patch
    // request by adjusting the default values of the parameters
    return sendRequest(`/myactivity/${actId}`, 'PATCH', currentActivity)
}

export function deleteActivity(activityId) {
    return sendRequest(`/myactivity/${activityId}`, 'DELETE');
}