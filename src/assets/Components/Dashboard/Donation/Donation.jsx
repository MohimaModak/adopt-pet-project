import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Donation.css";
import axios from "axios";
import Swal from "sweetalert2";
const Donation = () => {
  const [formVisibility, setFormVisibility] = useState(false);

  const toggleForm = () => {
    setFormVisibility(!formVisibility);
    // setuploadeImage("");
  };

  const [donationAmout, setdonationAmout] = useState("");

  const maxDonationAmount = 5000;

  const hadnleDonation = (e) => {
    let enteredAmount = parseFloat(e.target.value);
    if (enteredAmount > maxDonationAmount) {
      enteredAmount = maxDonationAmount;
    }
    setdonationAmout(enteredAmount.toString());
  };

  const handleCreadtPet = (e) => {
    e.preventDefault();
    const donation = e.target.maxdonation.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    const description = e.target.description.value;
    const location = e.target.location.value;
    const date = e.target.date.value;
    const longdescription = e.target.longdescription.value;
    const addpets = {
      donation,
      photo,
      name,
      description,
      location,
      date,
      longdescription,
    };
    console.log(addpets);

    axios
      .post(
        "http://localhost:2000/creatcampaing",

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
      <div className="bg-teal-50 donation min-h-screen justify-center flex items-center inset-0 text-center">
        <div className=" z-[1000]">
          {formVisibility ? (
            <div className="text-center text-orange-300 md:text-4xl font-bold ">
              Make You Best Choice
            </div>
          ) : (
            <div>
              <h1 className="text-center text-orange-300 text-2xl md:text-6xl font-bold mb-5">
                Creativity
              </h1>
              <div>
                <h1 className=" text-teal-400">
                  {" "}
                  It may sound obvious, but practice is essential for
                  creativity.Discover Quality in Quantity. <br /> Creativity is
                  not about perfection.{" "}
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
                className="opacity background bg-teal-300 border px-2 py-1 mt-5 text-white font-bold rounded-md shadow-2xl"
              >
                Creat Your Donation
              </button>
            </div>
          )}

          {formVisibility && (
            <div>
              <h1 className="lg:text-8xl font-extrabold shadow-2xl">
                <form
                  onSubmit={handleCreadtPet}
                  className="card-body font-semibold grid grid-cols-2 background"
                >
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-teal-300">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label ">
                      <span className="label-text text-teal-300">
                        Maximum donation amount
                      </span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter amount"
                      name="maxdonation"
                      value={donationAmout}
                      onChange={hadnleDonation}
                      className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs "
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-teal-300">
                        Last date
                      </span>
                    </label>
                    <input
                      type="date"
                      placeholder="Last date"
                      name="date"
                      className="input input-bordered "
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-teal-300">
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
                      <span className="label-text text-teal-300">
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
                      <span className="label-text text-teal-300">
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
                      <span className="label-text text-teal-300">Photo</span>
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
                      <span className="label-text text-teal-300">Submit</span>
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
  );
};

export default Donation;
