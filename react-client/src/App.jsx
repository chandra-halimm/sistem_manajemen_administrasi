import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Pegawai from "./pages/Pegawai";
import Inputkaryawan from "./pages/Inputkaryawan";
import Editkaryawan from "./pages/Editkaryawan";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pegawai" element={<Pegawai />} />
          <Route path="/inputkaryawan" element={<Inputkaryawan />} />
          <Route path="/editkaryawan" element={<Editkaryawan />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
