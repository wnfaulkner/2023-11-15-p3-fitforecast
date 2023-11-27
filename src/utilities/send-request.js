// Add the following import
import { getToken } from './users-service';

//this function simplifies the process of making http requests
//provides a default value for HTTP req = GET
// you invoke the function, specify the url you want to make the request from, the type of request, any data you want to add
export default async function sendRequest(url, method = 'GET', payload = null) {
  // Fetch accepts an options object as the 2nd argument
  const options = { method };
  if (payload) {
    //sets the content-type of the data's header = app/json
    options.headers = { 'Content-Type': 'application/json' };
    //converts the data's payload to a json string
      options.body = JSON.stringify(payload);
    }

    
    const token = getToken();
    if (token) {
      // Ensure the headers object exists
      options.headers = options.headers || {};
      // Add token to an Authorization header
      // Prefacing with 'Bearer' is recommended in the HTTP specification
      options.headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}