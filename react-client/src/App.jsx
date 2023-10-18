import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Pegawai from "./pages/pegawai/Pegawai";
import Inputkaryawan from "./pages/pegawai/Inputkaryawan";
import Editkaryawan from "./pages/pegawai/Editkaryawan";
import DataBarang from "./pages/Barang/Databarang";
import DataPelanggan from "./pages/pelanggan/Datapelanggan";
import DaftarTransaksi from "./pages/transaksi/Daftartransaksi";
import TransaksiPembelian from "./pages/transaksi/Pembelian";
import TransaksiPenjualan from "./pages/transaksi/DataPenjualan";
import InputPembelian from "./pages/transaksi/Inputpembelian";
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
          <Route path="/informasitransaksi" element={<DaftarTransaksi />} />
          <Route path="/transaksipembelian" element={<TransaksiPembelian />} />
          <Route path="/transaksipenjualan" element={<TransaksiPenjualan />} />
          <Route path="/inputpembelian" element={<InputPembelian />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
