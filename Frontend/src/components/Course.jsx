import React from "react";
import list from "../../public/list.json";
import Cards from "../components/Cards";
import {Link} from 'react-router-dom'

function Course() {
  return (
    <>
      <div className=" max-w-screen-2x1 container mx-auto md:px-20 px-4 pt-20 ">
        <div className="items-center justify-center text-center">
          <h1 style={{ fontSize: "2rem" }} className="font-semibold ">
            We are delighted to have you{" "}
            <span className="text-pink-500">here !!</span>
          </h1>

          <p className="mt-5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            delectus aliquid similique itaque harum, saepe praesentium
            laudantium corporis minima quae, enim voluptatem possimus dolorum
            ipsum atque illo repellat, ab beatae.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sequi delectus aliquid similique
            itaque harum, saepe praesentium laudantium corporis minima quae,
            enim voluptatem possimus dolorum ipsum atque illo repellat, ab
            beatae.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 duration-300 mt-10">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
