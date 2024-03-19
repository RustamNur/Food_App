import React from "react";
import { workData } from "./WorkInfo";

const Work = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Work</h1>
        <p className="primary-text">
          We understand the importance of good service. Our friendly staff is
          here to ensure you have a pleasant dining experience from start to
          finish.
        </p>
        <div className="work-section-bottom">
          {workData.map((data, index) => {
            return (
              <div key={index} className="work-section-info">
                <div className="info-boxes-img-container">
                  <img src={data.image} alt="dataImage" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
