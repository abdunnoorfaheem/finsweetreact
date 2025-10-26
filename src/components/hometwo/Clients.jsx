import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import jenny from '../../assets/jenny.png';
import Container from '../Container';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='w-[40px] h-[40px] bg-green-400 flex justify-center items-center rounded-full shadow-lg hover:bg-blue-500 duration-400 absolute bottom-0 right-0 z-10'
      onClick={onClick}
    >
      <MdArrowForwardIos />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='w-[40px] h-[40px] bg-green-400 flex justify-center items-center rounded-full shadow-lg hover:bg-blue-500 duration-400 absolute bottom-0 right-[60px] z-10' 
      onClick={onClick}
    >
      <MdArrowBackIos />
    </div>
  );
}

const Clients = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className='bg-[#F4F6FC]'>
      <Container>
        <div className="lg:py-[120px] py-[35px]">
          <div className="lg:flex">
            <div className="lg:w-2/6 w-full">
              <div>
                <h2 className='text-[#282938] lg:text-[38px] font-semibold font-pops lg:w-[327px]'>
                  What our clients say about us
                </h2>
                <p className='text-[#282938] text-[16px] font-normal font-pops lg:pt-[16px] w-[327px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
                </p>
              </div>
            </div>
            <div className="lg:w-4/6 w-full relative">
              <Slider {...settings}>
                <div className="lg:mt-0 mt-6">
                  <h2 className='text-[#282938] lg:text-[32px] font-medium font-pops lg:w-[800px]'>
                    "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
                  </h2>
                  <div className="flex items-center lg:mt-[40px] mt-5">
                    <img src={jenny} alt="client" />
                    <div className="lg:ml-[14px] ml-3">
                      <p className='text-[#282938] text-[18px] font-medium font-pops'>Jenny Wilson</p>
                      <p className='text-[#282938] text-[12px] font-medium font-pops'>Vice President</p>
                    </div>
                  </div>
                </div>
                <div className="lg:mt-0 mt-6">
                  <h2 className='text-[#282938] lg:text-[32px] font-medium font-pops lg:w-[800px]'>
                    "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."
                  </h2>
                  <div className="flex items-center lg:mt-[40px] mt-5">
                    <img src={jenny} alt="client" />
                    <div className="lg:ml-[14px] ml-3">
                      <p className='text-[#282938] text-[18px] font-medium font-pops'>Jenny Wilson</p>
                      <p className='text-[#282938] text-[12px] font-medium font-pops'>Vice President</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Clients;
