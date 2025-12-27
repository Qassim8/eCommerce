import { Link } from "react-router";

const Card = ({ item }) => {
  return (
    <Link className="bg-white text-center p-5 rounded-md border border-gray-200 group duration-300 hover:border-(--main-color)">
      <div>
        <img src={item.image} className="max-w-full" alt="item-title" />
      </div>
      <h2 className="mt-5 duration-300 group-hover:text-(--main-color)">
        {item.title}
      </h2>
    </Link>
  );
};

export default Card;
