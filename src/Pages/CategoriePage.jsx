import React, { useEffect, useState } from "react";
import CategorieCard from "../Components/CategorieCard";
import CategorieService from "../Services/CategorieService";

function CategoriePage() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const response = await CategorieService.fetchCategorie();
      setCategories(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <h1 className="text-center fw-bold p-3 text-primary">Voyage Mars</h1>
      <h2 className="text-center text-secondary">Categorie</h2>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {categories.map((categorie) => {
          return (
            <CategorieCard
              categorie={categorie}
              key={"Categorie_" + categorie.CA_ID}
            ></CategorieCard>
          );
        })}
      </div>
    </>
  );
}

export default CategoriePage;
