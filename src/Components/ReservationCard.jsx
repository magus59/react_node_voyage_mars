import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ReservationCard = ({ reservation }) => {
  const navigate = useNavigate();

  const navigateToDetailsReservation = () => {
    navigate("/reservation/" + reservation.RE_ID);
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://theleaflet.in/wp-content/uploads/2021/10/Reservation.jpg"
        />
        <Card.Body>
          <Card.Title className='text-center fw-bold p-1 text-success'>{reservation.RE_ID}</Card.Title>
          <Button variant="primary" onClick={navigateToDetailsReservation}>
            Voir plus
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ReservationCard;
