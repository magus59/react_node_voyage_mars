import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../App.css';

const ReservationCard = ({ reservation }) => {
  const navigate = useNavigate();

  const navigateToDetailsReservation = () => {
    navigate("/reservation/" + reservation.RE_ID);
  };

  const navigateToDetailsClient = () => {
    navigate("/client/" + reservation.client.CL_ID);
  };

  const navigateToDetailsDestination = () => {
    navigate("/destination/" + reservation.destination.DE_ID);
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://theleaflet.in/wp-content/uploads/2021/10/Reservation.jpg"
        />
        <Card.Body>
          <Card.Title className="text-center fw-bold p-1 text-success">
           Réservation n° :  {reservation.RE_ID}
          </Card.Title>
          <div className="d-flex justify-content-between">
            <button id="btn_reservation" className=" border-0 m-1" onClick={navigateToDetailsClient}>
              Voir Client
            </button>
            <button id="btn_reservation" className=" border-0 m-1" onClick={navigateToDetailsDestination}>
              Voir Destination
            </button>
            <button id="btn_reservation" className=" border-0 m-1" onClick={navigateToDetailsReservation}>
              Voir Reservation
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ReservationCard;
