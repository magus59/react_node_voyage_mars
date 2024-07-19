import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CategorieCard = ({ categorie }) => {
  const navigate = useNavigate();

  const navigateToDetailsCategorie = () => {
    navigate("/categorie/" + categorie.CA_ID);
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://maitrelucas.b-cdn.net/wp-content/uploads/categorie-semantique-CP-CE1-7-rangement-par-categorie-1024x576.jpg"
        />
        <Card.Body>
          <Card.Title>{categorie.CA_Libelle}</Card.Title>
          <Button variant="primary" onClick={navigateToDetailsCategorie}>
            Voir plus
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CategorieCard;
