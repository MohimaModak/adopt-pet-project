import React from "react";
import Marquee from "react-fast-marquee";
import "./Inspriable.css";

const Inspriable = () => {
  return (
    <div className="md:flex justify-center items-center gap-8 mt-10 inspirebg p-8 rounded-md">
      <Marquee speed={50} className="bannebackground rounded-full">
        <div className="absolute inset-0"></div>
        <img
          src="https://images.unsplash.com/photo-1601758174609-3a789c37dfa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
          className="h-[400px]"
        />
        <img
          src="https://images.unsplash.com/photo-1601758003081-cc85332409de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"
          className="h-[400px]"
          srcset=""
        />

        <img
          src="https://images.pexels.com/photos/5763562/pexels-photo-5763562.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="h-[400px]"
          srcset=""
        />
        <img
          src="https://images.pexels.com/photos/6530544/pexels-photo-6530544.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="h-[400px]"
          srcset=""
        />
        <img
          src="https://images.pexels.com/photos/6864967/pexels-photo-6864967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="h-[400px]"
          srcset=""
        />

        <img
          src="https://images.pexels.com/photos/5255637/pexels-photo-5255637.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          className="h-[400px]"
          srcset=""
        />
      </Marquee>
      <div className="text-left">
        <h1 className="text-3xl inspirefont mb-5">
          Find you forever friend: Adot, Love And Be Loved
        </h1>
        <h1 className="text-xl inspirefont mb-2">Give theme a home</h1>
        <h1 className="text-sm inspirefont">
          You can't buy happiness, but you can adopt it.
        </h1>
        <button className="text-white px-3 py-1 mt-2 rounded-full bg-blue-950 petfont">
          Adopt me
        </button>
      </div>
    </div>
  );
};

export default Inspriable;
