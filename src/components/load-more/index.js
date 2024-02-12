/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Card from "./Card";

const LoadData = ({theme}) => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=9&skip=${count * 9}`
      );

      const result = await res.json();
      setProducts((prevProducts) => (count === 0 ? result.products : [...prevProducts, ...result.products]));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <>
      <div className="grid grid-cols-3 w-[500px] gap-4 mx-auto">
        {products.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            image={data.thumbnail}
            description={data.description}
            theme={theme}
          />
        ))}
      </div>
      <div
        className="mx-auto w-[100px] text-center border-2 rounded-lg bg-gradient-to-tr from-violet-400 to-red-500 to bg-pink-400 text-white p-1 border-violet-600 cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Load More
      </div>
    </>
  );
};

export default LoadData;
