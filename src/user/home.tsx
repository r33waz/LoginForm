import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { SucessToast } from "../components/toast";

function Home() {
  const navigate = useNavigate();
  // ahndeling the loading state for logout
  const [loading, setLoading] = useState(false);
  // here the handelLogout arrow function is created to logout the user from the system
  // and the navigate function is used to redirect the user to the login page
  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      // the removeItem function is used to remove the token from the local storage
      localStorage.removeItem("token");
      // the toast is used to display the success message of user logout
      SucessToast({ message: "Logout Successfull" });
      // the navigate function is used to redirect the user to the login page after the user is sucessfully loggedout
      navigate("/");
    }, 2000);
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex justify-center flex-col">
        <span>Welcome to home page</span>
        <button
          type="submit"
          disabled={loading} // Disable the button while loading
          className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none flex items-center justify-center"
          onClick={handleLogout}
        >
          {loading ? (
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          ) : (
            "Logout"
          )}
        </button>
      </div>
    </section>
  );
}

export default Home;
