import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";

const Brand = ({ brand }) => {
  const { id, name, sName, image } = brand;
  return (
    
      <Link to={`/foods/${sName}`}>
        <div className=" w-80 bg-base-100 shadow-xl rounded-3xl border border-[#FCE3AE] ">
          <div className="card-body">
            <h2 className="card-title mx-auto text-[#FCE3AE]">{name}</h2>
          </div>
          <figure className=" h-56">
            <img
              className="w-full rounded-b-3xl h-full"
              src={image}
              alt="Shoes"
            />
          </figure>
        </div>
      </Link>
  );
};

export default Brand;
