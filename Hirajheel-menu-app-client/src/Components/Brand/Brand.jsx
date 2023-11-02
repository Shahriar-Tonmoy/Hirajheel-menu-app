import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/authProvider";

const Brand = ({ brand, handleDelete }) => {
  const { _id, name, sName, image } = brand;
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <div>
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
      {user && (
        <div className="flex justify-center items-center gap-3">
          <Link to={`/category_update/${_id}`}>
            <button className=" mt-3 btn border border-[#FCE3AE] text-[#FCE3AE]">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className=" mt-3 btn border border-[#FCE3AE] text-[#FCE3AE]"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Brand;
