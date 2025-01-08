import React from "react";
import Login from "../components/Login";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }
    await axios.post("http://localhost:4001/user/signup", userInfo)
    .then((res) => {
      console.log(res.data);
      if(res.data){
        toast.success('Signup Successful');
        setTimeout(() => {
          document.getElementById("my_modal_3").close();
          window.location.href = "/";
          localStorage.setItem("User",JSON.stringify(res.data.user))
          }, 1000);
      }
    })
    .catch((err) => {
     if(err.response){
      console.log(err);
      toast.error("Error:" + err.response.data.message);
     }
    });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px]">
          <div className="modal-box">
            {/* X button to close the modal */}
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              {/* SIGNUP Heading */}
              <h3 className="font-bold text-lg">Sign UP</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter Your Fullname"
                  className="input w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                  />
                  <br />
                  {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div>
                <span>Password</span>
                <br />
                <input
                  type="Password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>



              {/* Signup Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Sign Up
                </button>



                <p>
                  Already Have an Account{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

