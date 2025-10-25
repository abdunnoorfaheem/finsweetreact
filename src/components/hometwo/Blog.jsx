import React from 'react'

import { FaArrowRightLong } from 'react-icons/fa6'
import blogone from '../../assets/blogone.png'
import blogtwo from '../../assets/blogtwo.png'
import blogthree from '../../assets/blogthree.png'
import Container from '../Container'



const Blog = () => {
    return (
        <section>
            <Container>
                <div className="">
                    <div className="lg:py-[80px] py-3">

                        <div className="">
                            <h2 className="text-[#282938] lg:text-[48px] text-[28px] font-semibold font-pops lg-static ">Our blog</h2>
                        </div>
                        <div className="lg:flex lg:mt-[60px] mt-[30px] lg:gap-x-8">
                            <div className="lg:w-1/3 w-full">
                                <div className="lg:mt-0 ">
                                    <img src={blogone} alt="blog1" />
                                    <p className='text-[#282938] text-[16px] font-medium font-pops lg:pt-10 pt-3 opacity-[70%]'>19 Jan 2022</p>
                                    <h3 className='text-[#282938] lg:text-[24px] text-[18px] font-medium font-pops lg:pt-4 lg:w-[405px]'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                                    <p className='text-[#282938] lg:text-[16px] text-[13px] font-medium font-pops lg:pt-4 pt-3 opacity-[70%]'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                    <div className="flex items-center lg:pt-8 pt-3">
                                        <a href="#" className='text-[#282938] text-[16px] font-medium font-pops'>Read More</a>
                                        <FaArrowRightLong className=' text-[16px] ml-3' />
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <div className="lg:mt-0 mt-7">
                                    <img src={blogtwo} alt="blog1" />
                                    <p className='text-[#282938] text-[16px] font-medium font-pops lg:pt-10 pt-3 opacity-[70%]'>19 Jan 2022</p>
                                    <h3 className='text-[#282938] lg:text-[24px] text-[18px] font-medium font-pops lg:pt-4 lg:w-[405px]'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                                    <p className='text-[#282938] lg:text-[16px] text-[13px] font-medium font-pops lg:pt-4 pt-3 opacity-[70%]'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                    <div className="flex items-center lg:pt-8 pt-3">
                                        <a href="#" className='text-[#282938] text-[16px] font-medium font-pops'>Read More</a>
                                        <FaArrowRightLong className=' text-[16px] ml-3' />
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 w-full">
                                <div className="lg:mt-0 mt-7">
                                    <img src={blogthree} alt="blog1" />
                                    <p className='text-[#282938] text-[16px] font-medium font-pops lg:pt-10 pt-3 opacity-[70%]'>19 Jan 2022</p>
                                    <h3 className='text-[#282938] lg:text-[24px] text-[18px] font-medium font-pops lg:pt-4 lg:w-[405px]'>How one Webflow user grew his single person consultancy from $0-100K in 14 months</h3>
                                    <p className='text-[#282938] lg:text-[16px] text-[13px] font-medium font-pops lg:pt-4 pt-3 opacity-[70%]'>See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract</p>
                                    <div className="flex items-center lg:pt-8 pt-3">
                                        <a href="#" className='text-[#282938] text-[16px] font-medium font-pops'>Read More</a>
                                        <FaArrowRightLong className=' text-[16px] ml-3' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </section>
    )
}

export default Blog