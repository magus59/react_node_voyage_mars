import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReservationService from "../Services/ReservationService";

function ReservationDetailsPage() {
  const { id } = useParams();
  const [reservation, setReservation] = useState({});

  const fetchReservationByID = async () => {
    try {
      const response = await ReservationService.fetchReservationByID(id);
      setReservation(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchReservationByID();
  }, []);

  return (
    <>
      <h2 className="text-center text-secondary">
        Détails de la Réservation {id} :
      </h2>
      <div className="d-flex flex-column align-items-center bg-dark m-5">
        <h3 className="text-center text-white">
          Voyage du {reservation.RE_DateDebut} au {reservation.RE_DateFin}
        </h3>
        <h2 className="text-center text-white">
          Réservation : {reservation.RE_DateReservation}
        </h2>
        <h2 className="text-center text-warning">Client :</h2>
        {reservation.client ? (
          <h2 className="text-center text-white">
            {reservation.client.CL_Nom} {reservation.client.CL_Prenom}
          </h2>
        ) : (
          <p className="text-center text-danger bg-white">
            Aucun client trouvé pour cette réservation.
          </p>
        )}
        <h2 className="text-center text-warning">Destination :</h2>
        {reservation.destination ? (
          <h2 className="text-center text-white">
            {reservation.destination.DE_Libelle} <br />{" "}
            {reservation.destination.DE_Description}
          </h2>
        ) : (
          <p className="text-center text-danger">
            Aucun destination trouvé pour cette réservation.
          </p>
        )}
      </div>
    </>
  );
}

export default ReservationDetailsPage;
