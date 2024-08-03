import Image from "next/image";
import { categoryButtons } from "@/public/data/category-buttons";

const CategoryFilterButtons = ({ handleClick, active }: any) => {
  return (
    <div className="category-filter">
      {categoryButtons.map((item) => {
        return (
          <button
            aria-label="Filter Product"
            key={item.id}
            className={active === item.title.toLowerCase() ? " active" : ""}
            onClick={() => handleClick(item.title.toLowerCase())}
          >
            {item.imgSrc ? (
              <Image src={item.imgSrc} style={{height:"30px", width:"30px"}} alt="Image" priority />
            ) : null}
            {item.title}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilterButtons;
