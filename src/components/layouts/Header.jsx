import React, { useState } from 'react';
import Logo from "/src/assets/logo.png";
import Container from '../Container';
import { Link } from 'react-router-dom';
import Flex from '../Flex';
import Button from '../Button';
import Image from '../Image';
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header className="relative z-50">
        <nav className="bg-quaternary text-white py-4 font-poppins">
          <Container>
            <Flex className="justify-between items-center px-5 md:px-0">
              {/* Logo */}
              <div>
                <Image imgSrc={Logo} />
              </div>

              {/* Desktop Menu */}
              <ul className="hidden md:flex gap-x-8">
                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    About us
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/features"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Features
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Pricing
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/read"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Case
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Blog
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/work"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Portfolio
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/readblog"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Read Blog
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/policy"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Policy
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>

              {/* Desktop Button */}
              <div className="hidden md:flex">
                <Button
                  className="py-3 px-10 border border-[rgba(244,246,252,0.2)] hover:bg-white hover:text-quaternary transition text-white"
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
          <div className="absolute top-full left-0 w-full bg-quaternary text-center py-6 md:hidden transition-all duration-700 delay-700">
            <ul className="space-y-4">
                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Home
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    About us
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/features"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Features
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/pricing"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Pricing
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/read"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Case
                  </NavLink>
                </li>

                <li className="text-senary hover:text-white transition">
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive ? "text-white font-semibold" : "text-[#BBBBCB]"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
              <li>
                <Button
                  className="py-3 px-10 border border-[rgba(244,246,252,0.2)] hover:bg-white hover:text-quaternary transition text-white"
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
