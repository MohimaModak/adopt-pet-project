import React from "react";
import "./HomeWork.css";
import {
  FaBeer,
  FaDonate,
  FaList,
  FaPaw,
  FaServicestack,
  FaTrain,
} from "react-icons/fa";
import { SiRescuetime } from "react-icons/si";

const HowWork = () => {
  return (
    <div className="workfont">
      <div className="h-[450px]">
        <div className="relative">
          <img src="https://images.unsplash.com/photo-1560743173-567a3b5658b1?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div className="flex justify-center items-center inset-0 absolute z-50 bottom-64 text-blue-950">
          <div>
            <div>
              <h1 className="md:text-3xl md:m-5">how to website work</h1>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 md:gap-16">
              <div className="flex justify-center items-center gap-2">
                <h1>
                  {" "}
                  <FaList></FaList>
                </h1>
                <h1>Pet Listing</h1>
              </div>
              <div className="flex justify-center items-center gap-2">
                <h1>
                  {" "}
                  <SiRescuetime />
                </h1>
                <h1>Pet Rescue</h1>
              </div>

              <div className="flex justify-center items-center gap-2">
                <h1>
                  <FaPaw></FaPaw>{" "}
                </h1>
                <h1>Pet Adoption</h1>
              </div>

              <div className="flex justify-center items-center gap-2">
                <h1>
                  <FaDonate></FaDonate>{" "}
                </h1>
                <h1>Pet Donation</h1>
              </div>

              <div className="flex justify-center items-center gap-2">
                <h1>
                  <FaTrain></FaTrain>{" "}
                </h1>
                <h1>Pet Training</h1>
              </div>

              <div className="flex justify-center items-center gap-2">
                <h1>
                  <FaServicestack></FaServicestack>{" "}
                </h1>
                <h1>Pet Service</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWork;
