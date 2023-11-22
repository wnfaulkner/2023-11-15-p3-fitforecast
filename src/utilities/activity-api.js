import sendRequest from "./send-request";

export function getActivity(act) {
    return sendRequest(`/myactivity/${act}`)
}

export function updateActivity(currentActivity) {
    const actId = currentActivity._id
    return sendRequest(`/myactivity/${actId}`, 'PATCH', currentActivity)
}

export function deleteActivity(activityId) {
    return sendRequest(`/myactivity/${activityId}`, 'DELETE');
}