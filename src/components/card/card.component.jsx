//import { Component } from "react";
import "./card.styles.css";

const Card = ({ monster }) => {
  //console.log(monster);
  const { name, id, email } = monster;

  //console.log(name, id, email);
  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set4&size=150x150`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
