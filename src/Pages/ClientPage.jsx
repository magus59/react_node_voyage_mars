import React, { useEffect, useState } from "react";
import ClientCard from "../Components/ClientCard";
import ClientService from "../Services/ClientService";

function ClientPage() {
  const [clients, setClients] = useState([]);

  const fetchClient = async () => {
    try {
      const response = await ClientService.fetchClient();
      setClients(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchClient();
  }, []);

  return (
    <>
      <h1 className="text-center fw-bold p-3 text-primary">Voyage Mars</h1>
      <h2 className="text-center text-secondary">Client</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {clients.map((client) => {
          return (
            <ClientCard
              client={client}
              key={"Client_" + client.CL_ID}
            ></ClientCard>
          );
        })}
      </div>
    </>
  );
}

export default ClientPage;
