import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./MyDonation.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";

const MyDonation = () => {
  const [myDonation, setmyDonation] = useState([]);

  useEffect(() => {
    fetch("https://final-project-server-eight.vercel.app/dashboardDonation")
      .then((res) => res.json())
      .then((data) => setmyDonation(data));
  }, []);

  const totalAmount = myDonation.reduce(
    (total, money) => total + parseFloat(money.donation),
    0
  );

  const handleDelete = (name) => {
    console.log("name", name);
    Swal.fire({
      title: "Are you sure to remove your real friend?",
      confirmButtonText: "Yes, I want",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://final-project-server-eight.vercel.app/dashboardDonation/${name}`,
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
    <div className="flex justify-center items-center Navfont">
      <div>
        <h1 className="text-xl mb-5">
          <span className="text-teal-600">Total Donation Amount:</span>{" "}
          <span className="text-orange-400">${totalAmount}</span>
        </h1>
        <table>
          <thead>
            <tr className="border  border-gray-200 p-2 shadow-md">
              <th className="border border-gray-200 p-2 text-teal-600">
                Pet-Photo
              </th>
              <th className="border border-gray-200 p-2 text-teal-600">
                Pet-Name
              </th>
              <th className="border border-gray-200 p-2 text-teal-600">
                Pet-Donation
              </th>
              <th className="border border-gray-200 p-2 text-teal-600">
                Remove
              </th>
            </tr>
          </thead>
          <tbody>
            {myDonation.map((adopt) => (
              <tr key={adopt._id} className="border border-gray-300 shadow-xl">
                <td className="border  border-gray-200 p-2">
                  <img src={adopt.photo} className="rounded-full w-20 h-20" />
                </td>
                <td className="border border-gray-200 p-2 text-orange-400">
                  {adopt.name}
                </td>
                <td className="border border-gray-200 p-2 text-orange-400">
                  {adopt.donation} $
                </td>
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
    </div>
  );
};

export default MyDonation;
