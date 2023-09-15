import { useState } from 'react';
import { Link } from 'react-scroll';



export default function Nav() {

 const [activeItem, setActiveItem] = useState(false);

 const handleItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };
   

  return(
    <div> 
        <nav className="p-16 flex flex-col  items-center justify-between text-center text-5xl">
        <div className="text-sm font-bold flex items-center gap-6">
          <Link
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className={` hover:text-fuchsia-600 cursor-pointer ${
              activeItem === 'about us' ? 'text-fuchsia-600' : ''
            }`}
            onClick={() => handleItemClick('about us')}
          >
            About Us
          </Link>
          <Link
            to="whatWeOffer"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className={`hover:text-fuchsia-600 cursor-pointer ${
              activeItem === 'what we offer' ? 'text-fuchsia-600' : ''
            }`}
            onClick={() => handleItemClick('what we offer')}
          >
            What we offer
          </Link>

          <Link
             to="fileUpload"
             spy={true}
             smooth={true}
             offset={-70} 
             duration={500}
            className={`hover:text-fuchsia-600 cursor-pointer ${
              activeItem === 'file uploded' ? 'text-fuchsia-600' : ''
            }`}
            onClick={() => handleItemClick('file uploded')}
          >
            File Uploded
          </Link>
           
          
            
          <Link
             to="rateUs"
             spy={true}
             smooth={true}
             offset={-70} 
             duration={500}
            className={`hover:text-fuchsia-600 cursor-pointer ${
              activeItem === 'rate us' ? 'text-fuchsia-600' : ''
            }`}
            onClick={() => handleItemClick('rate us')}
          >
            Rate Us
            </Link>
            <Link
             to="contact"
             spy={true}
             smooth={true}
             offset={-70} 
             duration={500}
            className={`hover:text-fuchsia-600 cursor-pointer ${
              activeItem === 'contact' ? 'text-fuchsia-600' : ''
            }`}
            onClick={() => handleItemClick('contact')}
          >
            Contact
          </Link>
        </div>
        </nav>
    </div>
  );
}

