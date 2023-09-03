import './App.css';
import Navbar from './components/Navbar';
import WhatWeOffer from './components/WhatWeOffer';
import AboutUsData from './data/AboutUsData.json';
import Cards from './components/Cards';
import TestimoniasData from './data/TestimonialsData.json';

function App() {
  
  return (
    <div className="relative bg-top bg-no-repeat bg-background-custom bg-opacity-10 ">
     <div className=" py-20 justify-center static mb-40">
      <h1 className=" text-5xl font-bold text-center justify-center ">all editors</h1>
      <Navbar/>
     </div>
     <section>
      <Cards data={AboutUsData} backgroundColor='bg-emerald-800'/>
      <WhatWeOffer/>
      <Cards data={TestimoniasData} backgroundColor='bg-emerald-600'/>
     </section>
        
        
      
    </div>
  );
}

export default App;
