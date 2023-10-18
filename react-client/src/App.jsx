import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Pegawai from "./pages/pegawai/Pegawai";
import Inputkaryawan from "./pages/pegawai/Inputkaryawan";
import Editkaryawan from "./pages/pegawai/Editkaryawan";
import DataBarang from "./pages/Barang/Databarang";
import DataPelanggan from "./pages/pelanggan/Datapelanggan";
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
          <Route path="/databarang" element={<DataBarang />} />
          <Route path="/pelanggan" element={<DataPelanggan />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
