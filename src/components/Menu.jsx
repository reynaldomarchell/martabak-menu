import Martabak from "./Martabak";

function Menu() {
  const martabaks = martabakData;
  const numMartabaks = martabaks.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numMartabaks > 0 ? (
        <>
          <p>
            Martabak manis dan telor dengan cita rasa khas, disajikan dengan
            bahan-bahan yang berkualitas tinggi.
          </p>
          <ul className="martabaks">
            {martabaks.map((martabak) => (
              <Martabak martabakObj={martabak} key={martabak.name} />
            ))}
          </ul>
        </>
      ) : (
        <p> Menu sedang dalam pengerjaan. Silahkan kembali lagi nanti. 🤖</p>
      )}
    </main>
  );
}

export default Menu;

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
