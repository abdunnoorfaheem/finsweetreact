import React from "react";
import Container from "../Container";
import { FaPlus } from "react-icons/fa";
import { CiPlay1 } from "react-icons/ci";

const Pricing = () => {
  return (
    <>
      {/* Pricing Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 font-poppins">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Pricing Plans
            </h2>
            <p className="text-primary mt-3">
              When you're ready to go beyond prototyping in Figma, Webflow is{" "}
              <br />
              ready to help you bring your designs to life — without coding
              them.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-2 items-center">
                  <h3 className="text-2xl font-bold text-primary">$299</h3>
                  <span className="text-tertiary text-sm font-semibold">
                    Per Design
                  </span>
                </div>
                <h4 className="mt-4 text-lg font-semibold">Landing Page</h4>
                <p className="text-quaternary mt-2 text-sm">
                  When you’re ready to go beyond prototyping in Figma.
                </p>

                <ul className="mt-6 space-y-2 text-left text-sm">
                  <li className="flex gap-1 items-center">
                    <CiPlay1 className="text-[#97DAAD]" /> All limited links
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <CiPlay1 className="text-[#97DAAD]" /> Own analytics
                    platform
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <CiPlay1 className="text-[#97DAAD]" /> Chat support
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <CiPlay1 className="text-[#97DAAD]" /> Optimize hashtags
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <CiPlay1 className="text-[#97DAAD]" /> Unlimited users
                  </li>
                </ul>
              </div>
              <button className="mt-8 bg-primary text-white font-medium py-2 rounded-full hover:bg-gray-950 cursor-pointer transition font-manrope">
                Get started
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-quaternary text-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-2 items-center">
                  <h3 className="text-2xl font-bold text-white">$399</h3>
                  <span className="text-quinary text-sm font-medium">
                    Multi Design
                  </span>
                </div>
                <h4 className="mt-4 text-lg font-semibold">Website Page</h4>
                <p className="text-indigo-200 mt-2 text-sm">
                  When you’re ready to go beyond prototyping in Figma, Webflow’s
                  ready to help.
                </p>

                <ul className="mt-6 space-y-2 text-left text-sm">
                  <li className="flex gap-1 items-center">
                    <CiPlay1 className="text-[#97DAAD]" /> All limited links
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <CiPlay1 className="text-[#97DAAD]" /> Own analytics
                    platform
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <CiPlay1 className="text-[#97DAAD]" /> Chat support
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <CiPlay1 className="text-[#97DAAD]" /> Optimize hashtags
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <CiPlay1 className="text-[#97DAAD]" /> Unlimited users
                  </li>
                </ul>
              </div>
              <button className="mt-8 bg-quinary text-gray-900 font-semibold py-2 rounded-full hover:bg-yellow-300 transition cursor-pointer font-manrope">
                Get started
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition p-8 flex flex-col justify-between">
              <div>
                <div className="flex gap-2 items-center">
                  <h3 className="text-2xl font-bold text-primary">$499 +</h3>
                  <span className="text-tertiary text-sm font-semibold">
                    Per Design
                  </span>
                </div>
                <h4 className="mt-4 text-lg font-semibold">Complex Project</h4>
                <p className="text-gray-500 mt-2 text-sm">
                  When you’re ready to go beyond prototyping in Figma.
                </p>

                <ul className="mt-6 space-y-2 text-left text-sm">
                  <li className="flex gap-1 items-center">
                    <CiPlay1 className="text-[#97DAAD]" /> All limited links
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <CiPlay1 className="text-[#97DAAD]" /> Own analytics
                    platform
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <CiPlay1 className="text-[#97DAAD]" /> Chat support
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <CiPlay1 className="text-[#97DAAD]" /> Optimize hashtags
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <CiPlay1 className="text-[#97DAAD]" /> Unlimited users
                  </li>
                  <li className="flex gap-1 items-center">
                    {" "}
                    <CiPlay1 className="text-[#97DAAD]" /> Assist and Help
                  </li>
                </ul>
              </div>
              <button className="mt-8 bg-primary text-white font-medium py-2 rounded-full hover:bg-gray-950 cursor-pointer transition font-manrope">
                Get started
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 md:px-12 lg:px-20 font-poppins">
        <Container>
          <div className="md:flex gap-6">
            <div className="w-4/12 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Frequently <br /> asked questions
              </h3>
              <a href="#" className="text-tertiary text-sm font-semibold">
                Contact Us For More Info
              </a>
            </div>

            <div className="divide-y divide-[#C2BBFF] w-8/12 mt-3 md:mt-0">
              {/* FAQ Item */}
              <details
                open
                className="group py-4 cursor-pointer transition hover:bg-gray-100 px-4 rounded-lg"
              >
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  <div className="flex items-center gap-2">
                    <span className="text-tertiary font-bold">01</span>
                    <span>How much time does it take?</span>
                  </div>
                  <span className="text-gray-500 group-open:rotate-45 transition">
                    <FaPlus />
                  </span>
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </details>

              <details className="group py-4 cursor-pointer transition hover:bg-gray-100 px-4 rounded-lg">
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  <div className="flex items-center gap-2">
                    <span className="text-tertiary font-bold">02</span>
                    <span>What is your class naming convention?</span>
                  </div>
                  <span className="text-gray-500 group-open:rotate-45 transition">
                    <FaPlus />
                  </span>
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </details>

              <details className="group py-4 cursor-pointer transition hover:bg-gray-100 px-4 rounded-lg">
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  <div className="flex items-center gap-2">
                    <span className="text-tertiary font-bold">03</span>
                    <span>What is your class naming convention?</span>
                  </div>
                  <span className="text-gray-500 group-open:rotate-45 transition">
                    <FaPlus />
                  </span>
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </details>

              <details className="group py-4 cursor-pointer transition hover:bg-gray-100 px-4 rounded-lg">
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  <div className="flex items-center gap-2">
                    <span className="text-tertiary font-bold">04</span>
                    <span>What is your class naming convention?</span>
                  </div>
                  <span className="text-gray-500 group-open:rotate-45 transition">
                    <FaPlus />
                  </span>
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </details>

              <details className="group py-4 cursor-pointer transition hover:bg-gray-100 px-4 rounded-lg">
                <summary className="flex items-center justify-between font-semibold text-gray-900">
                  <div className="flex items-center gap-2">
                    <span className="text-tertiary font-bold">05</span>
                    <span>What is your class naming convention?</span>
                  </div>
                  <span className="text-gray-500 group-open:rotate-45 transition">
                    <FaPlus />
                  </span>
                </summary>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </details>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Pricing;
