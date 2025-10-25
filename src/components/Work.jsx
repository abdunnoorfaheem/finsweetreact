import pointerImg from '../assets/pointerOne.png'
import pointerTwo from '../assets/pointerTwo.png'
import pointerThree from '../assets/pointerThree.png'
import pointerFour from '../assets/pointerFour.png'
import { FaArrowRightLong } from "react-icons/fa6";
import Container from "../components/Container"

const Work = () => {
    return (
        <>
            <section className="lg:py-[100px] py-[30px] bg-[#F4F6FC]">
                <Container>
                    <div className="lg:flex">
                        <div className="lg:w-2/5 w-full">
                            <div className="">
                                <h2 className="lg:text-[48px] text-[26px] text-primary font-semibold font-poppins">How we work</h2>
                                <p className="lg:text-[18px] text-[15px] text-primary font-normal font-poppins opacity-70 lg:mt-5 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                                <div className="flex items-center lg:mt-5 mt-2">
                                    <a className="cursor-pointer text-[18px] font-poppins font-medium text-tertiary">Get in touch with us</a>
                                    <FaArrowRightLong className="text-tertiary ml-3" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-3/5 w-full lg:mt-0 mt-5">
                            <div className="w-full flex items-center">
                                <div className="w-2/4">
                                    <div className="">
                                        <img src={pointerImg} alt="pointerOne" />
                                        <h3 className="lg:text-[42px] text-[25px] font-medium font-poppins text-primary pt-3">Strategy</h3>
                                        <p className="lg:text-[16px] text-[14px] font-normal font-poppins text-primary opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                    </div>
                                    <div className="lg:mt-8 mt-3">
                                        <img src={pointerTwo} alt="pointerOne" />
                                        <h3 className="lg:text-[42px] text-[25px] font-medium font-poppins text-primary pt-3">Design</h3>
                                        <p className="lg:text-[16px] text-[14px] font-normal font-poppins text-primary opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                    </div>
                                </div>
                                <div className="w-2/4">
                                    <div className="">
                                        <img src={pointerThree} alt="pointerOne" />
                                        <h3 className="lg:text-[42px] text-[25px] font-medium font-poppins text-primary pt-3">Wireframing</h3>
                                        <p className="lg:text-[16px] text-[14px] font-normal font-poppins text-primary opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                                    </div>
                                    <div className="lg:mt-8 mt-3">
                                        <img src={pointerFour} alt="pointerOne" />
                                        <h3 className="lg:text-[42px] text-[25px] font-medium font-poppins text-primary pt-3">Development</h3>
                                        <p className="lg:text-[16px] text-[14px] font-normal font-poppins text-primary opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
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

export default Work