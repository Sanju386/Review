import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { datalist } from "./data";
import useReview from "./useReview";


const Review = () => {

const {handlePrev,handleNext,handleSurprise,item} = useReview()


  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img
            src={item.image}
            alt={item.name}
            className="person-img"
          />

          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <h4 className="author">{item.name}</h4>
        <p className="job">{item.job}</p>
        <p className="info">{item.text}</p>

        <div className="btn-container">
          <button onClick={()=>handlePrev()} className="prev-btn">
            <FaChevronLeft />
          </button>
          <button onClick={()=>handleNext()} className="next-btn">
            <FaChevronRight />
          </button>
        </div>

        <button onClick={handleSurprise} className="btn btn-hipster">surprise me</button>
      </article>
    </main>
  );
};

export default Review;
