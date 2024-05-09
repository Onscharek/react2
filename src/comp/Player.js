
import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team,  natinality, jerseyNumber, age, Img_URL }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={Img_URL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Team: {team}<br />
          Nationality: { natinality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown",
  team: "Unknown",
  natinality: "Unknown",
  jerseyNumber: "Unknown",
  age: "Unknown",
  Img_URL: "https://via.placeholder.com/150"
};

export default Player;
