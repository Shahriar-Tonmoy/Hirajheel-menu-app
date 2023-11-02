import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/categories/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data,data.deletedCount)
        if (data.deletedCount > 0) {
          toast("DELETED SUCCESSFULLY");
           const remainingProducts = brands.filter((pro) => pro._id !== id);
           setBrands(remainingProducts);
        }
      });
  };


  return (
    <div className="mt-14">
      <ToastContainer></ToastContainer>  
      <div className="flex flex-wrap justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container rounded-2xl  mx-auto  gap-10 bg-gradient-to-r from--50 to--200 ">
        {brands.map((brand) => (
          <Brand key={brand._id} handleDelete={handleDelete} brand={brand}></Brand>
        ))}
      </div>
    </div>
  );
};

export default Brands;