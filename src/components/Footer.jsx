import Order from "./Order";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 17;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          Mohon maaf toko sedang tutup, kami buka pada pukul {openHour}:00
          sampai {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

export default Footer;
