import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Title = ({ title, link }) => {
  return (
    <div className="flex justify-between items-center mb-5">
      <h2 className="font-bold md:text-[22px]">{title}</h2>
      <Link className="flex items-center gap-2 text-(--main-color)">
        <span>View All</span>
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default Title;
