import axios from "axios";

// creating the  object for the base URL and default settings
const BASE_URL = {
  baseURL: "https://login.dataconstruct.com.np", // The base URL for API requests
  timeout: 1000, // Timeout if the server takes more than 1 sec
  headers: {
    "Content-Type": "application/json",
  },
};

// Create an Axios instance with the base configuration
const api = axios.create(BASE_URL);

// Export the Axios instance for use in service componet tot make the api call
export default api;
