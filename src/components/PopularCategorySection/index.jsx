import React from "react";
import Title from "../SectionsTitle";
import Card from "./PopularCategoryCard";

const PopularCtegories = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-3 md:px-0">
        <Title title="Popular Categories" />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {[..."abcdefghigk4"].map((items, idx) => (
            <Card key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCtegories;
