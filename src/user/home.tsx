import { useNavigate } from "react-router-dom";
import { SucessToast } from "../components/toast";

function Home() {
  const navigate = useNavigate();
  // here the handelLogout arrow function is created to logout the user from the system

  // and the navigate function is used to redirect the user to the login page
  const handleLogout = () => {
    // the removeItem function is used to remove the token from the local storage
    localStorage.removeItem("token");
    // the toast is used to display the success message of user logout
    SucessToast({ message: "Logout Successfull" });
    // the navigate function is used to redirect the user to the login page after the user is sucessfully loggedout
    navigate("/");
  };
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="flex justify-center flex-col">
        <span>Welcome to home page</span>
        <button
          className="bg-blue-600 text-white p-2 rounded-md"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </section>
  );
}

export default Home;
