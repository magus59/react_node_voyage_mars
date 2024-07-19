import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from './Pages/HomePage';
import NavbarComponent from './Components/NavbarComponent';
import FooterComponent from './Components/FooterComponent';
import DestinationDetailsPage from './Pages/DestinationDetailsPage';
import CategorieDetailsPage from './Pages/CategorieDetailsPage';
import ClientDetailsPage from './Pages/ClientDetailsPage';
import CategoriePage from './Pages/CategoriePage';
import ClientPage from './Pages/ClientPage';
import ReservationDetailsPage from './Pages/ReservationDetailsPage';
import ReservationPage from './Pages/ReservationPage';


function App() {
  return (
    <BrowserRouter>
    <NavbarComponent></NavbarComponent>
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/CategoriePage' element={<CategoriePage/>} />
          <Route path='/ClientPage' element={<ClientPage/>} />
          <Route path='/ReservationPage' element={<ReservationPage/>} />
          <Route path='/destination/:id' element={<DestinationDetailsPage/>} />
          <Route path='/categorie/:id' element={<CategorieDetailsPage/>} />
          <Route path='/reservation/:id' element={<ReservationDetailsPage />} />
          <Route path='/client/:id' element={<ClientDetailsPage/>} />
      </Routes>
      <FooterComponent></FooterComponent>
    </BrowserRouter>
  );
}

export default App;
