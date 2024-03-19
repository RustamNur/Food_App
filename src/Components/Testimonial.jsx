import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">what they are saying</h1>
        <p className="primary-text">
          Discover what our satisfied customers are saying about their dining
          experiences with us. From rave reviews to glowing testimonials, find
          out why they keep coming back for more.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt=""></img>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          pariatur culpa iusto perferendis repellat dicta ut quaerat, tenetur
          optio maxime excepturi, magnam sint possimus, laboriosam sed quisquam?
          Rem ad voluptatem alias ullam, quae nesciunt aliquam, earum iste dicta
          perferendis ipsum! Minima porro, eius saepe ad placeat quibusdam
          cumque eos ipsa?
        </p>
        <div className="testimonial-info">
          <div className="user-info">
            <h2>John Doe</h2>
            <h5>CEO, Company</h5>
          </div>
          <div className="testimonial-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
