import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';



export default function Nav() {

 const [activeItem, setActiveItem] = useState(false);

 const handleItemClick = (itemName) => {
    setActiveItem(itemName === activeItem ? null : itemName);
  };
   

  return(
    <div> 
        <nav className="p-16 flex flex-col items-center justify-between text-center ">
        <div className="text-sm font-bold flex items-center gap-6">
        <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className={`cursor-pointer ${
              activeItem === 'home' ? 'text-pink-700' : ''
            }`}
            onClick={() => handleItemClick('home')}
          >
            Home
          </Link>

          <Link
            to="abou us"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className={`cursor-pointer ${
              activeItem === 'about us' ? 'text-pink-700' : ''
            }`}
            onClick={() => handleItemClick('about us')}
          >
            About Us
          </Link>
          <Link
            to="about us"
            spy={true}
            smooth={true}
            offset={-70} 
            duration={500}
            className={`cursor-pointer ${
              activeItem === 'what we offer' ? 'text-pink-700' : ''
            }`}
            onClick={() => handleItemClick('what we offer')}
          >
            What we offer
          </Link>

          <a
            href="#"
            className={`cursor-pointer ${
              activeItem === 'file uploded' ? 'text-pink-700' : ''
            }`}
            onClick={() => handleItemClick('file uploded')}
          >
            File Uploded
          </a>
           
          
            
          <a
            href="#"
            className={`cursor-pointer ${
              activeItem === 'rate us' ? 'text-pink-700' : ''
            }`}
            onClick={() => handleItemClick('rate us')}
          >
            Rate Us
            </a>
            <a
            href="#"
            className={`cursor-pointer ${
              activeItem === 'contact' ? 'text-pink-700' : ''
            }`}
            onClick={() => handleItemClick('contact')}
          >
            Contact
          </a>
        </div>
        </nav>
    </div>
  );
}

