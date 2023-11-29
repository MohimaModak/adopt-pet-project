import React, { useEffect, useState } from "react";
import "./AdoptionRequest.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import Swal from "sweetalert2";
import { FcAcceptDatabase } from "react-icons/fc";
import { FaQuestion } from "react-icons/fa";

const AdoptionRequest = () => {
  const [adoptRequest, setadoptRequest] = useState([]);
  const [pausedDonation, setpausedDonation] = useState("");

  useEffect(() => {
    fetch("https://final-project-server-eight.vercel.app/adoptPet")
      .then((res) => res.json())
      .then((data) => {
        const specificPause = {};
        data.forEach((adopt) => {
          specificPause[adopt._id] = false;
        });
        setpausedDonation(specificPause);
        setadoptRequest(data);
      });
  }, []);

  const handlePausedDonation = (id) => {
    setpausedDonation((prevPause) => ({
      ...prevPause,
      [id]: !prevPause[id],
    }));
  };

  const handleDelete = (name) => {
    console.log("name", name);
    Swal.fire({
      title: "Are you sure to remove your real friend?",
      confirmButtonText: "Yes, I want",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://final-project-server-eight.vercel.app/adoptPet/${name}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Complete delete your real friend", "success");
            }
          });
      }
    });
  };

  return (
    <div className="ml-16 rqstfont">
      <table>
        <thead>
          <tr className="border  border-gray-200 p-2 shadow-md">
            <th className="border border-gray-200 p-2">Photo</th>
            <th className="border border-gray-200 p-2">Name</th>
            <th className="border border-gray-200 p-2">Email</th>
            <th className="border border-gray-200 p-2">Category</th>
            <th className="border border-gray-200 p-2">Location</th>
            <th className="border border-gray-200 p-2">Accept</th>
            <th className="border border-gray-200 p-2">Reject</th>
          </tr>
        </thead>
        <tbody>
          {adoptRequest.map((adopt) => (
            <tr key={adopt._id} className="border border-gray-300 shadow-xl">
              <td className="border  border-gray-200 p-2">
                <img
                  src={adopt.photo}
                  alt={adopt.name}
                  className="rounded-full lg:w-20 lg:h-20"
                />
              </td>
              <td className="border border-gray-200 p-2">{adopt.name}</td>
              <td className="border border-gray-200 p-2">{adopt.email}</td>
              <td className="border border-gray-200 p-2">{adopt.category}</td>
              <td className="border border-gray-200 p-2">{adopt.location}</td>

              <div
                onClick={() => handlePausedDonation(adopt._id)}
                className="flex justify-center items-end inset-0"
              >
                <td className="border border-gray-200 p-2 text-2xl">
                  {pausedDonation[adopt._id] ? (
                    <FcAcceptDatabase />
                  ) : (
                    <FaQuestion />
                  )}
                </td>
              </div>

              <td
                onClick={() => handleDelete(adopt.name)}
                className="border border-gray-200 p-2 text-red-700 text-2xl"
              >
                <RiDeleteBin6Line />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdoptionRequest;
