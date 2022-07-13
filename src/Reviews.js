import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import data from "./data";

function Reviews() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };
  const handeNext = () => {
    setIndex((index) => {
      let nextIndex = index + 1;
      return checkNumber(nextIndex);
    });
  };
  const handlePrev = () => {
    setIndex((index) => {
      let nextIndex = index - 1;
      return checkNumber(nextIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor( Math.random() * data.length)
    if(randomNumber === index){
         randomNumber = index + 1
    }
    setIndex(checkNumber(randomNumber))
}

  return (
    <div className="reviews">
      <div className="review-img">
        <img src={image} alt="" />
      </div>
      <h4 className="auther">{name}</h4>
      <p className="job"> {job}</p>
      <p className="info">{text}</p>
      <div className="review-btn">
        <button onClick={handeNext}>
          <FaChevronRight />
        </button>
        <button onClick={handlePrev}>
          <FaChevronLeft />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        {" "}
        رندوم
      </button>
    </div>
  );
}

export default Reviews;
