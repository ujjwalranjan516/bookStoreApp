import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen items-center justify-center text-center px-20 py-20 mt-10">
        <h2 className="text-3xl font-bold mt-4 text-pink-500">About Us</h2>
        <p className="py-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          consectetur nisi cumque? Consequuntur voluptates sapiente amet
          inventore dignissimos asperiores repellendus odit! Consequatur sint
          enim eum eligendi obcaecati sed ipsam fuga.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default About;
