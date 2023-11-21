/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "../../style/Dashboard.css";
import DataBarang from "../Barang/Databarang";

const TransaksiPenjualan = () => {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    setStyle((prevStyle) => {
      return prevStyle ===
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
        : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion";
    });
  };

  const changeStyle1 = () => {
    setStyle((prevStyle) => {
      return prevStyle ===
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        ? "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
        : "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion";
    });
  };

  // Get Data
  const [dataPelanggan, setDataPelanggan] = useState([]);
  const [dataBarang, setDataBarang] = useState([]);

  // post Data
  const [namaPelanggan, setNamaPelanggan] = useState("");
  const [namaBarang, setNamabarang] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [harga, setHarga] = useState("");

  const addPenjualan = () => {
    const requestingData = {
      namapelanggan: namaPelanggan,
      namabarang: namaBarang,
      jumlah: jumlah,
      harga: harga,
    };

    axios({
      method: "GET",
      url: "http://localhost:3300/pelanggan",
    });

    axios({
      method: "POST",
      url: "http://localhost:3300/penjualan",
      data: requestingData,
    })
      .then((response) => {
        console.log(response.data);
        alert("data berhasil ditambah");
      })
      .catch((error) => {
        console.error("Axios Error:", error);
        console.log("Error Status:", error.response?.status);
        console.log("Error Data:", error.response?.data);
      });
  };

  return (
    <div>
      <body id="page-top">
        {/*  <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/*  <!-- Sidebar --> */}
          <ul className={style} id="accordionSidebar">
            {/*  <!-- Sidebar - Brand --> */}
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="a"
            >
              <div className="sidebar-brand-text mx-3">Monica Intermedia</div>
              <div className="text-center d-none d-md-inline">
                <button
                  className="rounded-circle border-0"
                  id="sidebarToggle"
                  onClick={changeStyle}
                ></button>
              </div>
            </a>

            {/*   <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/*  <!-- Nav Item - Dashboard --> */}
            {/* <li className="nav-item active">
              <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </a>
            </li> */}

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/*   <!-- Heading --> */}
            <div className="sidebar-heading">Interface</div>

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
              <a href="pelanggan" className="nav-link" type="submit">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Dashboard</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                href="pegawai"
                className="nav-link"
                type="submit"
                onClick={() => {
                  window.location.replace("/pegawai");
                }}
              >
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Data Pegawai</span>
              </a>
            </li>

            <li className="nav-item">
              <a href="pelanggan" className="nav-link" type="submit">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Data Pelanggan</span>
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="a#"
                data-toggle="collapse"
                data-target="#collapseone"
                aria-expanded="true"
                aria-controls="collapseone"
              >
                <i className="fas fa-fw fa-cog"></i>
                <span>Data Transaksi</span>
              </a>
              <div
                id="collapseone"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <a className="collapse-item" href="buttons.html">
                    Informasi Transaksi
                  </a>
                  <a className="collapse-item" href="cards.html">
                    Penjualan
                  </a>
                  <a className="collapse-item" href="cards.html">
                    Pembelian
                  </a>
                </div>
              </div>
            </li>

            {/*  <!-- Nav Item - Tables --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="a#"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Data Barang</span>
              </a>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <a className="collapse-item" href="buttons.html">
                    Informasi Barang
                  </a>
                  <a className="collapse-item" href="cards.html">
                    Barang Masuk
                  </a>
                  <a className="collapse-item" href="cards.html">
                    Barang Keluar
                  </a>
                </div>
              </div>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
          </ul>
          {/*  <!-- End of Sidebar --> */}

          {/*  <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/*  <!-- Main Content --> */}
            <div id="content">
              {/*  <!-- Topbar --> */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                  onClick={changeStyle1}
                >
                  <i className="fa fa-bars"></i>
                </button>

                {/*  <!-- Topbar Search --> */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>

                {/*  <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">
                  {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="a"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search fa-fw"></i>
                    </a>
                    {/*   <!-- Dropdown - Messages --> */}
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>

                  <div className="topbar-divider d-none d-sm-block"></div>

                  {/* <!-- Nav Item - User Information --> */}
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="a"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                        Douglas McGee
                      </span>
                      <img
                        alt=""
                        className="img-profile rounded-circle"
                        src="img/undraw_profile.svg"
                      />
                    </a>
                    {/*  <!-- Dropdown - User Information --> */}
                  </li>
                </ul>
              </nav>
              {/*  <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/*  <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Input Penjualan</h1>
                  <a
                    onClick={() => {
                      window.location.replace("/transaksipenjualan");
                    }}
                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                  >
                    <i className="fas fa-back fa-sm text-white-50"></i> Kembali
                  </a>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-8">
                  <Form>
                    <Form.Label>Nama Pelanggan</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={namaPelanggan}
                      onChange={(e) => setNamaPelanggan(e.target.value)}
                    >
                      <option>Pilih Pelanggan</option>
                      {dataPelanggan.map((pelanggan) => (
                        <option
                          key={pelanggan.pelangganID}
                          value={pelanggan.pelangganID}
                        >
                          {pelanggan.namapelanggan}
                        </option>
                      ))}
                    </Form.Select>

                    <Form.Label>Nama Barang</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={namaBarang}
                      onChange={(e) => setNamabarang(e.target.value)}
                    >
                      <option>Pilih Pelanggan</option>
                      {DataBarang.map((barang) => (
                        <option
                          key={barang.pelangganID}
                          value={barang.pelangganID}
                        >
                          {barang.namapelanggan}
                        </option>
                      ))}
                    </Form.Select>

                    <Form.Select
                      aria-label="Default select example"
                      value={namaBarang}
                      onChange={(e) => setNamabarang(e.target.value)}
                    >
                      <option>Pilih Barang</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>

                    <Form.Group className="mb-3" controlId="jumlah">
                      <Form.Label>Jumlah</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="masukkan jumlah barang"
                        onChange={(event) => {
                          setJumlah(event.target.value);
                        }}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Harga">
                      <Form.Label>Harga</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="masukkan Harga"
                        onChange={(event) => {
                          setHarga(event.target.value);
                        }}
                        required
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={() => {
                        addPenjualan();
                      }}
                    >
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>

              {/*   <!-- /.container-fluid --> */}
            </div>

            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright &copy; PT. Monica Intermedia Grafika</span>
                </div>
              </div>
            </footer>
            {/* <!-- End of Footer --> */}
          </div>
          {/*  <!-- End of Content Wrapper --> */}
        </div>
      </body>
    </div>
  );
};

export default TransaksiPenjualan;
