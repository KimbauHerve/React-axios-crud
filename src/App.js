//import logo from './logo.svg';
import Accueil from './pages/Accueil';
//import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './pages/AddUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Accueil />} />
        <Route path='/add-user' element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
