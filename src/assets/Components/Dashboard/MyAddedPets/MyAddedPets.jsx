import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import { GrUploadOption } from "react-icons/gr";
import Swal from "sweetalert2";

const MyAddedPets = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [myAddedPets, setMyAddedPets] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://final-project-server-eight.vercel.app/petbyemail/${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setMyAddedPets(data));
    }
  }, [user?.email]);
  console.log(myAddedPets);
  const handleDelete = (id) => {
    console.log("id", id);
    Swal.fire({
      title:
        "Are you sure to return it if you return it will be deleted from the borrowed books route",
      confirmButtonText: "Yes, I want",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://final-project-server-eight.vercel.app/adoptPet/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Completed your Delete Processing", "success");
            }
            console.log(data);
          });
      }
    });
  };

  return (
    <div className="ml-16 rqstfont">
      {myAddedPets.length === 0 ? (
        <div className="flex justify-center items-center h-[100vh]">
          <h1 className="text-5xl text-center text-teal-600">
            Adopt Your Real Best Friend
          </h1>
        </div>
      ) : (
        <table className="">
          <thead>
            <tr className="border  border-gray-200 p-2 shadow-md">
              <th className="border border-gray-200 p-2">Photo</th>
              <th className="border border-gray-200 p-2">Name</th>
              <th className="border border-gray-200 p-2">Category</th>
              <th className="border border-gray-200 p-2">Update</th>
              <th className="border border-gray-200 p-2">Delete</th>
              <th className="border border-gray-200 p-2">Adopt</th>
            </tr>
          </thead>
          <tbody>
            {myAddedPets.map((adopt) => (
              <tr key={adopt._id} className="border border-gray-300 shadow-xl">
                <td className="border  border-gray-200 p-2">
                  <img
                    src={adopt.photo}
                    alt={adopt.name}
                    className="rounded-full lg:w-20 lg:h-20"
                  />
                </td>
                <td className="border border-gray-200 p-2">{adopt.name}</td>
                <td className="border border-gray-200 p-2">{adopt.category}</td>
                <td className="border border-gray-200 p-2 text-xl text-black font-bold">
                  <GrUpdate />
                </td>
                <td
                  onClick={() => handleDelete(adopt._id)}
                  className="border border-gray-200 p-2 text-red-700 text-2xl"
                >
                  <RiDeleteBin6Line />
                </td>
                <div className="flex justify-center items-center">
                  <td className="text-xl ">
                    <GrUploadOption />
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyAddedPets;
