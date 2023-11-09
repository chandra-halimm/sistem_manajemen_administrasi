import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "../../style/Dashboard.css";

const Inputkaryawan = () => {
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

  const [namaLengkap, setNamaLengkap] = useState("aaa");
  const [email, setEmail] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [nomorTelpon, setNomorTelpon] = useState("");
  const [gaji, setGaji] = useState("");
  const [tanggalMasuk, setTanggalMasuk] = useState("");
  const [jabatan, setJabatan] = useState("");

  const inputPegawai = () => {
    const requestingData = {
      namaLengkap: namaLengkap,
      email: email,
      tanggalLahir: tanggalLahir,
      nomorTelpon: nomorTelpon,
      gaji: gaji,
      tanggalMasuk: tanggalMasuk,
      jabatan: jabatan,
    };
    axios
      .post("http://localhost:3300/pegawai", requestingData)
      .then((response) => {
        console.log(response.data);
        alert("Data berhasil ditambah");
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

            <li className="nav-item">
              <a href="pelanggan" className="nav-link" type="submit">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Dashboard</span>
              </a>
            </li>

            {/* <!-- Nav Item - Charts --> */}
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

            {/*  <!-- Nav Item - Tables --> */}
            <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Datang Barang</span>
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

                  {/*  <!-- Nav Item - Alerts --> */}
                  <li className="nav-item dropdown no-arrow mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="a"
                      id="alertsDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-bell fa-fw"></i>
                      {/*  <!-- Counter - Alerts --> */}
                      <span className="badge badge-danger badge-counter">
                        3+
                      </span>
                    </a>
                    {/*   <!-- Dropdown - Alerts --> */}
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="alertsDropdown"
                    >
                      <h6 className="dropdown-header">Alerts Center</h6>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="a"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-primary">
                            <i className="fas fa-file-alt text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">
                            December 12, 2019
                          </div>
                          <span className="font-weight-bold">
                            A new monthly report is ready to download!
                          </span>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="a"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-success">
                            <i className="fas fa-donate text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">
                            December 7, 2019
                          </div>
                          $290.29 has been deposited into your account!
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="a"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-warning">
                            <i className="fas fa-exclamation-triangle text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">
                            December 2, 2019
                          </div>
                          Spending Alert: We've noticed unusually high spending
                          for your account.
                        </div>
                      </a>
                      <a
                        className="dropdown-item text-center small text-gray-500"
                        href="a"
                      >
                        Show All Alerts
                      </a>
                    </div>
                  </li>

                  {/*  <!-- Nav Item - Messages --> */}
                  <li className="nav-item dropdown no-arrow mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="a"
                      id="messagesDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-envelope fa-fw"></i>
                      {/*  <!-- Counter - Messages --> */}
                      <span className="badge badge-danger badge-counter">
                        7
                      </span>
                    </a>
                    {/*   <!-- Dropdown - Messages --> */}
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="messagesDropdown"
                    >
                      <h6 className="dropdown-header">Message Center</h6>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="a"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_1.svg"
                            alt="..."
                          />
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncate">
                            Hi there! I am wondering if you can help me with a
                            problem I've been having.
                          </div>
                          <div className="small text-gray-500">
                            Emily Fowler · 58m
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="a"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_2.svg"
                            alt="..."
                          />
                          <div className="status-indicator"></div>
                        </div>
                        <div>
                          <div className="text-truncate">
                            I have the photos that you ordered last month, how
                            would you like them sent to you?
                          </div>
                          <div className="small text-gray-500">
                            Jae Chun · 1d
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="a"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_3.svg"
                            alt="..."
                          />
                          <div className="status-indicator bg-warning"></div>
                        </div>
                        <div>
                          <div className="text-truncate">
                            Last month's report looks great, I am very happy
                            with the progress so far, keep up the good work!
                          </div>
                          <div className="small text-gray-500">
                            Morgan Alvarez · 2d
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="a"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                            alt="..."
                          />
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div>
                          <div className="text-truncate">
                            Am I a good boy? The reason I ask is because someone
                            told me that people say this to all dogs, even if
                            they aren't good...
                          </div>
                          <div className="small text-gray-500">
                            Chicken the Dog · 2w
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item text-center small text-gray-500"
                        href="a"
                      >
                        Read More Messages
                      </a>
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
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <a className="dropdown-item" href="a">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                      </a>
                      <a className="dropdown-item" href="a">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                      </a>
                      <a className="dropdown-item" href="a">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Activity Log
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        href="a"
                        data-toggle="modal"
                        data-target="alogoutModal"
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              {/*  <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/*  <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 className="h3 mb-0 text-gray-800">Input Pegawai</h1>
                  <a
                    href="pegawai"
                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                  >
                    <i className="p-2 text-white-50"></i> Kembali
                  </a>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <div className="col-8">
                  <Form>
                    <Form.Group className="mb-3" controlId="nip">
                      <Form.Label>Nama Lengkap</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan nama lengkap"
                        onChange={(event) => {
                          setNamaLengkap(event.target.value);
                          console.log(event.target.value);
                        }}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Masukkan email"
                        onChange={(event) => {
                          setEmail(event.target.value);
                          console.log(event.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="tanggallahir">
                      <Form.Label>Tanggal Lahir</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Masukkan tanggal lahir"
                        onChange={(event) => {
                          setTanggalLahir(event.target.value);
                          console.log(event.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="nomortelepon">
                      <Form.Label>Nomor Telepon</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Masukkan nomor telepon"
                        onChange={(event) => {
                          setNomorTelpon(event.target.value);
                          console.log(event.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="gaji">
                      <Form.Label>Gaji</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Masukkan gaji"
                        onChange={(event) => {
                          setGaji(event.target.value);
                          console.log(event.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="tanggalmasuk">
                      <Form.Label>Tanggal Masuk</Form.Label>
                      <Form.Control
                        type="date"
                        placeholder="Masukkan tanggal masuk"
                        onChange={(event) => {
                          setTanggalMasuk(event.target.value);
                          console.log(event.target.value);
                        }}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="jabatan">
                      <Form.Label>Jabatan</Form.Label>
                      <select
                        class="form-select form-select-sm mb-3"
                        aria-label=".form-select-sm example"
                        onChange={(event) => {
                          setJabatan(event.target.value);
                          console.log(event.target.value);
                        }}
                      >
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </Form.Group>
                    <Button
                      variant="primary"
                      type="button"
                      onClick={() => {
                        inputPegawai();
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

export default Inputkaryawan;
