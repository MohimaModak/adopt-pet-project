import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./PetDetails.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const PetDetails = () => {
  const { user } = useContext(AuthContext);
  const PetDetailsLoader = useLoaderData();
  console.log(PetDetailsLoader);
  const [showmodal, setShowmodal] = useState(false);

  const handleBorrow = () => {
    setShowmodal(true);
  };

  const handleAdoptInfo = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const name = e.target.name.value;
    const address = e.target.name.address;
    const number = e.target.name.number;
    const adoptUserInfo = { email, name, address, number, ...PetDetailsLoader };
    console.log(adoptUserInfo);
    axios
      .post("http://localhost:2000/adoptPetUser", adoptUserInfo)
      .then((data) => {
        console.log(data.data);
        setShowmodal(false);
      });

    axios
      .post("http://localhost:2000/adoptPet",adoptUserInfo,{
        email: user.email,
        name: PetDetailsLoader.name,
        category: PetDetailsLoader.category,
        photo: PetDetailsLoader.photo,
        location: PetDetailsLoader.location,
        number: PetDetailsLoader.number,
        number: adoptUserInfo.number,
        id: PetDetailsLoader._id,
      })
      .then((data) => {
        console.log(data.data);
      });
  };

  return (
    <div className="flex justify-center items-center inset-0 deails bg-yellow-50">
      <div className="">
        <div className="flex justify-center items-center p-5">
          <img src={PetDetailsLoader.photo} className="rounded-md" />
        </div>

        <div className="flex justify-center items-center mb-5">
          <div className="w-2/4 md:text-left">
            <h1 className="text-2xl">
              <span className="text-orange-400">Name:</span>{" "}
              {PetDetailsLoader.name}
            </h1>
            <h1 className="text-xl pb-3">
              <span className="text-orange-400">Category:</span>{" "}
              {PetDetailsLoader.category}
            </h1>
            <h1 className="pb-1">
              <span className="text-xl text-orange-400">
                Short Description:
              </span>{" "}
              {PetDetailsLoader.description}
            </h1>
            <h1 className="pb-3">
              <span className="text-xl text-orange-400">Long Description:</span>{" "}
              {PetDetailsLoader.longdescription}
            </h1>
            <h1 className="text-xl pb-5">
              <span className="text-xl text-orange-400">Location:</span>{" "}
              {PetDetailsLoader.location}
            </h1>

            <div className="flex justify-center gap-5 m-3">
              <div onClick={handleBorrow} className="px-2 font-bold">
                <button
                  className="btn bg-white font-bold text-base border rounded-md px-2 py-2 w-full"
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
                >
                  Adopt{" "}
                  <span className="text-teal-500">{PetDetailsLoader.name}</span>
                </button>

                <dialog id="my_modal_1" className="modal">
                  
                  <div className="modal-box">
                    {showmodal && (
                      <form onSubmit={handleAdoptInfo}>
                        <div>
                          <label>Email: </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={user.email}
                            // value={email}
                          />
                        </div>
                        <div>
                          <label>Name: </label>
                          <input
                            type="name"
                            id="name"
                            name="name"
                            value={user.displayName}
                          />
                        </div>

                        <div>
                          <label>Phone number: </label>
                          <input type="" id="number" name="number" />
                        </div>

                        <div>
                          <label>Address: </label>
                          <input type="address" id="address" name="address" />
                        </div>

                        <div>
                          <input type="Submit" value="Submit" />
                        </div>
                        <button onClick={() => setShowmodal(false)}>
                          Close
                        </button>
                      </form>
                    )}
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;
