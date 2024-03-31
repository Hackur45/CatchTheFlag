import './App.css';
import {Routes,Route} from 'react-router-dom';
import BelowNavbar from './components/js/BelowNavbar';
import Navbar from './components/js/Navbar';
import Contact from './components/js/contact';
import Reg from './components/js/reg';
import Login from './components/js/login';



function App() {

  return (


    <>
    <Navbar />
     <Routes>
        <Route
          path='/'
          element={
            <>
              <BelowNavbar />
              <Contact />
            </>
          }
        />
        <Route path='/register' element={<Reg />} />
        <Route path='/login' element={<Login />}/>
      </Routes>

    </>
  );
}

export default App;
