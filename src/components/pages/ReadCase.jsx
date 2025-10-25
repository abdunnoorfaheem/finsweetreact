import React from "react";
import Container from "../Container";
import ReadCaseImg1 from "/src/assets/ReadCaseImg1.png";
import ReadCaseImg2 from "/src/assets/ReadCaseImg2.png";
import Button from "../Button";

const ReadCase = () => {
  return (
    <div>
      <Container>
        <div className=" flex flex-col items-center">
          {/* Case Studies Section Start */}
          <div className="font-poppins mt-32">
            <p className="font-medium text-2xl leading-9 text-primary">
              Web design and development
            </p>
            <h1 className="font-semibold text-[48px] leading-16 text-primary py-4">
              Finsweet Design case <br /> studies
            </h1>
            <p className="font-medium text-primary leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut <br /> aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse.
            </p>
            <img src={ReadCaseImg1} alt="" className="mt-12"/>
            <div className="flex justify-between text-primary mt-12 border-b border-gray-400 pb-8">
              <div className="font-medium">
                <p className="leading-7">Client</p>
                <h4 className="text-2xl leading-9 mt-1">facebook.com</h4>
              </div>
              <div className="font-medium">
                <p className="leading-7">Service</p>
                <h4 className="text-2xl leading-9 mt-1">Product Design</h4>
              </div>
              <div className="font-medium">
                <p className="leading-7">Deliverable</p>
                <h4 className="text-2xl leading-9 mt-1">UI Screens, UX Flow & Prototype</h4>
              </div>
            </div>
          </div>
          {/* Case Studies Section End */}

          {/* About Project Section Start */}
            <div className="font-poppins text-primary mt-24">
              <h2 className="font-semibold text-[38px] leading-14">About the project</h2>
              <p className="leading-7 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <br /> ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br /> mollit anim id est laborum.
              </p>
              <ul className="list-disc flex flex-col gap-4 leading-7 mt-6 pb-16 pl-3">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
              </ul>
              <img src={ReadCaseImg2} alt="" className="w-[842px]"/>
              <h2 className="font-semibold text-[38px] leading-14 mt-16">How we do it</h2>
              <p className="leading-7 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip <br /> ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu <br /> fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br /> mollit anim id est laborum.
              </p>
              <ul className="list-disc flex flex-col gap-4 leading-7 mt-6 pb-16 pl-3">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</li>
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li>
              </ul>
              <div>
                <ul className="flex justify-between text-primary font-medium text-lg leading-8 py-6 border-t border-b border-gray-400">
                  <li className="font-medium text-2xl leading-9 text-tertiary">Keywords</li>
                  <li>Design </li>
                  <li>UI/UX </li>
                  <li>Wireframing</li>
                  <li>Branding</li>
                  <li>Development</li>
                  <li>webflow</li>
                </ul>
              </div>
            </div> 
            {/* About Project Section End */}

            {/* Let's Build Section Start */}
            <div className="mt-32 flex flex-col items-center text-center mb-32">
              <h1 className="font-semibold text-5xl leading-16">
                Let's build something great <br /> together
              </h1>
              <p className="text-primary font-medium leading-7 mt-5">
                Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec <br /> dolor sit amet, scelerisque cursus purus.
              </p>
              <Button text="Contact Us" className="font-manrope text-lg leading-8 py-4 px-16.5 bg-quinary font-semibold mt-10 cursor-pointer"/>
            </div>
            {/* Let's Build Section Start */}
        </div>
      </Container>
    </div>
  );
};

export default ReadCase;
