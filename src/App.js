// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import Navbar from './funtionalcomponents/Navbar.js'
import Nav from './funtionalcomponents/Nav.jsx'
import Nav1 from './funtionalcomponents/Nav1.jsx'
import Nav2 from './funtionalcomponents/Nav2.jsx'
import Nav3 from './funtionalcomponents/Nav3.jsx'
import Nav4 from './funtionalcomponents/Nav4.jsx'
import Nav5 from './funtionalcomponents/Nav5.jsx'
import Nav6 from './funtionalcomponents/Nav6.jsx'
import Nav7 from './funtionalcomponents/Nav7'
import Nav8 from './funtionalcomponents/Nav8.jsx'

import Footer from './classcomponents/Footer.jsx'
import Footer1 from './classcomponents/Footer1.jsx'
import Footer3 from './classcomponents/Footer3.jsx'
import Footer4 from './classcomponents/Footer4.jsx'
import Footer5 from './classcomponents/Footer5.jsx'
import Nav9 from './components/Nav9'
import JSON from './data.json';
import "./global.css"
import  List  from './components/List.jsx'
function App() {
  return (
    <>
    {/* <div>
      <Navbar/>
      <Nav/>
      <Nav1/>
      <Nav2/>
      <Nav3/>
      <Nav4/>
      <Nav5/>
      <Nav6/>
      <Nav7/>
      <Nav8/>
      <div>
      </div>
      <Footer/>
      <Footer1/>
      <Footer3/>
      <Footer4/>
      <Footer5/>
      </div>   */}
      {/* <Nav9/> */}
      <List payload={JSON}/>
    </>
  );

}

export default App;
