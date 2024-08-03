"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo.png";
import ThumbOne from "public/images/footer/footer-thumb-one.png";
import ThumbTwo from "public/images/footer/footer-thumb-two.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const deviceWidth = window.innerWidth;

    if (document.querySelector(".footer") && deviceWidth >= 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".footer",
          start: "top center",
          end: "+=40%",
          scrub: 0.5,
          pin: false,
        },
      });

      tl.to(".footer__content .light-title span", {
        "--opacity": 1,
        "--transformY": 0,
        duration: 3,
        ease: "power1.inOut",
      });

      tl.to(".footer-thumb-one img", {
        transform: "rotate(-24deg)",
        x: "0px",
        opacity: 1,
        duration: 3,
        ease: "power1.inOut",
      });

      tl.to(".footer-thumb-two img", {
        y: "0px",
        opacity: 1,
        duration: 3,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center section">
          <div className="col-12 col-md-9 col-lg-9 col-xl-10 col-xxl-9">
            <div className="footer__content text-center">
              <h2 className="light-title fw-7 title-animation">
                Let’s Take A Journey Of
                AI With Me.
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="footer__copyright">
              <div className="row gaper">
                <div className="col-12 col-lg-6">
                  <div className="footer__copyright-content text-center text-lg-start">
                    <p>
                      Copyright &copy;{" "}
                      <span id="copyrightYear">{currentYear}</span>{" "}
                      <Link href="/">John Zulhelmi</Link>. All Rights Reserved
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-thumb-one">
        <Image src={ThumbTwo} alt="Image" priority />
      </div>
      <div className="footer-thumb-two">
        <Image src={ThumbOne} alt="Image" priority />
      </div>
    </footer>
  );
};

export default Footer;
