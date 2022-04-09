import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [personIndex, setPersonIndex] = useState(0);

  const handleRandom = () => {
    let random = Math.floor(Math.random() * people.length);
    //to avoid repetition, add 1 to random
    if (random === personIndex) {
      random = personIndex + 1;
    }
    //to avoid index errors, set the index through checkNumber function
    setPersonIndex(checkNumber(random));
  };

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    } else if (number < 0) {
      return people.length - 1;
    } else {
      return number;
    }
  };

  const handleNext = () => {
    setPersonIndex((personIndex) => {
      let newIndex = personIndex + 1;
      return checkNumber(newIndex);
    });
  };
  const handlePrev = () => {
    setPersonIndex((personIndex) => {
      const newIndex = personIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const { name, job, image, text } = people[personIndex];

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>

      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <div className="button-container">
        <button className="prev-btn">
          <FaChevronLeft onClick={handlePrev} />
        </button>
        <button className="next-btn">
          <FaChevronRight onClick={handleNext} />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
        Surprise me!
      </button>
    </article>
  );
};

export default Review;
