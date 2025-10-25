import React from 'react'
import Container from '../Container'
import about from "../../assets/about.png";
import about2 from "../../assets/about2.png"
import about3 from "../../assets/about3.png"
import about4 from "../../assets/about4.png"
import about5 from "../../assets/about5.png"
import about6 from "../../assets/about6.png"
import about7 from "../../assets/about7.png"
import about8 from "../../assets/about8.png"
import about9 from "../../assets/about9.png"
import about10 from "../../assets/about10.png"
import about11 from "../../assets/about11.png"
import group1 from "../../assets/group1.png"
import group2 from "../../assets/group2.png"
import group3 from "../../assets/group3.png"
import group4 from "../../assets/group4.png"
import { GoDotFill } from "react-icons/go";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";


export const About = () => {
  return (
    <div >
      <>
        {/* one part start */}
        <section className="py-20">
          <Container>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0">
              <div className="w-full lg:w-5/12 text-center lg:text-left">
                <span className="text-[18px] text-[#282938] font-poppins">About us</span>
                <h4 className="text-[36px] lg:text-[54px] text-[#282938] font-semibold font-poppins mt-2">
                  Our designs solve problems
                </h4>
                <p className="text-[16px] text-[#282938] font-poppins pt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className="w-full lg:w-6/12">
                <img src={about} alt="About" className="w-full h-auto " />
              </div>
            </div>
          </Container>
        </section>
        {/* one part end */}


        {/* two part start */}
        <section className="">
          <Container>
            <div className="flex flex-col lg:flex-row justify-between py-7 px-4 gap-8 lg:gap-0 bg-[#F4F5F5]">
              <div className="w-full lg:w-5/12 pl-0 lg:pl-6 text-center lg:text-left">
                <h4 className="text-[16px] text-[#282938] font-poppins">Who we are</h4>
                <h5 className="text-[28px] lg:text-[38px] text-[#282938] font-poppins font-semibold mt-1">
                  Goal focussed
                </h5>
                <p className="text-[16px] text-[#282938] font-poppins mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="w-full lg:w-5/12 pt-2 lg:pt-6 text-center lg:text-left">
                <h5 className="text-[28px] lg:text-[38px] text-[#282938] font-poppins font-semibold">
                  Continuous improvement
                </h5>
                <p className="text-[16px] text-[#282938] font-poppins mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
            <div className="w-full pb-10">
              <img src={about2} alt="About Section Image" className="w-full h-auto " />
            </div>
          </Container>
        </section>
        {/* two part end */}


        {/* three part start */}
        <section className="">
          <Container>
            <div className="py-15 pb-20 w-full">
              <div className="lg:w-full">
                <h2 className="text-center lg:text-[48px] text-[#282938] font-semibold font-poppins">
                  The process we follow
                </h2>
              </div>
              <div className="flex flex-col md:flex-row pt-7 gap-10 md:gap-7">
                <div className="w-full md:w-3/12 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start flex-wrap">
                    <GoDotFill className="text-[30px] text-[#2405F2]" />
                    {[...Array(23)].map((_, i) => (
                      <GoDotFill key={i} className="text-[12px]" />
                    ))}
                  </div>
                  <h4 className="text-[24px] text-[#282938] pt-2 font-poppins">
                    Planning
                  </h4>
                  <p className="text-[16px] text-[#282938] font-poppins pt-4">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
                <div className="w-full md:w-3/12 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start flex-wrap">
                    <GoDotFill className="text-[30px] text-[#2405F2]" />
                    {[...Array(23)].map((_, i) => (
                      <GoDotFill key={i} className="text-[12px]" />
                    ))}
                  </div>
                  <h4 className="text-[24px] text-[#282938] pt-2 font-poppins">
                    Conception
                  </h4>
                  <p className="text-[16px] text-[#282938] font-poppins pt-4">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
                <div className="w-full md:w-3/12 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start flex-wrap">
                    <GoDotFill className="text-[30px] text-[#2405F2]" />
                    {[...Array(23)].map((_, i) => (
                      <GoDotFill key={i} className="text-[12px]" />
                    ))}
                  </div>
                  <h4 className="text-[24px] text-[#282938] pt-2 font-poppins">
                    Design
                  </h4>
                  <p className="text-[16px] text-[#282938] font-poppins pt-4">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
                <div className="w-full md:w-3/12 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start flex-wrap">
                    <GoDotFill className="text-[30px] text-[#2405F2]" />
                    {[...Array(23)].map((_, i) => (
                      <GoDotFill key={i} className="text-[12px]" />
                    ))}
                  </div>
                  <h4 className="text-[24px] text-[#282938] pt-2 font-poppins">
                    Development
                  </h4>
                  <p className="text-[16px] text-[#282938] font-poppins pt-4">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* three part end */}


        {/* four part start */}
        <section className='bg-[#EEF4FA] py-10 md:py-20'>
          <Container>
            <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
              <div className="w-full md:w-6/12 text-center md:text-left">
                <h5 className='text-[16px] text-[#282938] font-poppins pb-3'>Our Mission</h5>
                <span className='text-[28px] md:text-[38px] text-[#282938] font-semibold font-poppins'>
                  Inspire, Innovate, Share
                </span>
                <p className='text-[16px] text-[#282938] font-poppins pt-3 leading-relaxed'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden md:block' />
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br className='hidden md:block' />
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br className='hidden md:block' />
                  commodo consequat.
                </p>
              </div>

              <div className="w-full md:w-5/12">
                <img src={about3} alt="" className='w-full rounded-md' />
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10 md:gap-0 pt-10 md:pt-20">
              <div className="w-full md:w-6/12 text-center md:text-left">
                <h5 className='text-[16px] text-[#282938] font-poppins pb-3'>Our Vision</h5>
                <span className='text-[28px] md:text-[38px] text-[#282938] font-semibold font-poppins'>
                  Laser focus
                </span>
                <p className='text-[16px] text-[#282938] font-poppins pt-3 leading-relaxed'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden md:block' />
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br className='hidden md:block' />
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br className='hidden md:block' />
                  commodo consequat.
                </p>
              </div>

              <div className="w-full md:w-5/12">
                <img src={about4} alt="" className='w-full rounded-md' />
              </div>
            </div>
          </Container>
        </section>
        {/* four part end */}


        {/* five part start */}
        <section className='bg-white'>
          <Container>
            <div>
              <div className="w-full">
                <h6 className='text-center text-[32px] md:text-[48px] text-[#282938] pt-10 font-semibold font-poppins'>
                  The benefits of working <br className='hidden md:block' /> with us
                </h6>
              </div>

              <div className="py-16 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-4/12 bg-[#F4F6FC] shadow-lg py-10 px-7">
                  <div className="mb-4">
                    <img src={about5} alt="" className='w-[60px] md:w-auto' />
                  </div>
                  <span className='text-[20px] md:text-[24px] text-[#282938] font-medium font-poppins pt-4 block'>
                    Customize with ease
                  </span>
                  <p className='text-[16px] text-[#282938] font-poppins pt-4 leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                  </p>
                </div>
                <div className="w-full md:w-4/12 bg-[#F4F6FC] shadow-lg py-10 px-7">
                  <div className="mb-4">
                    <img src={about6} alt="" className='w-[60px] md:w-auto' />
                  </div>
                  <span className='text-[20px] md:text-[24px] text-[#282938] font-medium font-poppins pt-4 block'>
                    Perfectly Responsive
                  </span>
                  <p className='text-[16px] text-[#282938] font-poppins pt-4 leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                  </p>
                </div>
                <div className="w-full md:w-4/12 bg-[#F4F6FC] shadow-lg py-10 px-7">
                  <div className="mb-4">
                    <img src={about7} alt="" className='w-[60px] md:w-auto' />
                  </div>
                  <span className='text-[20px] md:text-[24px] text-[#282938] font-medium font-poppins pt-4 block'>
                    Friendly Support
                  </span>
                  <p className='text-[16px] text-[#282938] font-poppins pt-4 leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
                  </p>
                </div>
              </div>
              <div className="pb-20">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
                  <img src={about8} alt="" className='w-[100px] md:w-auto' />
                  <img src={about9} alt="" className='w-[100px] md:w-auto' />
                  <img src={about10} alt="" className='w-[100px] md:w-auto' />
                  <img src={about11} alt="" className='w-[100px] md:w-auto' />
                  <img src={about9} alt="" className='w-[100px] md:w-auto' />
                  <img src={about8} alt="" className='w-[100px] md:w-auto' />
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* five part end */}
        
        {/* six part start */}
        <section className='bg-[#F4F6FC]'>
          <Container>
            <section className='bg-[#F4F6FC]'>
              <Container>
                <div className="py-20 text-center">
                  <h4 className='text-[48px] text-[#282938] font-semibold font-poppins'>Meet our team</h4>
                  <div className="flex flex-wrap justify-center gap-6 pt-10">
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-2/12 bg-white py-10 px-10 flex flex-col items-center text-center rounded-lg shadow-md relative group">
                      <div className="relative w-[100px] h-[100px] mb-4">
                        <img src={group1} alt="John Smith" className="w-full h-full object-cover rounded-full" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#8a5cf642] to-[#5239FA] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300">
                          <div className="flex gap-2 text-white text-[15px] pt-18 pl-5">
                            <MdOutlineFacebook />
                            <AiFillInstagram />
                            <FaLinkedin />
                          </div>
                        </div>
                      </div>
                      <span className="text-[18px] font-semibold text-[#282938] pt-3">John Smith</span>
                      <h5 className="text-[14px] text-gray-500 pt-3">CEO</h5>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-2/12 bg-white py-10 px-2 flex flex-col items-center text-center rounded-lg shadow-md relative group">
                      <div className="relative w-[100px] h-[100px] mb-4">
                        <img src={group2} alt="Simon Adams" className="w-full h-full object-cover rounded-full" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#8a5cf642] to-[#5239FA] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300">
                          <div className="flex gap-2 text-white text-[15px] pt-18 pl-5">
                            <MdOutlineFacebook />
                            <AiFillInstagram />
                            <FaLinkedin />
                          </div>
                        </div>
                      </div>
                      <span className="text-[18px] font-semibold text-[#282938] pt-3">Simon Adams</span>
                      <h5 className="text-[14px] text-gray-500 pt-3">CEO</h5>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-2/12 bg-white py-10 px-2 flex flex-col items-center text-center rounded-lg shadow-md relative group">
                      <div className="relative w-[100px] h-[100px] mb-4">
                        <img src={group3} alt="Paul Jones" className="w-full h-full object-cover rounded-full" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#8a5cf642] to-[#5239FA] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300">
                          <div className="flex gap-2 text-white text-[15px] pt-18 pl-5">
                            <MdOutlineFacebook />
                            <AiFillInstagram />
                            <FaLinkedin />
                          </div>
                        </div>
                      </div>
                      <span className="text-[18px] font-semibold text-[#282938] pt-3">Paul Jones</span>
                      <h5 className="text-[14px] text-gray-500 pt-3">Design Lead</h5>
                    </div>
                    <div className="w-full sm:w-6/12 md:w-6/12 lg:w-2/12 bg-white py-10 px-2 flex flex-col items-center text-center rounded-lg shadow-md relative group">
                      <div className="relative w-[100px] h-[100px] mb-4">
                        <img src={group4} alt="Sara Hardin" className="w-full h-full object-cover rounded-full" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#8a5cf642] to-[#5239FA] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300">
                          <div className="flex gap-2 text-white text-[15px] pt-18 pl-5">
                            <MdOutlineFacebook />
                            <AiFillInstagram />
                            <FaLinkedin />
                          </div>
                        </div>
                      </div>
                      <span className="text-[18px] font-semibold text-[#282938] pt-3">Sara Hardin</span>
                      <h5 className="text-[14px] text-gray-500 pt-3">Project Manager</h5>
                    </div>
                  </div>
                </div>
              </Container>
            </section>

          </Container>
        </section>
        {/* six part end */}
      </>
    </div>
  )
}
