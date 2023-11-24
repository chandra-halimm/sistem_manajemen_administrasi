/* eslint-disable jsx-a11y/anchor-is-valid */
const Sidebar = () => {
  return (
    <>
      <li className="nav-item">
        <a href="pelanggan" className="nav-link">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <li className="nav-item">
        <a
          href="pegawai"
          className="nav-link"
          onClick={() => {
            window.location.replace("/pegawai");
          }}
        >
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Data Pegawai</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="pelanggan" className="nav-link">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Data Pelanggan</span>
        </a>
      </li>

      <li className="nav-item">
        <a href="supplier" className="nav-link">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Data Supplier</span>
        </a>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
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
            <a className="collapse-item" href="/transaksipenjualan">
              Penjualan
            </a>
            <a className="collapse-item" href="transaksipembelian">
              Pembelian
            </a>
          </div>
        </div>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
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
    </>
  );
};

export default Sidebar;
