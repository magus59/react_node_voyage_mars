import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ClientCard = ({ client }) => {
  const navigate = useNavigate();

  const navigateToDetailsClient = () => {
    navigate("/client/" + client.CL_ID);
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.assurance-credit-entreprise.fr/img/produit/client.jpg"
        />
        <Card.Body>
          <Card.Title className='text-center fw-bold p-1 text-success'>{client.CL_Nom} {client.CL_Prenom}</Card.Title>
          <Card.Text>Téléphone : {client.CL_Telephone}</Card.Text>
          <Card.Text>Mail : {client.CL_Mail}</Card.Text>
          <Card.Text>Adresse : {client.CL_Adresse},  {client.CL_CodePostal}  {client.CL_Ville}</Card.Text>
          <Button variant="primary" onClick={navigateToDetailsClient}>
            Voir plus
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ClientCard;
