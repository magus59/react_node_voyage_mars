import React, { useEffect, useState } from "react";
import ReservationCard from "../Components/ReservationCard";
import ReservationService from "../Services/ReservationService";

function ReservationPage() {
  const [reservations, setReservations] = useState([]);

  const fetchReservation = async () => {
    try {
      const response = await ReservationService.fetchReservation();
      setReservations(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReservation();
  }, []);

  return (
    <>
      <h1 className="text-center fw-bold p-3 text-primary">Voyage Mars</h1>
      <h2 className="text-center text-secondary">Reservation</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {reservations.map((reservation) => {
          return (
            <ReservationCard
              reservation={reservation}
              key={"Reservation_" + reservation.CL_ID}
            ></ReservationCard>
          );
        })}
      </div>
    </>
  );
}

export default ReservationPage;
