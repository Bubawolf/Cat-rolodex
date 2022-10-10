//import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

const Cardlist = ({ monsters }) => {
  //console.log(this.props);
  //console.log("Render from Cardlist");
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default Cardlist;
