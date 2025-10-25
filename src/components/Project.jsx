import Container from "../components/Container"
import { FaArrowRightLong } from "react-icons/fa6";
import cardOne from '../assets/cardOne.png'
import cardTwo from '../assets/cardTwo.png'
import cardThree from '../assets/cardThree.png'

const Project = () => {
    return (
        <>
            <section className="lg:py-[100px] py-[30px]">
                <Container>
                    <div className="flex items-center justify-between">
                        <h2 className="text-primary lg:text-[48px] text-[26px] font-semibold font-poppins">View our projects</h2>
                        <div className="flex items-center">
                            <a className="font-poppins font-medium text-[16px] text-primary cursor-pointer">View More</a>
                            <FaArrowRightLong className="ml-2" />
                        </div>
                    </div>
                    <div className="w-full lg:mt-10 mt-5">
                        <div className="md:flex items-center">
                            <div className="lg:w-3/5 w-full relative">
                                <div className="">
                                    <img src={cardOne} alt="cardOne" className="w-full" />
                                </div>
                                <div className="absolute top-0 left-0 bg-[#07071f6b] w-[50%] hover:w-full h-full duration-250">
                                    <div className="lg:mt-[100px] lg:pl-[50px]">
                                        <h2 className="text-[24px] font-semibold font-poppins text-white">Workhub office Webflow Webflow Design</h2>
                                        <div className="flex items-center lg:mt-[60px] mt-7 cursor-pointer">
                                            <a className="text-quinary font-medium font-poppins text-[16px]">View project</a>
                                            <FaArrowRightLong className="ml-2 text-quinary" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-2/5 w-full flex md:justify-end">
                                <div className="">
                                    <div className="relative mt-5 lg:mt-0">
                                        <img src={cardTwo} alt="cardTwo" className="" />
                                        <div className="absolute top-0 left-0 bg-[#07071f6b] w-[50%] hover:w-full h-full duration-250">
                                            <div className="flex items-center lg:mt-[60px] mt-7 cursor-pointer pl-3">
                                                <a className="text-quinary font-medium font-poppins text-[16px]">View project</a>
                                                <FaArrowRightLong className="ml-2 text-quinary" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 lg:mt-0">
                                        <img src={cardThree} alt="cardThree" className="w-[95%] lg:pt-8" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Project