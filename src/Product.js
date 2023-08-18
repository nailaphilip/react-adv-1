import React from "react";
import Card from "react-bootstrap/Card";

const Product = (props) => {
  const { id, title, category, price, description, image, rating } = props;

  return (
    <div style={{ padding: "1rem" }}>
      <Card style={{ width: "18rem", padding: "2rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>€ {price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
