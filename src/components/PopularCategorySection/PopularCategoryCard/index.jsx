import { Link } from "react-router";
import image from "/fruites.png";

const Card = ({ item }) => {
  return (
    <Link className="bg-white text-center p-10 rounded-md border border-gray-100 group duration-300 hover:border-(--main-color)">
      <div>
        <img src={image} className="max-w-full" alt="item-title" />
      </div>
      <h2 className="font-bold duration-300 group-hover:text-(--main-color)">
        Fresh Fruite
      </h2>
    </Link>
  );
};

export default Card;
