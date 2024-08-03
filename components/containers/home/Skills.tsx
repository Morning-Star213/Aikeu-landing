"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import One from "@/public/images/skills/one.png";
import Two from "@/public/images/skills/two.png";
import Three from "@/public/images/skills/three.png";
import Four from "@/public/images/skills/four.png";
import Five from "@/public/images/skills/five.png";
import Six from "@/public/images/skills/six.png";
import Seven from "@/public/images/skills/seven.png";
import Eight from "@/public/images/skills/eight.png";
import Nine from "@/public/images/skills/nine.png";

const Skills = () => {
    const pathname = usePathname();
    const isHomeTwoRoute = pathname === "/index-two";

    return (
        <div
            className={"partner section pb-0" + (isHomeTwoRoute ? " pb-0" : " ")}
            id="main-skills"
        >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-5">
                        <div className="section__header text-center">
                            <h2 className="title sub-title-two mt-0 title-animation">
                                Main Skills
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12" style={{ marginBottom: "40px" }}>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={24}
                            speed={3000}
                            loop={true}
                            roundLengths={true}
                            centeredSlides={true}
                            centeredSlidesBounds={false}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 3,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            breakpoints={{
                                992: {
                                    slidesPerView: 5,
                                },
                                768: {
                                    slidesPerView: 4,
                                },
                                425: {
                                    slidesPerView: 3,
                                },
                            }}
                            className="partner__slider"
                        >
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={One} alt="LangChain" title="LangChain" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Two} alt="OpenAI" title="OpenAI" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image
                                        src={Three}
                                        alt="HuggingFace"
                                        title="HuggingFace"
                                        priority
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image
                                        src={Four}
                                        alt="TensorFlow"
                                        title="TensorFlow"
                                        priority
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Five} alt="PyTorch" title="PyTorch" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Six} alt="Python" title="Python" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Seven} alt="NLP" title="NLP" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Eight} alt="MERN" title="MERN" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Nine} alt="Gemini" title="Gemini" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={One} alt="LangChain" title="LangChain" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Two} alt="OpenAI" title="OpenAI" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image
                                        src={Three}
                                        alt="HuggingFace"
                                        title="HuggingFace"
                                        priority
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image
                                        src={Four}
                                        alt="TensorFlow"
                                        title="TensorFlow"
                                        priority
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Five} alt="PyTorch" title="PyTorch" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Six} alt="Python" title="Python" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Seven} alt="NLP" title="NLP" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Eight} alt="MERN" title="MERN" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Nine} alt="Gemini" title="Gemini" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={One} alt="LangChain" title="LangChain" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Two} alt="OpenAI" title="OpenAI" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image
                                        src={Three}
                                        alt="HuggingFace"
                                        title="HuggingFace"
                                        priority
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image
                                        src={Four}
                                        alt="TensorFlow"
                                        title="TensorFlow"
                                        priority
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Five} alt="PyTorch" title="PyTorch" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Six} alt="Python" title="Python" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Seven} alt="NLP" title="NLP" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Eight} alt="MERN" title="MERN" priority />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="partner__slider-single">
                                    <Image src={Nine} alt="Gemini" title="Gemini" priority />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td align="center" width="96">
                                    <img
                                        src="https://techstack-generator.vercel.app/python-icon.svg"
                                        alt="icon"
                                        width="65"
                                        height="65"
                                    />
                                    <br />
                                    Python
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=ai"
                                        alt="AI"
                                        width="65"
                                        height="65"
                                        style={{ borderRadius: "15px" }}
                                    />
                                    <br />
                                    AI
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=selenium"
                                        width="65"
                                        height="65"
                                        alt="Selenium"
                                    />
                                    <br />
                                    Selenium
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=flask"
                                        width="65"
                                        height="65"
                                        style={{ borderRadius: "15px" }}
                                        alt="Flask"
                                    />
                                    <br />
                                    Flask
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://techstack-generator.vercel.app/django-icon.svg"
                                        alt="icon"
                                        width="65"
                                        height="65"
                                    />
                                    <br />
                                    Django
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=tensorflow"
                                        width="65"
                                        height="65"
                                        alt="tensorflow"
                                    />
                                    <br />
                                    Tensorflow
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=pytorch"
                                        width="65"
                                        height="65"
                                        alt="Laravel"
                                    />
                                    <br />
                                    Pytorch
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=fastapi"
                                        width="65"
                                        height="65"
                                        alt="FastAPI"
                                    />
                                    <br />
                                    FastAPI
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://techstack-generator.vercel.app/docker-icon.svg"
                                        alt="icon"
                                        width="65"
                                        height="65"
                                    />
                                    <br />
                                    Docker
                                </td>
                            </tr>
                            <tr>
                                <td align="center" width="96">
                                    <img
                                        src="https://techstack-generator.vercel.app/js-icon.svg"
                                        alt="icon"
                                        width="65"
                                        height="65"
                                    />
                                    <br />
                                    JavaScript
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://techstack-generator.vercel.app/ts-icon.svg"
                                        alt="icon"
                                        width="65"
                                        height="65"
                                    />
                                    <br />
                                    TypeScript
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=mongodb"
                                        width="65"
                                        height="65"
                                        alt="MongoDB"
                                    />
                                    <br />
                                    MongoDB
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=express"
                                        width="65"
                                        height="65"
                                        alt="Express"
                                    />
                                    <br />
                                    Express
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://techstack-generator.vercel.app/react-icon.svg"
                                        alt="icon"
                                        width="65"
                                        height="65"
                                    />
                                    <br />
                                    React
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=nodejs"
                                        width="65"
                                        height="65"
                                        alt="NodeJS"
                                    />
                                    <br />
                                    NodeJS
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=nextjs"
                                        width="65"
                                        height="65"
                                        alt="NextJS"
                                    />
                                    <br />
                                    NextJS
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://techstack-generator.vercel.app/webpack-icon.svg"
                                        alt="icon"
                                        width="65"
                                        height="65"
                                    />
                                    <br />
                                    Webpack
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://techstack-generator.vercel.app/mysql-icon.svg"
                                        alt="icon"
                                        width="65"
                                        height="65"
                                    />
                                    <br />
                                    MySQL
                                </td>
                            </tr>
                            <tr>
                                <td align="center" width="96">
                                    <img
                                        src="https://techstack-generator.vercel.app/aws-icon.svg"
                                        alt="icon"
                                        width="48"
                                        height="48"
                                    />
                                    <br />
                                    AWS
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=github"
                                        alt="icon"
                                        width="48"
                                        height="48"
                                    />
                                    <br />
                                    Github
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png"
                                        width="48"
                                        height="48"
                                        alt="Git"
                                    />
                                    <br />
                                    Git
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=laravel"
                                        width="48"
                                        height="48"
                                        alt="Laravel"
                                    />
                                    <br />
                                    Laravel
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=rails"
                                        width="48"
                                        height="48"
                                        alt="Rails"
                                    />
                                    <br />
                                    Rails
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=html"
                                        width="48"
                                        height="48"
                                        alt="HTML5"
                                    />
                                    <br />
                                    HTML5
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=bootstrap"
                                        width="48"
                                        height="48"
                                        alt="bootstrap"
                                    />
                                    <br />
                                    Bootstrap
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=tailwind"
                                        width="48"
                                        height="48"
                                        alt="tailwind"
                                    />
                                    <br />
                                    Tailwind
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=rust"
                                        width="48"
                                        height="48"
                                        alt="jQuery"
                                    />
                                    <br />
                                    Rust
                                </td>
                            </tr>
                            <tr>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=go"
                                        width="48"
                                        height="48"
                                        alt="MongoDB"
                                    />
                                    <br />
                                    Go
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=ruby"
                                        width="48"
                                        height="48"
                                        alt="Ruby"
                                    />
                                    <br />
                                    Ruby
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=solidity"
                                        width="48"
                                        height="48"
                                        alt="PHP"
                                    />
                                    <br />
                                    Solidity
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"
                                        width="48"
                                        height="48"
                                        alt="Ethereum"
                                    />
                                    <br />
                                    Ethereum
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
                                        width="48"
                                        height="48"
                                        style={{ borderRadius: "15px" }}
                                        alt="Solana"
                                    />
                                    <br />
                                    Solana
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://assets-global.website-files.com/5d123a0e13543973a9665271/5d129fa97a65fc7deeb743de_Adalo-Final-Logo-Shadow.webp"
                                        width="48"
                                        height="48"
                                        alt="Adalo"
                                    />
                                    <br />
                                    Adalo
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://assets-global.website-files.com/5e6ea34775d1ae77aaa491ca/5e6eca3a0f8bc32229ba825b_Draftbit-App-Icon.svg"
                                        alt="Draftbit"
                                        width="48"
                                        height="48"
                                    />
                                    <br />
                                    Draftbit
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://techstack-generator.vercel.app/graphql-icon.svg"
                                        width="48"
                                        height="48"
                                        alt="MySQL"
                                    />
                                    <br />
                                    GraphQL
                                </td>
                                <td align="center" width="96">
                                    <img
                                        src="https://skillicons.dev/icons?i=postgres"
                                        width="48"
                                        height="48"
                                        alt="PostgreSQL"
                                    />
                                    <br />
                                    PostgreSQL
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Skills;
