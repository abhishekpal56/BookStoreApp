import React, { useEffect, useState } from "react";
import axiuos from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../components/cards";

const Freebooks = () => {

  const [book, setbook]=useState([])
  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axiuos.get("http://localhost:4001/book");
        const data = response.data.filter((item) => item.category === "free");
        console.log(data);
        setbook(data);
        
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
    getBook();
  },[]);


  var settings = {
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
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Heading and Description */}
        <div>
          <h1 className="font-bold text-xl pb-2">Free Offered Books</h1>
          <p>Here, some free books for you. Enjoy these books.</p>
        </div>
        {/* Slider for free books */}
        <div>
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebooks;
