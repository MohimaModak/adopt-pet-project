import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import "./DonationDetails.css";
import axios from "axios";
import { useState } from "react";

const DonationDetails = () => {
  const donationDetails = useLoaderData();
  console.log(donationDetails);
  const [showmodal, setShowmodal] = useState(false);

  const handleBorrow = () => {
    setShowmodal(true);
  };
  const handleDashboardDonation = () => {
    axios
      .post("https://final-project-server-eight.vercel.app/dashboardDonation", {
        name: donationDetails.name,
        date: donationDetails.date,
        photo: donationDetails.photo,
        location: donationDetails.location,
        donation: donationDetails.donation,
        number: donationDetails.number,
        number: donationDetails.card,
        id: donationDetails._id,
      })
      .then((data) => {
        console.log(data.data);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center donationfont">
        <img src={donationDetails.photo} alt={donationDetails.photo} />
      </div>
      <div className="donationfont">
        <span className="text-lg">Name:</span> {donationDetails.name}
      </div>
      <div className="donationfont">
        <span className="text-lg">Date:</span> {donationDetails.date}
      </div>
      <div className="donationfont ">
        <span className="text-lg">Donation:</span> {donationDetails.donation}
      </div>
      <div className="donationfont">
        <span className="text-lg">Location:</span> {donationDetails.location}
      </div>
      <div className="flex justify-center items-center">
        <div className="donationfont md:w-2/6">
          <span className="text-lg">Description</span>{" "}
          {donationDetails.description}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="donationfont md:w-2/6">
          <span className="text-lg">Long Description:</span>{" "}
          {donationDetails.longdescription}
        </div>
        {/* <div onClick={handleDashboardDonation}>
          <button className="border p-3">Donate Now</button>
        </div> */}
        <div className="flex justify-center gap-5 m-3">
          <div onClick={handleBorrow} className="px-2 font-bold">
            <button
              className="btn bg-white font-bold text-base border rounded-md px-2 py-2 w-full"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Donate Now
              {/* <span className="text-teal-500">{donationDetails.name}</span> */}
            </button>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                {showmodal && (
                  <form onSubmit={handleDashboardDonation}>
                    <div>
                      <label>Donation: </label>
                      <input
                        type="number"
                        id="number"
                        name="number"
                        defaultValue={donationDetails.donation}
                      />
                    </div>
                    <div>
                      <label>Card Number: </label>
                      <input type="card" id="card" name="card" />
                    </div>
                    <div>
                      <label>Pet-Name: </label>
                      <input
                        type="name"
                        id="name"
                        name="name"
                        value={donationDetails.name}
                      />
                    </div>

                    <button onClick={() => setShowmodal(false)}>Close</button>
                  </form>
                )}
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationDetails;
