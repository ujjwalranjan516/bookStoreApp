import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>
        <Navbar />
      </div>

     

        <div className="flex h-screen items-center justify-center">
        <div
          id="my_modal_3"
          className="border-[1px] shadow-md py-10 px-20 rounded-md "
        >
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <h1 className="font-bold text-xl text-pink-500">Contact</h1>
            
              
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br></br>
                <input
                  type="name"
                  placeholder="Enter your Name"
                  className="w-80 px-3 py-1 border rounded-md outine-none"
                  {...register("name", { required: true })}
                />
                <br/>
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br></br>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outine-none"
                  {...register("email", { required: true })}
                />
                <br/>
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Messege</span>
                <br></br>
                <input
                  type="messege"
                  placeholder="Your Messege"
                  className="w-80 h-20 px-3 py-1 border rounded-md outine-none"
                  {...register("messege", { required: true })}
                />
                <br/>
                {errors.messege && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/*Login button*/}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1">
                  Contact
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </div>
        
      
      <Footer />
    </>
  );
}

export default Contact;
