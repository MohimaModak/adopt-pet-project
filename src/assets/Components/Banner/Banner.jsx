import React from "react";
import Marquee from "react-fast-marquee";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bannefont">
      <div className="bannebackground">
        <Marquee speed={50} className="bannebackground">
          <div className="absolute  inset-0"></div>
          <img
            src="https://images.pexels.com/photos/2531598/pexels-photo-2531598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[300px]"
          />
          <img
            src="https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[300px]"
            srcset=""
          />

          <img
            src="https://images.pexels.com/photos/257532/pexels-photo-257532.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-[300px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/1959055/pexels-photo-1959055.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-[300px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="h-[300px]"
            srcset=""
          />

          <img
            src="https://images.pexels.com/photos/8834852/pexels-photo-8834852.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="h-[300px]"
            srcset=""
          />
        </Marquee>
        <Marquee speed={50} direction="right">
          <div className="absolute inset-0"></div>
          <img
            src="https://images.pexels.com/photos/13033506/pexels-photo-13033506.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="h-[300px]"
          />
          <img
            src="https://images.pexels.com/photos/10361796/pexels-photo-10361796.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="h-[300px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/6950651/pexels-photo-6950651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[300px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/247373/pexels-photo-247373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[300px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/12955185/pexels-photo-12955185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="h-[300px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/3730206/pexels-photo-3730206.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="h-[300px]"
            srcset=""
          />
          <img
            src="https://images.pexels.com/photos/9419449/pexels-photo-9419449.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            className="h-[300px]"
            srcset=""
          />
        </Marquee>
      </div>
      <div className="justify-center items-center inset-0 flex absolute z-40">
        <h1 className="text-6xl font-bold text-white">Pet Adoption</h1>
      </div>
    </div>
  );
};

export default Banner;
