import React from "react";
import Card from "react-bootstrap/Card";

const Product = (props) => {
  const { id, title, category, price, description, image, rating } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>€ {price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
