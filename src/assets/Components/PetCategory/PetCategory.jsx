import React, { useEffect, useState } from "react";
import "./Petcategory.css";
const PetCategory = () => {
  const [pet, setPet] = useState([]);
  useEffect(() => {
    fetch("https://final-project-server-eight.vercel.app/pet")
      .then((res) => res.json())
      .then((data) => setPet(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center petfont p-16 text-blue-950">
        Types-of Pets
      </h1>
      <div className="flex justify-center">
        <div className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pet.map((allPets) => (
            <div>
              <img src={allPets.image} className="h-[300px] rounded-md" />
              <h1 className="text-blue-950 text-xl petfont">{allPets.name}</h1>
              <button className="text-white px-2 py-1 mt-2 rounded-full bg-blue-950 petfont">
                More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetCategory;
