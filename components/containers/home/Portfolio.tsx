"use client";
import { useState, SetStateAction } from "react";
import Image from "next/image";
import Link from "next/link";
import { categoryProductsData } from "@/public/data/category-product";
import CategoryFilterButtons from "./CategoryFilterButtons";
import { AnimatePresence, motion } from "framer-motion";
import one from "@/public//images/category/one.png";
import two from "@/public//images/category/two.png";
import three from "@/public//images/category/three.png";
import four from "@/public//images/category/four.png";

const Portfolio = () => {
  const [active, setActive] = useState("all");
  const [displayData, setDisplayData] = useState(categoryProductsData);

  const handleCategoryClick = (category: SetStateAction<string>) => {
    if (category === active) return;
    setActive(category);
    setDisplayData([]);

    if (category === "all") {
      setDisplayData(categoryProductsData);
      return;
    }

    const filteredData = categoryProductsData.filter(
      (item) => item.category === category
    );

    setTimeout(() => {
      setDisplayData(filteredData);
    }, 600);
  };

  return (
    <section className="section pb-0 category" id="portfolio">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section__header text-center">
              <h2 className="title-animation fw-7 text-white">
                Portfolios
              </h2>
            </div>
          </div>
        </div>
        <hr />
        <div className="row ">
          <div className="col-12">
            <CategoryFilterButtons
              active={active}
              handleClick={handleCategoryClick}
            />
          </div>
        </div>
        <motion.div className="row category-masonry" layout>
          <AnimatePresence>
            {displayData.slice(0, 12).map((item) => {
              return (
                <motion.div
                  className="col-12  col-md-6 col-lg-4 col-xxl-3 category-item"
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="category__single">
                    <div style={{ display: "flex", flexDirection: "row", alignContent: "center" }}>
                      <div className="thumb">
                        <Link href="product-single" className="thumb-img">
                          <Image src={item.productImage} style={{ height: "186px", width: "266px" }} alt="Image" priority />
                        </Link>
                        <Link href={`${item.link}`} className="tag text-capitalize">
                          <Image src={item.categoryLogo} alt="Image" priority height={30} width={30} />
                          {item.category}
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <h5>
                        <Link href="product-single">{item.title}</Link>
                      </h5>
                    </div>
                    <hr />
                    <div className="meta">
                      <div className="meta-info">
                        <div className="meta-thumb">
                          <Image src={item.author} alt="Image" priority />
                        </div>
                        <p className="tertiary-text">{item.authorName}</p>
                      </div>
                      <div className="meta-review">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
        <div className="row">
          <div className="col-12">
            <div className="section__cta text-center">
              <Link href="https://github.com/hightecular95908">
                <button className="btn btn--primary">Github</button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
