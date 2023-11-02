import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import NoProducts from "../NoProducts/NoProducts";
import { useEffect, useState } from "react";

const Products = () => {
  const allProducts = useLoaderData();
  const { name } = useParams();

  //const adImages = clickedBrandProductsAd.images;

  const clickedBrandProducts = allProducts.filter(
    (product) => product.foodType.toLowerCase() === name.toLowerCase()
  );

  

  return (
    <div>
      <div className="mb-32">
        <h1 className="text-center text-5xl font-bold mb-16 text-[#FCE3AE]">
          {name}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto  gap-8 ">
          {(
            clickedBrandProducts.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
