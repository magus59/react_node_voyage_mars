import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientService from "../Services/ClientService";
import ReservationTable from "../Components/ReservationTable";

function ClientDetailsPage() {
  const { id } = useParams();
  const [client, setClient] = useState({});

  const fetchClientByID = async () => {
    try {
      const response = await ClientService.fetchClientByID(id);
      setClient(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchClientByID();
  }, []);

  return (
    <>
      <h2 className="text-center text-secondary">Détails du Client {id} :</h2>
      <div className="d-flex flex-column align-items-center">
        <h2 className="text-center text-success">
          Client : {client.CL_Nom + " " + client.CL_Prenom}
        </h2>{" "}
        <h2 className="text-center text-success">
          Domiciliation :{" "}
          {client.CL_Adresse +
            " " +
            client.CL_CodePostal +
            " " +
            client.CL_Ville}
        </h2>{" "}
        <h2 className="text-center text-success">Email : {client.CL_Mail}</h2>{" "}
        <h2 className="text-center text-success">
          Téléphone : {client.CL_Telephone}
        </h2>{" "}
        <h2 className="text-center text-success">
          Adresse : {client.CL_Adresse}, <br /> {client.CL_CodePostal + ' '}
          {client.CL_Ville}
        </h2>{" "}
      </div>
      <h2 className="text-center text-secondary">Réservation :</h2>
      {client.reservations && (
        <div className="d-flex justify-content-center">
          <ReservationTable reservations={client.reservations} />
        </div>
      )}
    </>
  );
}

export default ClientDetailsPage;
