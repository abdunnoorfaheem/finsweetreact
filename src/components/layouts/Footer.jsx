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
                <section className='bg-quaternary pt-[100px] pb-7 text-white font-poppins '>
                    <Container>
                        <div className={"md:flex pb-24 text-center md:text-left relative"}>
                            <div className="w-[49%] m-auto ">
                                <Image imgSrc={Logo} />
                                <Paragraph className={"w-[359px] pt-[22px] leading-7 "}>We are always open to discuss your project and improve your online presence.</Paragraph>
                                <div className="bg-quinary w-[500px] md:max-w-[517px] h-[95px]  absolute md:-bottom-7 bottom-0 left-0">
                                    <Flex className={"gap-x-12 text-black py-[17px] pl-[37px] pr-[137px] "}>
                                        <div className="">
                                            <Heading tagName={"h4"} text={"Email me at"} className={"text-[18px] font-medium"} />
                                            <Heading tagName={"h5"} text={"contact@website.com"} className={""} />
                                        </div>
                                        <div className="">
                                            <Heading tagName={"h4"} text={"Call us"} className={"text-[18px] font-medium"} />
                                            <Heading tagName={"h5"} text={"0927 6277 28525"} className={"w-[133px]"} />
                                        </div>
                                    </Flex>
                                </div>
                            </div>
                            <div className="w-[49%] m-auto">
                                <Heading tagName={"h3"} text={"Lets Talk!"} className={"text-[48px] font-semibold"} />
                                <Paragraph className={"w-[359px] pt-3.5 leading-7 text-[#F4F6FC]"}>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</Paragraph>
                                <Flex className={"gap-x-6 pt-7"}>
                                    <FaFacebook />
                                    <FaTwitter />
                                    <FaInstagram />
                                    <IoLogoLinkedin />
                                </Flex>
                            </div>
                        </div>
                    </Container>
                </section>
                {/* footer top end */}
                {/* footer bottom start */}
                <section className='bg-gray-50'>
                  <Container>
                    <div className={"md:flex justify-between py-8 text-black text-center"}>
                          <div className="">
                              <Heading tagName={"h4"} text={"Copyright 2025, Finsweet.com"} className={"text-primary "}/>
                          </div>
                          <div className="">
                            <ul className='flex gap-x-8'>
                        <li className='text-senary hover:text-bg'><Link>Home</Link></li>
                        <li className='text-senary hover:text-bg'><Link>About us</Link></li>
                        <li className='text-senary hover:text-bg'><Link>Features</Link></li>
                        <li className='text-senary hover:text-bg'><Link>Pricing</Link></li>
                        <li className='text-senary hover:text-bg'><Link>FAQ</Link></li>
                        <li className='text-senary hover:text-bg'><Link>Blog</Link></li>
                    </ul>
                          </div>
                        </div>
                  </Container>
                </section>
                {/* footer bottom end */}
            </footer>
        </>
    )
}

export default Footer
