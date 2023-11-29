import React, { useEffect, useState } from "react";
import { HiMiniPlayPause } from "react-icons/hi2";
import { MdOutlinePause } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";

const DonationCampaign = () => {
  const [myDonationCampaign, setMyDonationCampaign] = useState([]);

  const [pausedDonation, setpausedDonation] = useState("");

  useEffect(() => {
    fetch("https://final-project-server-eight.vercel.app/mydonationcampaigns")
      .then((res) => res.json())
      .then((data) => {
        const specificPause = {};
        data.forEach((adopt) => {
          specificPause[adopt._id] = false;
        });
        setpausedDonation(specificPause);
        setMyDonationCampaign(data);
      });
  }, []);

  const handlePausedDonation = (id) => {
    setpausedDonation((prevPause) => ({
      ...prevPause,
      [id]: !prevPause[id],
    }));
  };

  return (
    <div className="ml-16 rqstfont">
      <table>
        <thead>
          <tr className="border  border-gray-200 p-2 shadow-md">
            <th className="border border-gray-200 p-2">Photo</th>
            <th className="border border-gray-200 p-2">Pet-Name</th>
            <th className="border border-gray-200 p-2">
              Maximum Donation Amount
            </th>
            <th className="border border-gray-200 p-2">
              Donation Progress Bar
            </th>
            <th className="border border-gray-200 p-2">Pause Donation</th>
            <th className="border border-gray-200 p-2">Edit Donation</th>
          </tr>
        </thead>
        <tbody>
          {myDonationCampaign.map((adopt) => (
            <tr key={adopt._id} className="border border-gray-300 shadow-xl">
              <td className="border  border-gray-200 p-2">
                <img
                  src={adopt.imageUrl}
                  alt={adopt.name}
                  className="rounded-full lg:w-20 lg:h-20"
                />
              </td>
              <td className="border border-gray-200 p-2">{adopt.petName}</td>
              <td className="border border-gray-200 p-2">{adopt.maxAmount}$</td>
              <td className="border border-gray-200 p-2">
                <progress
                  className="progress w-56"
                  value={adopt.currentAmount}
                  max={adopt.maxAmount}
                ></progress>
              </td>
              <div
                onClick={() => handlePausedDonation(adopt._id)}
                className="flex justify-center items-end inset-0"
              >
                <td className="border border-gray-200 p-2">
                  {pausedDonation[adopt._id] ? (
                    <MdOutlinePause />
                  ) : (
                    <HiMiniPlayPause />
                  )}
                </td>
              </div>
              <div>
                <Link to={`/dashboard/edit/${adopt._id}`}>
                  <td className="border border-gray-200 p-2 ">Edit</td>
                </Link>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonationCampaign;
