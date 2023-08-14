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

export default Martabak;
