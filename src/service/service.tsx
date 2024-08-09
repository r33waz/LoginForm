import api from ".";
import { AxiosError } from "axios"; // Import AxiosError for type narrowing
import { ErrorToast } from "../components/toast";
import { LoginInterface } from "../interface/interfaces"; // Importing the LoginInterface type for TypeScript validation

// Function to make a POST request to the given URL with the provided data
export const postData = async (url: string, data: LoginInterface) => {
  try {
    // Making a POST request using the Axios instance
    const resp = await api.post(url, data);
    // Return the data from the response if the request is successful
    return resp.data;
  } catch (error: unknown) {
    // if the error is from the AxiosError then handeling the error from the AxiosError forn "axios"
    if (error instanceof AxiosError) {
      ErrorToast({
        message: error.response?.data?.error || "An unexpected error occurred",
      });
    } else {
      // Handle the error if it is of another type
      console.log(error);
      ErrorToast({
        message: "An unexpected error occurred",
      });
    }
  }
};
