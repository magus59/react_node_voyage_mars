import React, { useEffect, useState } from 'react'
import DestinationService from '../Services/DestinationService';
import DestinationCard from '../Components/DestinationCard';

function HomePage() {
  // Constantes
  const[destinations, setDestinations]= useState([]);
  // Traitement 
  const fetchDestinations = async () => {
    try {
      // Appeler la fonction qui fait le fetch à l'API
      const response = await DestinationService.fetchDestinations();
      setDestinations(response.data);
      console.log(response.data);
    } catch (error){
      console.error(error)
    }
  }

  useEffect(() => {
    fetchDestinations();
  },[])

//  Affichage
  return <>
    <h1 className='text-center fw-bold p-3 text-primary'>Voyage Mars</h1>
    <h2 className='text-center text-secondary'>Destinations</h2>
    <div className='d-flex flex-wrap gap-3 justify-content-center'>
      {destinations.map((destination) => {
        return <DestinationCard destination={destination} key={"Destination_"+destination.DE_ID}></DestinationCard>
      })}
    </div>
  </>
}

export default HomePage 