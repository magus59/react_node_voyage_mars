import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategorieService from "../Services/CategorieService";
import DestinationCard from "../Components/DestinationCard";

function CategorieDetailsPage() {
  const { id } = useParams();
  const [categorie, setCategorie] = useState({});

  const fetchCategorieByID = async () => {
    try {
      const response = await CategorieService.fetchCategorieByID(id);
      setCategorie(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategorieByID();
  }, []);

  return (
    <>
      <h2 className="text-center text-secondary">
        Détails de la categorie {id}
      </h2>
      <h2 className="text-center text-secondary">
        Categorie {categorie.CA_Libelle}
      </h2>
      <div className="d-flex flex-column align-items-center">
        {categorie.destinations &&
          categorie.destinations.map((destination) => {
            return (
              <DestinationCard
                destination={destination}
                key={"Destination_By_Categorie_" + destination.DE_ID}
              />
            );
          })}
      </div>
    </>
  );
}

export default CategorieDetailsPage;
