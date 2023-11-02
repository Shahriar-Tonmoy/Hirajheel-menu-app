import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, image, foodType, price } = product;
  return (
    <div className="flex flex-col ">
      <div className="relative w-80 bg-base-100 shadow-xl rounded-3xl border border-[#FCE3AE] ">
      <div className="card-body">
        <h2 className="text-3xl mx-auto text-[#FCE3AE]">{name}</h2>
      </div>
      <figure className=" h-56">
        <img className="w-full rounded-b-3xl h-full" src={image} alt="Shoes" />
      </figure>
      <div className="relative inset-0">
        <div className="absolute bottom-0 right-0 rounded-tl-2xl rounded-br-3xl h-10 w-[36%] bg-black bg-opacity-60"></div>
        <p className="absolute bottom-2 right-6 text-[#FCE3AE] text-lg">
          {price} Taka
        </p>
      </div>
    </div>
    <Link to={`/update/${_id}`}><button className=" mt-3 btn border border-[#FCE3AE] text-[#FCE3AE]">Update</button></Link>
    </div>
    
  );
};

export default Product;
