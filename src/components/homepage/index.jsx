import Navbar from "./navbar";
import car from "../../img/car.png";
import "../homepage/homePage.css";
function HomePage() {
  return (
    <div>
      <Navbar />
      <section className="hero">
        <img className="hero-bg" src={car} alt="Car" />

        <div className="hero-overlay" />
        <div className="hero content">
          <h1>Thuê xe điện dễ dàng, tiện lợi tại trạm gần bạn</h1>
          <p>Trải nghiệm di chuyển xanh - tiết kiệm và bền vững cùng EcoRent</p>
        </div>
      </section>
    </div>
  );
}
export default HomePage;
