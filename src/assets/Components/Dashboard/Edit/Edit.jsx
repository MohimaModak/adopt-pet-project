import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Edit.css";
import Swal from "sweetalert2";
const Edit = () => {
  const editdonation = useLoaderData();

  const {_id} = editdonation

  const handleEdit = (e) => {
    e.preventDefault();
    const currentAmount = e.target.currentamount.value;
    const editdonation = {
      currentAmount,
    };
    console.log(editdonation);
    fetch(
      `https://final-project-server-eight.vercel.app/mydonationcampaigns/${_id}`,

      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(editdonation),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Wow",
            text: "Successfully Edit",
            confirmButtonText: "Okay",
          });
        }
      });
  };

  console.log(editdonation);
  return (
    <div className="flex justify-center items-center bg-yellow-50 p-16">
      <div className="edit">
        <img src={editdonation.imageUrl} className="rounded-md mb-5" />
        <div>
          <h1>
            <span className="md:text-lg text-teal-400">Pet-Name: </span>
            {editdonation.petName}
          </h1>
          <h1>
            <span className="md:text-lg text-teal-400">Max-Amount: </span>
            {editdonation.maxAmount}
          </h1>
          <h1>
            <span className="md:text-lg text-teal-400">Current-Amount: </span>
            {editdonation.currentAmount}
          </h1>
        </div>
        <form onSubmit={handleEdit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text md:text-lg text-teal-400">
                Edit-Amount
              </span>
            </label>
            <input
              type="text"
              placeholder="Current-Amount"
              name="currentamount"
              defaultValue={editdonation.currentAmount}
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Edit- Amount</span>
            </label>
            <input
              className="input input-bordered w-full md:text-lg text-teal-400"
              type="submit"
              value="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
