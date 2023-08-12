import "../styles.css";

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

export default Order;