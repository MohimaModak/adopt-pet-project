import React from "react";
import "./whymade.css";

const WhyMade = () => {
  return (
    <div>
      <div className="whyfont bg-teal-50 text-blue-950">
        <h1 className="text-3xl text-center p-10"> why this website was made</h1>
        <div className="md:flex justify-center items-center md:gap-10 p-16">
          <div className="mb-5">
            <h1>
              There are not enough homes for all the animals that are born every
              year. Adopting from a shelter helps weaken the pet overpopulation
              cycle. Each year 8 to 12 million dogs, cats, puppies and kittens
              are euthanized because there are simply not enough homes for them.
            </h1>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyMade;
