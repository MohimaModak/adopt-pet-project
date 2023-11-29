import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <img
          src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
          alt=""
          srcset=""
        />
         <button className=" text-teal-500 border shadow-2xl py-2 px-2 text-base rounded-full mt-6 font-semibold">
            <Link
             to={"/"}>Back To Home</Link>
          </button>
      </div>
    </div>
  );
};

export default ErrorPage;
