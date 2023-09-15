import './App.css';
import Navbar from './components/Navbar';
import WhatWeOffer from './components/WhatWeOffer';
import AboutUsData from './data/AboutUsData.json';
import Cards from './components/Cards';
import TestimoniasData from './data/TestimonialsData.json';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Title from './components/Title';

function App() {
  
  return (
    <div className="relative bg-top bg-no-repeat bg-background-custom bg-opacity-10 ">
     <div className=" py-20 justify-center static mb-40">
      <Title/>
      <Navbar/>
     </div>
     <section>
        <Cards data={AboutUsData} backgroundColor='bg-emerald-800' id="aboutUs"/>
        <WhatWeOffer/>
        <Contact/>
        <Cards data={TestimoniasData} backgroundColor='bg-emerald-600'/>
     </section>
    <Footer/>     
    </div>
  );
}

export default App;
