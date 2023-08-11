import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const martabakData = [
  {
    name: "Martabak Keju",
    ingredients: "Martabak manis dengan topping keju",
    price: 33000,
    photoName: "martabaks/keju.jpg",
    soldOut: false,
  },
  {
    name: "Martabak Coklat",
    ingredients: "Martabak manis dengan topping coklat",
    price: 33000,
    photoName: "martabaks/coklat.jpg",
    soldOut: false,
  },
  {
    name: "Martabak Coklat Keju",
    ingredients: "Martabak manis dengan topping coklat keju",
    price: 35000,
    photoName: "martabaks/coklat-keju.jpg",
    soldOut: false,
  },
  {
    name: "Martabak Pisang Coklat",
    ingredients: "Martabak manis dengan topping pisang coklat",
    price: 36000,
    photoName: "martabaks/pisang-coklat.jpg",
    soldOut: false,
  },
  {
    name: "Martabak Telor (Daging Sapi)",
    ingredients: "Martabak asin dengan topping daging sapi",
    price: 34000,
    photoName: "martabaks/telor-sapi.jpg",
    soldOut: true,
  },
  {
    name: "Martabak Telor (Daging Ayam)",
    ingredients: "Martabak asin dengan topping daging ayam",
    price: 34000,
    photoName: "martabaks/telor-ayam.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Martabak Mang Ujang</h1>
    </header>
  );
}

function Menu() {
  const martabaks = martabakData;
  const numMartabaks = martabaks.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numMartabaks > 0 ? (
        <>
          <p>Martabak manis dan telor dengan cita rasa khas, disajikan dengan
            bahan-bahan yang berkualitas tinggi.</p>
          <ul className="martabaks">
            {martabaks.map(martabak => (
              <Martabak martabakObj={martabak} key={martabak.name} />
            ))}
          </ul>
        </>
      ) : <p> Menu sedang dalam pengerjaan. Silahkan kembali lagi nanti. 🤖</p>
      }
    </main>
  );
}

function Martabak({ martabakObj }) {
  console.log(martabakObj);

  return (
    <li className={`martabak ${martabakObj.soldOut ? "sold-out" : ""}`}>
      <img src={martabakObj.photoName} alt={martabakObj.name} />
      <div>
        <h3>{martabakObj.name}</h3>
        <p>{martabakObj.ingredients}</p>
        <span> {martabakObj.soldOut ? "HABIS" : martabakObj.price} </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          Mohon maaf toko sedang tutup, kami buka pada pukul {openHour}:00 sampai {closeHour}:00.
        </p>
      )}
    </footer>
  );

}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        Kami buka dari pukul {openHour}:00 sampai {closeHour}:00.
        Silahkan kunjungi kami atau pesan secara online.
      </p>
      <button className="btn">Pesan</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);