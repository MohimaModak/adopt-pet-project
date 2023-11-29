import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PetDonation = () => {
  const [donation, setdonation] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2000/creatcampaing")
      .then((res) => res.json())
      .then((data) => setdonation(data));
  }, []);

  return (
    <div className="flex justify-center items-center listingfont bg-yellow-50 p-16">
      <div className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {donation.map((donate) => (
          <div key={donate._id} className="shadow-2xl rounded-md">
            <img
              src={donate.photo}
              className="rounded-t-md w-full md:h-[250px]"
            />
            <div className="p-5">
                <h1 className="text-lg text-orange-400">Max-donation: 5000</h1>
              <h1>
                <span className="text-lg text-orange-400">Donation:</span>{" "}
                {donate.donation}
              </h1>
              <h1>
                <span className="text-lg text-orange-400">Location:</span>{" "}
                {donate.location}
              </h1>
              <h1>
                <span className="text-lg text-orange-400 mb-5">Last Date:</span>{" "}
                {donate.date}
              </h1>
              <h1>
                <span className="text-lg text-orange-400">Description:</span>{" "}
                {donate.description}
              </h1>
              <h1>
                <span className="text-lg text-orange-400">
                  Long Description:
                </span>{" "}
                {donate.longdescription}
              </h1>

              <Link to={`/donationdetails/${donate._id}`}>
                <button className="border rounded-md px-2 text-teal-400 py-1 m-2">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetDonation;
