import { Link, useParams } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Service = ({ service }) => {
  const { id,name, image, price, description } = service;
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div >
      <div data-aos="fade-up"
     data-aos-duration="3000" className=" card w-96 bg-base-100 shadow-xl border-4 border-green-500 mx-auto ">
        <figure className="px-10 pt-10">
          <img
            
            src={image}
            alt="Shoes"
            className="rounded-xl h-40 w-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{price}</p>
          <p>{description}</p>
          <div className="card-actions">
            <Link to={`/Details/${id}`}><button className="btn btn-primary bg-green-500 border-0 hover:bg-green-500">Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
