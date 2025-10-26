import Container from '../Container';
import Flex from '../Flex';
import Image from '../Image';
import Logo from "/src/assets/logo.png";
import Paragraph from '../Paragraph';
import Heading from '../Heading';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        {/* footer top start */}
        <section className="bg-quaternary pt-[100px] pb-7 text-white font-poppins">
          <Container>
            <div className="flex flex-col md:flex-row md:justify-between pb-24 text-center md:text-left relative gap-12 md:gap-0">
              {/* Left side */}
              <div className="md:w-[49%] w-full mx-auto relative">
                <div className="flex flex-col items-center md:items-start">
                  <Image imgSrc={Logo} />
                  <Paragraph className="max-w-[359px] pt-[22px] leading-7">
                    We are always open to discuss your project and improve your online presence.
                  </Paragraph>
                </div>

                
                <div className="bg-quinary w-full md:max-w-[517px]  h-[155px]  md:h-[95px] md:absolute md:-bottom-7 bottom-0 left-0 mt-8 md:mt-0">
                  <Flex className="flex-col md:flex-row items-center md:items-start md:justify-between gap-y-4 md:gap-x-12 text-black py-[17px] px-6 md:pl-[37px] md:pr-[60px]">
                    <div>
                      <Heading tagName="h4" text="Email me at" className="text-[18px] font-medium" />
                      <Heading tagName="h5" text="contact@website.com" />
                    </div>
                    <div>
                      <Heading tagName="h4" text="Call us" className="text-[18px] font-medium" />
                      <Heading tagName="h5" text="0927 6277 28525" className="w-auto" />
                    </div>
                  </Flex>
                </div>
              </div>

              {/* Right side */}
              <div className="md:w-[49%] w-full mx-auto mt-10 md:mt-0">
                <Heading tagName="h3" text="Let’s Talk!" className="text-[36px] md:text-[48px] font-semibold" />
                <Paragraph className="max-w-[359px] mx-auto md:mx-0 pt-3.5 leading-7 text-[#F4F6FC]">
                  We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
                </Paragraph>
                <Flex className="justify-center md:justify-start gap-x-6 pt-7 text-[22px]">
                  <FaFacebook className="cursor-pointer hover:text-primary duration-300" />
                  <FaTwitter className="cursor-pointer hover:text-primary duration-300" />
                  <FaInstagram className="cursor-pointer hover:text-primary duration-300" />
                  <IoLogoLinkedin className="cursor-pointer hover:text-primary duration-300" />
                </Flex>
              </div>
            </div>
          </Container>
        </section>
        {/* footer top end */}

        {/* footer bottom start */}
        <section className="bg-gray-50">
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-center py-8 text-primary font-medium text-center gap-y-4 md:gap-0">
              <Heading tagName="h4" text="Copyright 2025, Finsweet.com" className="text-primary" />
              <ul className="flex flex-wrap justify-center gap-x-6">
                <li className="text-primary font-medium hover:text-bg duration-300">
                  <Link to="/">Home</Link>
                </li>
                <li className="text-primary font-medium hover:text-bg duration-300">
                  <Link to="/about">About us</Link>
                </li>
                <li className="text-primary font-medium hover:text-bg duration-300">
                  <Link to="/features">Features</Link>
                </li>
                <li className="text-primary font-medium hover:text-bg duration-300">
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li className="text-primary font-medium hover:text-bg duration-300">
                  <Link to="/faq">FAQ</Link>
                </li>
                <li className="text-primary font-medium hover:text-bg duration-300">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </Container>
        </section>
        {/* footer bottom end */}
      </footer>
    </>
  );
};

export default Footer;
