// USERS API MODULE

import sendRequest from './send-request';
const BASE_URL = '/api/users';

// Refactored code below
export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function logIn(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}
export function updateToken() {
  return sendRequest(`${BASE_URL}/update-token`);
}

export function editUser(updatedUserData) {
  
  return sendRequest(`${BASE_URL}/edit-user`, 'PATCH', updatedUserData);
}
