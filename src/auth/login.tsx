import { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginInterface } from "../interface/interfaces";
import { postData } from "../service/service";
import { SucessToast } from "../components/toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // make comments for the codes
  // herer teh state of the showing the password in defined
  const [showpass, setshowpass] = useState(false);
  const navigate = useNavigate();

  // form validation and form handling is setup using react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInterface>();

  const onSubmit = async (data: LoginInterface) => {
    console.log(data);
    // sending the data to the backend and making the api call for the login of user to the system
    const resp = await postData("https://login.dataconstruct.com.np", data);
    console.log("data", resp);

    if (resp) {
      //if the response is okay and sucessfull redirect to home component
      navigate("/home");
      //displaying the success toast message
      SucessToast({ message: resp?.message });
      //saving the token provided from the backend to the local storage
      localStorage.setItem("token", resp.token);
    }
  };

  return (
    <div className="bg-gray-50 ">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow-[0px_2px_5px_3px_#00000024]">
            <div className="flex flex-col gap-1">
              <h2 className="text-gray-800  text-2xl font-bold">Sign in</h2>
              <span className="text-xs">Enter your credentials</span>
            </div>
            <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="text-gray-800 text-lg mb-2 block font-semibold">
                  User name
                </label>
                <div className="relative flex items-center">
                  <div className="flex flex-col w-full gap-1.5">
                    <input
                      id="username"
                      type="text"
                      className={`${
                        errors.username
                          ? "border border-red-500"
                          : "border border-gray-300"
                      } w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-none`}
                      placeholder="Enter username"
                      {...register("username", { required: true })}
                    />
                    {/* showing the error of empty username field handeled by the react hook form   */}
                    {errors.username && (
                      <span className="text-red-500 text-xs">
                        Enter your username
                      </span>
                    )}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 absolute right-4 top-3.5"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-gray-800 text-lg mb-2 block font-semibold">
                  Password
                </label>
                <div className="relative flex items-center ">
                  <div className="flex flex-col w-full gap-1.5">
                    <input
                      id="password"
                      //   if the showpass state change to ture then make the input field to text
                      //   but of the showpass is false then change it to the password
                      // using ternanry operator (short form of the is else statement)
                      type={`${showpass ? "text" : "password"}`}
                      className={`${
                        errors.password
                          ? "border border-red-500"
                          : "border border-gray-300"
                      } w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-none`}
                      placeholder="Enter password"
                      {...register("password", { required: true })}
                    />
                    {/* showing the error of empty password field handeled by the react hook form   */}
                    {errors.password && (
                      <span className="text-red-500 text-xs">
                        Enter your password
                      </span>
                    )}
                    {showpass ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 256 256"
                        className="w-4 h-4 absolute right-4 cursor-pointer text-black top-3.5"
                        onClick={() => setshowpass(!showpass)}
                      >
                        <path d="M228 175a8 8 0 0 1-10.92-3l-19-33.2A123.2 123.2 0 0 1 162 155.46l5.87 35.22a8 8 0 0 1-6.58 9.21a8.4 8.4 0 0 1-1.29.11a8 8 0 0 1-7.88-6.69l-5.77-34.58a133 133 0 0 1-36.68 0l-5.77 34.58A8 8 0 0 1 96 200a8.4 8.4 0 0 1-1.32-.11a8 8 0 0 1-6.58-9.21l5.9-35.22a123.2 123.2 0 0 1-36.06-16.69L39 172a8 8 0 1 1-13.94-8l20-35a153.5 153.5 0 0 1-19.3-20a8 8 0 1 1 12.46-10c16.6 20.54 45.64 45 89.78 45s73.18-24.49 89.78-45a8 8 0 1 1 12.44 10a153.5 153.5 0 0 1-19.3 20l20 35a8 8 0 0 1-2.92 11" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 absolute right-4 cursor-pointer z-50 top-3.5"
                        viewBox="0 0 128 128"
                        onClick={() => setshowpass(!showpass)}
                      >
                        <path
                          d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                          data-original="#000000"
                        ></path>
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center"></div>
                <div className="text-sm">
                  <a
                    href=""
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div className="!mt-8">
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Sign in
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">
                Don't have an account?{" "}
                <a
                  href=""
                  className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
