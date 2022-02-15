import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/LoginPage/Login";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route
        path="/"
        element={<Login onClick={() => navigate(`/homepage`)} />}
      />
      <Route path="/homepage" element={<Homepage />} />
    </Routes>
  );
}
export default App;
