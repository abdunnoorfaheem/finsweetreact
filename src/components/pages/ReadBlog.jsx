import React from 'react'
import Container from '../Container';
import Readd from "../../assets/read.png"
import Readd1 from "../../assets/read1.jpg"
const ReadBlog = () => {

  return (
    <>
      <Container>
        <div className="lg:pt-32 lg:pb-24 pt-13 pb-10">
          <div className="lg:w-8/12 mx-auto w-10/12">
            <div className="text-center  lg:pb-12 pb-4">
              <h2 className='lg:text-[48px] text-[20px] font-semibold font-poppins text-primary lg:pb-4 pb-2'>A UX Case Study on Creating a Studious Environment for Students</h2>
              <p className='lg:text-[16px] text-[12px] font-medium font-poppins text-primary'>Andrew Jonson Posted on 27th January 2021</p>
            </div>
          </div>
          <div className="w-1/1">
            <div className="lg:pb-20 pb-7">
              <img className='w-full' src={Readd} alt="" />
            </div>
          </div>
          <div className="w-8/12 mx-auto">
            <div className="">
              <h2 className='lg:text-[38px] text-[18px] font-semibold font-poppins text-primary lg:pb-8 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <p className='lg:text-[16px] text-[12px] font-normal font-poppins text-primary lg:pb-10 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <h3 className='lg:text-[38px] text-[18px] font-semibold font-poppins text-primary lg:pb-8 pb-3'>Ut enim ad minim veniam, quis nostrud.
              </h3>
              <p className='lg:text-[16px] text-[12px] font-normal font-poppins text-primary lg:pb-6 pb-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <ul className='lg:pb-3 pb-1.5'>
                <li className='list-disc lg:text-[16px] text-[12px] lg:pb-3 pb-1.5 lg:ml-4 ml-3 font-normal font-poppins text-primary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                <li className='list-disc lg:text-[16px] text-[12px] lg:pb-3 pb-1.5 lg:ml-4 ml-3 font-normal font-poppins text-primary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                <li className='list-disc lg:text-[16px] text-[12px] lg:pb-3 pb-1.5 lg:ml-4 ml-3 font-normal font-poppins text-primary '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
              </ul>
              <p className='lg:text-[16px] text-[12px] font-normal font-poppins text-primary lg:pb-8 pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <img className='w-full lg:pb-9 pb-3' src={Readd1} alt="" />
              <h3 className='lg:text-[38px] text-[18px] font-semibold font-poppins text-primary lg:pb-8 pb-3'>Ut enim ad minim veniam, quis nostrud.
              </h3>
              <p className='lg:text-[16px] text-[12px] font-normal font-poppins text-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
export default ReadBlog