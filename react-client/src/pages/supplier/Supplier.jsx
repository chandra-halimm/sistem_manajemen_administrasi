/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import "../../style/Dashboard.css";
import axios from "axios";

const Supplier = () => {
  const [dataSupplier, setDataSupplier] = useState([]);

  const deleteUser = (supplierID) => {
    axios({
      method: "DELETE",
      url: `http://localhost:3300/supplier/${supplierID}`,
    })
      .then(() => {
        alert("data berhasil dihapus");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3300/supplier",
    }).then((result) => {
      setDataSupplier(result.data.data);
    });
  }, []);

  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
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
                <span>Data Supplier</span>
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
                  <h1 className="h3 mb-0 text-gray-800">Tabel Supplier</h1>
                  <a
                    href="inputsupplier"
                    onClick={() => {
                      window.location.replace("/inputsupplier");
                    }}
                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                  >
                    <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                    Tambah Supplier
                  </a>
                </div>
              </div>

              <Table striped bordered hover size="lg">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th hidden>Supplier ID</th>
                    <th>Nama Supplier</th>
                    <th>Alamat</th>
                    <th>Email</th>
                    <th>no. handphone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dataSupplier.map((supplier, i) => {
                    const { supplierID, namasupplier, alamat, email, nohp } =
                      supplier;

                    return (
                      <tr key={i}>
                        <td className="text-center">{i + 1}</td>
                        <td hidden>{supplierID}</td>
                        <td>{namasupplier}</td>
                        <td>{alamat}</td>
                        <td>{email}</td>
                        <td>{nohp}</td>
                        <td className="d-flex justify-content-center">
                          <a
                            className="btn px-4 btn-success"
                            href={`editsupplier/${supplierID}`}
                          >
                            Edit
                          </a>{" "}
                          |{" "}
                          <a
                            className="btn px-4 btn-danger"
                            onClick={() => {
                              deleteUser(supplierID);
                            }}
                          >
                            Hapus
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
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

export default Supplier;
