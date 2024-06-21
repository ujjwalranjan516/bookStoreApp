import React from "react";
// import Cards from './components/Cards'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import list from "./../../public/list.json";
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" max-w-screen-2x1 container mx-auto md:px-20 px-4">
        <div>
        <h1  style={{ fontSize: '2rem' }} className="font-semibold text-semibold">Free Offered Courses</h1>
        <p className="my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et
          officia aliquid quisquam fugit, quasi sint odio voluptatem.
          Dolorem magni magnam excepturi ipsa quia, molestiae commodi.
          Sequi sit numquam quo.
        </p>
      </div>
        
      <div>
      <Slider {...settings}>
        {filterData.map((item)=>(
          < Cards item = {item} key={item.id}/>
        ))}
      </Slider>
      </div>
      </div>
    </>
  );
}
export default Freebook;
