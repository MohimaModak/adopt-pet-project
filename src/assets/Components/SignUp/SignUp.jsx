import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import "./Singup.css";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AxiosPublic from "../AxiosPublic/AxiosPublic";
import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const publicAxios = AxiosPublic();
  console.log(publicAxios);

  const { creatUser, signInWithGoogle } = useContext(AuthContext);
  console.log(creatUser, signInWithGoogle);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const handleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const userInfo = { name, email, photo, password };
    const userStoreInfo = { name, email };
    console.log(userInfo);
    console.log(userStoreInfo);

    let condition =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;

    if (!condition.test(password)) {
      Swal.fire("Password is invalid");
    }

    const emailCondition = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailCondition.test(email)) {
      Swal.fire("Email is invalid");
    }

    creatUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        }).then(() => {
          publicAxios.post("/users", userStoreInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("store users in the database");
              e.target.reset();
              window.location.href = "/";
              return Swal.fire("User Created Successfully");
            }
          });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

    const handleGoogle = () => {
      signInWithGoogle()
        .then((result) => {
          console.log(result.user);
          navigate(location?.state ? location.state : "/");
          Swal.fire("User Created Successfully");
        })
        .catch((error) => {
          console.error(error);
        });
    };

  return (
    <div className=" text-blue-900 signfont bg-teal-100">
      <div>
        <img
          src="https://media.istockphoto.com/id/1276581591/vector/cute-simple-seamless-pattern-with-paw-prints.jpg?s=612x612&w=0&k=20&c=qRxqN8NX0Q0VkLOOj0NCysIZZ37328M4W2Kze2Xofro="
          className="w-full hidden sm:block"
        />
      </div>
      <div className="flex justify-center items-center inset-0 z-30 absolute">
        <div>
          <img
            src="https://images-workbench.99static.com/Y36QGDgTHvHs5QSqgzMaJ5-gpgw=/77x24:889x836/fit-in/500x500/filters:fill(white,true):format(webp)/http://s3.amazonaws.com/projects-files/28/2897/289739/8f25deb5-bb38-46c5-904b-23de07c4c108.png"
            className="hidden sm:block"
          />
        </div>

        <div className="">
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl back border">
                <form
                  onSubmit={handleSignup}
                  className="card-body font-semibold grid grid-cols-2"
                >
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      name="email"
                      className="input input-bordered shadow-2xl  px-1 py-1 rounded-md w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo</span>
                    </label>
                    <input
                      type="text"
                      placeholder="photo"
                      name="photo"
                      className="input input-bordered shadow-2xl px-1 py-1 rounded-md w-full max-w-xs"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="password"
                      name="password"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="text-center form-control lg:col-span-2 mt-3">
                    <button className="input input-bordered">Sign up</button>
                  </div>

                  <div className="flex justify-center items-center text-center form-control lg:col-span-2 font-bold">
                    Sign in with{" "}
                    <span
                      onClick={handleGoogle}
                      className="text-2xl cursor-pointer "
                    >
                      <AiOutlineGoogle></AiOutlineGoogle>
                    </span>
                  </div>

                  <div className="text-center form-control lg:col-span-2 font-bold p-2">
                    <p className="">
                      Already Have Account Please <br />
                      <Link className="underline uppercase" to={"/login"}>
                        Sign-In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
