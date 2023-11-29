import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./PetListing.css";
const PetListing = () => {
  const addpetloader = useLoaderData();
  console.log(addpetloader);
  return (
    <div className="flex justify-center items-center listingfont">
      <div className="grid-cols-1 grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {addpetloader.map((addpet) => (
          <div className="shadow-2xl rounded-md">
            <img
              src={addpet.photo}
              className="md:h-[200px] rounded-t-md lg:h-[200px] w-full"
            />
            <div className="p-2">
              <h1>Name: {addpet.name}</h1>
              <h1>Location: {addpet.location}</h1>
              <h1>Age: {addpet.age}</h1>

              <Link to={`/details/${addpet._id}`}>
                <div className="shadow-2xl">
                  <button className="border rounded-md px-2 py-1 m-2">
                    Details
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetListing;
