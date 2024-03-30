import './App.css';
import {Routes,Route} from 'react-router-dom';
import BelowNavbar from './components/BelowNavbar';
import Navbar from './components/Navbar';
import Contact from './components/contact';
import Reg from './components/reg';



function App() {
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration-section');
    registrationSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (

    // <div className="App">
    //   <div className='Navbar-app-main'>
    //     <Navbar/>
    //   </div>    
    //   <div className='Below-Navbar-app'> 
    //     <BelowNavbar/>
    //     <Contact/>
    //   </div>

    // </div>
    <>
    <Navbar onRegisterClick={scrollToRegistration} />
    <BelowNavbar/>
    <Reg/>
    <Contact/>
      {/* <Routes>
        <Route path='registration' element={<Regestration/>}/>
      </Routes> */}
    </>
  );
}

export default App;
