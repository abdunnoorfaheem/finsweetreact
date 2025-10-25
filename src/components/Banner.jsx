import bannerImg from '../assets/finBanner.png'
import Container from "../components/Container"

const Banner = () => {
    return (
        <>
            <section className="lg:py-[100px] py-[30px] bg-quaternary">
                <Container>
                    <div className="lg:flex items-center">
                        <div className="lg:w-1/2">
                            <div className="">
                                <h2 className="lg:text-[54px] text-[30px] text-white font-poppins font-bold">Building stellar websites for early startups</h2>
                                <p className="text-white lg:text-[16px] text-[14px] font-poppins opacity-70 pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                <div className="lg:mt-9 mt-6">
                                    <a className="lg:py-4 py-[13px] lg:px-[50px] px-[30px] bg-quinary cursor-pointer hover:bg-amber-100 rounded-[41px] text-primary font-semibold lg:text-[18px] text-[14px] font-manrope ">View our work</a>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 sm:block hidden lg:mt-0 mt-6">
                            <div className="ml-5 content-center">
                                <img src={bannerImg} alt="bannerImg" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Banner