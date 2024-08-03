"use client";
import { useState } from "react";
import Link from "next/link";

const Achievements = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="section pricing pb-0 fade-wrapper pr-i" id="achievement">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-7 col-xxl-6">
            <div className="section__header text-center">
              <h1 className="title mt-12 title-animation">
                My Achievements
              </h1>
              <p>
                {" "}
                2016~Present
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-start gaper">
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text">Junior Front-End Developer</span>
         
                  <h2 className="light-title yearly">
                    10+Proj
                    <span>/ yearly</span>
                  </h2>
              </div>
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Increased image generation
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Access to a wider range
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Basic customer support.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Affordable pricing
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single pricing__single-active topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text">AI Engineer</span>
         
                  <h2 className="light-title yearly">
                    15+Proj
                    <span>/ yearly</span>
                  </h2>
              </div>
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Basic access to the AI image
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Limited number of image
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Watermarked images.
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Suitable for users
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <div className="pricing__single topy-tilt fade-top">
              <div className="pricing__intro">
                <span className="primary-text premium">GenAI Full-Stack Developer</span>
                  <h2 className="light-title yearly">
                  20+Proj
                    <span>/ yearly</span>
                  </h2>
              </div>
              <hr />
              <div className="pricing__content">
                <ul>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Additional features
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Examples include
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Allows users to customize
                  </li>
                  <li>
                    <i className="material-symbols-outlined">check_circle</i>
                    Their specific needs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
