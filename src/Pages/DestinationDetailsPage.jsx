import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DestinationService from "../Services/DestinationService";

function DestinationDetailsPage() {
  const { id } = useParams();
  const [destination, setDestination] = useState({});

  const fetchDestinationByID = async () => {
    try {
      const response = await DestinationService.fetchDestinationsByID(id);
      setDestination(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDestinationByID();
  }, []);

  return (
    <>
      <h2 className="text-center text-secondary">
        Détails de la destination {id}
      </h2>
      <div className="d-flex flex-column align-items-center">
        <h3 className="p-1">Destination : {destination.DE_Libelle}</h3>
        <p className="p-1">Description : {destination.DE_Description} </p>
        <p className="p-1">Prix : {destination.DE_Prix} € </p>
        {/* alt gr + e => € */}
      </div>
      <h2 className="text-center text-secondary">
        Categorie {destination.categorie && destination.categorie.CA_Libelle}
      </h2>

      {destination.reservations && (
        <>
          <h2 className="text-center text-secondary">Réservations </h2>
          {destination.reservations.map((reservation) => {
            return (
              <li key={"Reservation_" + reservation.RE_ID}>
                {" "}
                {reservation.RE_DateReservation}{" "}
              </li>
            );
          })}
        </>
      )}
    </>
  );
}

export default DestinationDetailsPage;
