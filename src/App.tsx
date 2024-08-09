import { Route, Routes } from "react-router-dom";
import Login from "./auth/login";
import Home from "./user/home";
import PrivateRoutes from "./auth/protectedRoute";
function App() {
  return (
    <>
      <Routes>
        // this route will render login component if the user access the route
        path ("/")
        <Route path="/" element={<Login />} />
        //adding the protected route to prevent the user to asscess the
        protected components without being logged in to the system
        <Route element={<PrivateRoutes />}>
          // this route will render home component if the user is logged in
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
