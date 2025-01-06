import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

const Course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          {/* Heading */}
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you
            <span className="text-pink-500"> here!</span> :
            <span className="text-red-500">)</span>
          </h1>
          {/* Description */}
          <p className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos enim
            doloremque sed tempore officia unde est, eius expedita corrupti nemo
            aliquam vitae. Consequatur maxime tempore odit inventore, nisi esse
            veniam? Explicabo necessitatibus nisi quis, laborum et fugit maxime
            ipsa aliquid temporibus obcaecati pariatur mollitia sint blanditiis
            rerum quos numquam excepturi tempore quas! Unde, voluptate.
            Distinctio assumenda incidunt beatae{" "}
          </p>
          {/* Back Button */}
          <Link to="/">
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
