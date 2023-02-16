import "./App.css"
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import { Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const user = useSelector((state) => state.authReducer.authData)
  return (

    <div className="container-fluid">
      <div className="App">

        <Routes>
          <Route
            path="/"
            element={user ? <Home/>: <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={user ?  <Navigate to="/" />:<Auth/>}
          />
          <Route
            path="/home"
            element={user ? <Home/>:<Navigate to="/auth" /> }
          />
          <Route
            path="/profile/:id"
            element={user ? <Profile /> : <Navigate to="/auth" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
