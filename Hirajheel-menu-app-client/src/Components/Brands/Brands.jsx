import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div className="mt-14">  
      <div className="flex flex-wrap justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container rounded-2xl  mx-auto  gap-10 bg-gradient-to-r from--50 to--200 ">
        {brands.map((brand) => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;