import React from "react";
import banner_img from "././../../public/banner_img.png";

function banner() {
  return (
    <>
      {/* Left side heading and text */}

      <div className="max-w-screen-2x1 container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2  mt-12 md:mt-36">
          <h1 style={{ fontSize: "2.5rem" }} className="font-semibold">
            Hello,welcome here to learn
            <span className="text-pink-500 "> new everyday!!</span>
          </h1>
          <div className="py-10 w-full">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              animi quo omnis enim in iusto corporis alias quidem? Maiores vel
              quisquam nisi repudiandae voluptatibus officiis aliquid iste
              perspiciatis non pariatur.
            </p>
          </div>

          <div>
            <input
              type="text"
              placeholder="E-mail"
              className="input input-bordered input-secondary w-full max-w-xs"
            />
          </div>
          <div className="py-5">
            <button className="btn btn-outline btn-secondary">
              Click here
            </button>{" "}
          </div>
        </div>

        {/* //banner image in right */}

        <div className="order-1 w-full md:w-1/2">
          <img src="banner_img.png" className="my-20 " alt=""></img>
        </div>
      </div>
    </>
  );
}

export default banner;
