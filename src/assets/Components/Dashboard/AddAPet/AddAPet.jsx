import axios from "axios";
import React, { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const AddAPet = () => {
  const [formVisibility, setFormVisibility] = useState(false);

  const { user } = useContext(AuthContext);
  const toggleForm = () => {
    setFormVisibility(!formVisibility);
    setuploadeImage("");
  };

  const handleAddPet = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const age = e.target.age.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const location = e.target.location.value;
    const longdescription = e.target.longdescription.value;
    const addpets = {
      name,
      age,
      description,
      category,
      location,
      longdescription,
      photo,
      email: user.email
    };
    console.log(addpets);

    axios
      .post(
        "https://final-project-server-eight.vercel.app/addpet",

        addpets
      )
      .then((data) => {
        console.log(data.data);
        Swal.fire({
          title: "Wow",
          text: "Successfully add a pet",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <div>
      <div className="video-container relative">
        <div>
          <img
            src="https://images.pexels.com/photos/1302290/pexels-photo-1302290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full min-h-screen"
          />
        </div>

        <div className="absolute justify-center flex items-center inset-0 text-center">
          <div className=" z-[1000]">
            {formVisibility ? (
              <div className="text-center md:text-4xl font-bold ">
                Make You Best Choice
              </div>
            ) : (
              <div>
                <h1 className="text-center text-2xl md:text-6xl font-bold mb-5">
                  Creativity
                </h1>
                <div>
                  <h1 className="lg:text-xl">
                    {" "}
                    It may sound obvious, but practice is essential for
                    creativity.Discover Quality in Quantity. <br /> Creativity
                    is not about perfection.{" "}
                  </h1>
                </div>
              </div>
            )}
            {formVisibility ? (
              <div>
                <button
                  onClick={toggleForm}
                  className="opacity background border px-2 py-1 mt-5 rounded-md"
                >
                  <AiOutlineClose></AiOutlineClose>
                </button>
              </div>
            ) : (
              <div>
                <button
                  onClick={toggleForm}
                  className="opacity background border px-2 py-1 mt-5 text-white font-bold rounded-md shadow-2xl"
                >
                  Add A Pet
                </button>
              </div>
            )}

            {formVisibility && (
              <div>
                <h1 className="lg:text-8xl font-extrabold shadow-2xl">
                  <form
                    onSubmit={handleAddPet}
                    className="card-body font-semibold grid grid-cols-2 background"
                  >
                    <div className="form-control">
                      <label className="label ">
                        <span className="label-text text-white">Pet Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="name"
                        name="name"
                        className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs "
                      />
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Pet Age</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Pet Age"
                        name="age"
                        className="input input-bordered "
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Category</span>
                      </label>
                      <select
                        id="Pet Category"
                        name="category"
                        className="input input-bordered text-black"
                      >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                        <option value="Fish">Fish</option>
                        <option value="Bird">Bird</option>
                        <option value="Rabbit">Rabbit</option>
                        <option value="Hamster">Hamster</option>
                        <option value="Guinea Pig">Guinea Pig</option>
                        <option value="Turtle">Turtle</option>
                        <option value="Ferret">Ferret</option>
                      </select>
                    </div>

                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">
                          Pet Location
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Pet Location"
                        name="location"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">
                          Short Description
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Short Description"
                        name="description"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">
                          Long Description
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Long Description"
                        name="longdescription"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">
                          Photo
                        </span>
                      </label>
                      <input
                        type="text"
                        placeholder="Photo"
                        name="photo"
                        className="input input-bordered w-full"
                        required
                      />
                    </div>
                   
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text text-white">Submit</span>
                      </label>
                      <input
                        className="input input-bordered w-full"
                        type="submit"
                        value="Submit"
                      />
                    </div>

                    <div></div>
                  </form>
                </h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAPet;

