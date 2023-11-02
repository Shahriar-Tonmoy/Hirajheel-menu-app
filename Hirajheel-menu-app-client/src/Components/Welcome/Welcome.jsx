import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div className="flex justify-around items-center">
        <div>
          <img
            className="mt-10 h-36 text-center mx-auto mb-10"
            src="../../../public/Logo.png"
            alt=""
            srcset=""
          />
          <h1 className="text-center text-5xl font-bold mb-16 text-[#FCE3AE]">
            HIRAJHEEL HOTEL
          </h1>
          <Link to="/"><button className=" text-center text-9xl font-bold mb-16 text-[#DEBA9D] underline">Menu</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
