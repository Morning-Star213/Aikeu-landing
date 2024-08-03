import Image from "next/image";
import Link from "next/link";
import CraftThumb from "@/public/images/craft-thumb.png";
import Shape from "@/public/images/footer/shape-one.png";

const Craft = () => {
  return (
    <section className="section craft" id="scrollPosition">
      <div className="container">
        <div className="row align-items-center gaper">
          <div className="col-12 col-lg-6 col-xxl-5">
            <div className="section__content">
              <span className="sub-title">Generative AI Full-Stack Developer</span>
              <h2 className="title title-animation">
                Being a generative AI fullstack developer, I'm here to help you with your AI solutions.
              </h2>
              <h5 className="title title-animation">
                <br />Highly skilled and results-oriented software engineer seeking a challenging position in a dynamic and innovative company where my technical skills and experience can be utilized to contribute to the success of the organization while contributing to the positive outcome of making people richer, smarter, happier.
              </h5>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xxl-7">
            <div className="craft__thumb text-start text-lg-end">
              <div className="reveal-img parallax-img">
                <Image src={CraftThumb} alt="Image" priority style={{ boxShadow: "0px 4px 4px rgba(255, 62, 0)", borderRadius: "16px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="anime-one">
        <Image src={Shape} alt="Image" priority />
      </div>
    </section>
  );
};

export default Craft;
