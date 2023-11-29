import React from "react";
import "./MoreSection.css";

const MoreSectionOne = () => {
  return (
    <div className="flex justify-center items-center mt-8">
      <div className="grid md:grid-cols-2 md:gap-20 lg:grid-cols-4 lg:gap-28 onesectionfont">
        <div>
          <img
            src="https://demo.bravisthemes.com/patte/wp-content/uploads/2023/07/service.png"
            className="p-2"
          />
          <div className="text-4xl">
            <h1 className="">
              <span className="text-teal-500">100</span>
              <span className="text-red-400 text-5xl font-bold">+</span>
            </h1>
            <h1 className="font-bold text-orange-300">Client Served</h1>
          </div>
        </div>
        <div>
          <img
            src="https://demo.bravisthemes.com/patte/wp-content/uploads/2023/07/animal-care.png"
            className="p-2"
          />
          <div className="text-3xl">
            <h1>
              <span className="text-teal-500">99</span>
              <span className="text-red-400 text-5xl font-bold">+</span>
            </h1>
            <h1 className="font-bold text-orange-300">Pets Protection</h1>
          </div>
        </div>
        <div>
          <img
            src="https://demo.bravisthemes.com/patte/wp-content/uploads/2023/07/dog.png"
            className="p-2"
          />
          <div className="text-3xl">
            <h1>
              <span className="text-teal-500">900</span>
              <span className="text-red-400 text-5xl font-bold">+</span>
            </h1>
            <h1 className="font-bold text-orange-300">Miles Walked</h1>
          </div>
        </div>
        <div>
          <img
            src="https://demo.bravisthemes.com/patte/wp-content/uploads/2023/07/dog-food.png"
            className="p-2"
          />
          <div className="text-3xl">
            <h1>
              <span className="text-teal-500">400</span>
              <span className="text-red-400 text-5xl font-bold">+</span>
            </h1>
            <h1 className="font-bold text-orange-300">Served animals</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreSectionOne;
