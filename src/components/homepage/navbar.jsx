import { FaCar } from "react-icons/fa";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">
        <FaCar className="brand-icon" />
        <span className="brand">EcoRent</span>
      </div>
      <nav className="nav-links">
        <a className="active" href="#">
          Trang chủ
        </a>
        <a href="#">Giá dịch vụ</a>
        <a href="#">Về chúng tôi</a>
        <a href="#">Liên hệ</a>
      </nav>
      <div className="nav-actions">
        <button className="btn-ghost">Đăng nhập</button>
        <button className="btn-primary">Đăng ký</button>
      </div>
    </header>
  );
}
export default Navbar;
