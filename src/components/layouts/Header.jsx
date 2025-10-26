import React, { useState } from 'react';
import Logo from "/src/assets/logo.png";
import Container from '../Container';
import { Link } from 'react-router-dom';
import Flex from '../Flex';
import Button from '../Button';
import Image from '../Image';
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="relative z-50">
        <nav className="bg-quaternary text-white py-4 font-poppins">
          <Container>
            <Flex className="justify-between items-center">
              {/* Logo */}
              <div>
                <Image imgSrc={Logo} />
              </div>

              {/* Desktop Menu */}
              <ul className="hidden md:flex gap-x-8">
                <li className="text-senary hover:text-white transition"><Link to="/">Home</Link></li>
                <li className="text-senary hover:text-white transition"><Link to="/about">About us</Link></li>
                <li className="text-senary hover:text-white transition"><Link to="/features">Features</Link></li>
                <li className="text-senary hover:text-white transition"><Link to="/pricing">Pricing</Link></li>
                <li className="text-senary hover:text-white transition"><Link to="/read">Case</Link></li>
                <li className="text-senary hover:text-white transition"><Link to="/blog">Blog</Link></li>
                <li className="text-senary hover:text-white transition"><Link to="/work">Portfolio</Link></li>
                <li className="text-senary hover:text-white transition"><Link to="/readblog">Read Blog</Link></li>
<<<<<<< HEAD
                <li className="text-senary hover:text-white transition"><Link to="/policy">Policy</Link></li>
                <li className="text-senary hover:text-white transition"><Link to="/contact">Contact</Link></li>
=======
                <li className="text-senary hover:text-white transition"><Link to="/contactus"> Contact us</Link></li>
>>>>>>> 62792bb92b022371f540228c0f3c8e106c874fab
              </ul>

              {/* Desktop Button */}
              <div className="hidden md:flex">
                <Button
                  className="py-3 px-10 border border-[rgba(244,246,252,0.2)] hover:bg-white hover:text-quaternary transition"
                  text="Contact us"
                />
              </div>

              {/* Mobile Menu Toggle */}
              
              <button
                className="md:hidden"
                onClick={() => setToggle(!toggle)}
                aria-label="Toggle Menu"
              >
                {toggle ? <ImCross size={26} /> : <FaBars size={26} />}
              </button>
              
            </Flex>
          </Container>
        </nav>

        {/* Mobile Dropdown Menu */}
        {toggle && (
          <div className="absolute top-full left-0 w-full bg-quaternary text-center py-6 md:hidden transition-all duration-300">
            <ul className="space-y-4">
              <li className="text-senary hover:text-white"><Link to="/">Home</Link></li>
              <li className="text-senary hover:text-white"><Link to="/about">About us</Link></li>
              <li className="text-senary hover:text-white"><Link to="/features">Features</Link></li>
              <li className="text-senary hover:text-white"><Link to="/pricing">Pricing</Link></li>
              <li className="text-senary hover:text-white"><Link to="/faq">FAQ</Link></li>
              <li className="text-senary hover:text-white"><Link to="/blog">Blog</Link></li>
              <li>
                <Button
                  className="py-3 px-10 border border-[rgba(244,246,252,0.2)] hover:bg-white hover:text-quaternary transition"
                  text="Contact us"
                />
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
