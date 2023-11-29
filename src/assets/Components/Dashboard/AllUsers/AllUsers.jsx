import React, { useEffect, useState } from "react";

const AllUsers = () => {
  const [allusers, setAllusers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2000/users")
      .then((res) => res.json())
      .then((data) => setAllusers(data));
  }, []);

  return (
    <div className="ml-16 rqstfont">
      <table>
        <thead>
          <tr className="border  border-gray-200 p-2 shadow-md">
            <th className="border border-gray-200 p-2">Photo</th>
            <th className="border border-gray-200 p-2">Name</th>
            <th className="border border-gray-200 p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {allusers.map((adopt) => (
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
