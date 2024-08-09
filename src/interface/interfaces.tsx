// Interface  for login, including username and password fields
export interface LoginInterface {
    username: string;  // The username entered by the user should be string
    password: string;  // The password entered by the user should be string
}

// Interface  for the success toast message, including a message string
export interface TosatMessage {
    message: string;  // The message to be displayed in the toast notification should be string
}