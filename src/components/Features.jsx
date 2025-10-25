import Container from "./Container"
import iOne from '../assets/iOne.png'
import iTwo from '../assets/iTwo.png'
import iThree from '../assets/iThree.png'
import iFour from '../assets/iFour.png'
import iFive from '../assets/iFive.png'
import iSix from '../assets/iSix.png'


const Features = () => {
    return (
        <>
            <section className="lg:py-[100px] py-[30px] bg-[#F4F6FC]">
                <Container>
                    <div className="w-full">
                        <p className="text-primary text-[16px] font-medium font-poppins text-center">Features</p>
                        <h2 className="text-primary lg:text-[48px] text-[30px] font-poppins font-semibold mx-auto text-center lg:w-[630px] pt-3">Design that solves problems, one product at a time</h2>
                    </div>
                    <div className="w-full flex flex-wrap lg:mt-10 mt-5 gap-6">
                        <div className="lg:w-[32%] md:w-[43%] w-full">
                          <div className="bg-white lg:pt-[53px] pt-7 lg:pb-12 pb-6 lg:pl-10 pl-5 lg:pr-5 pr-2">
                            <img src={iOne} alt="iOne" />
                            <h3 className="text-primary text-[24px] font-medium font-poppins pt-3">Uses Client First</h3>
                            <p className="text-primary text-[16px] font-normal font-poppins pt-3 opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                          </div>
                        </div>
                        <div className="lg:w-[32%] md:w-[43%] w-full">
                          <div className="bg-white lg:pt-[53px] pt-7 lg:pb-12 pb-6 lg:pl-10 pl-5 lg:pr-5 pr-2">
                            <img src={iTwo} alt="iTwo" />
                            <h3 className="text-primary text-[24px] font-medium font-poppins pt-3">Two Free Revision Round</h3>
                            <p className="text-primary text-[16px] font-normal font-poppins pt-3 opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                          </div>
                        </div>
                        <div className="lg:w-[32%] md:w-[43%] w-full">
                          <div className="bg-white lg:pt-[53px] pt-7 lg:pb-12 pb-6 lg:pl-10 pl-5 lg:pr-5 pr-2">
                            <img src={iThree} alt="iThree" />
                            <h3 className="text-primary text-[24px] font-medium font-poppins pt-3">Template Customization</h3>
                            <p className="text-primary text-[16px] font-normal font-poppins pt-3 opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                          </div>
                        </div>
                        <div className="lg:w-[32%] md:w-[43%] w-full">
                          <div className="bg-white lg:pt-[53px] pt-7 lg:pb-12 pb-6 lg:pl-10 pl-5 lg:pr-5 pr-2">
                            <img src={iFour} alt="iFour" />
                            <h3 className="text-primary text-[24px] font-medium font-poppins pt-3">24/7 Support</h3>
                            <p className="text-primary text-[16px] font-normal font-poppins pt-3 opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                          </div>
                        </div>
                        <div className="lg:w-[32%] md:w-[43%] w-full">
                          <div className="bg-white lg:pt-[53px] pt-7 lg:pb-12 pb-6 lg:pl-10 pl-5 lg:pr-5 pr-2">
                            <img src={iFive} alt="iFive" />
                            <h3 className="text-primary text-[24px] font-medium font-poppins pt-3">Quick Delivery</h3>
                            <p className="text-primary text-[16px] font-normal font-poppins pt-3 opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                          </div>
                        </div>
                        <div className="lg:w-[32%] md:w-[43%] w-full">
                          <div className="bg-white lg:pt-[53px] pt-7 lg:pb-12 pb-6 lg:pl-10 pl-5 lg:pr-5 pr-2">
                            <img src={iSix} alt="iSix" />
                            <h3 className="text-primary text-[24px] font-medium font-poppins pt-3">Hands-on approach</h3>
                            <p className="text-primary text-[16px] font-normal font-poppins pt-3 opacity-70">Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. </p>
                          </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Features