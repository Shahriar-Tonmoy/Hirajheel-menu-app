import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";
import NoProducts from "../NoProducts/NoProducts";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products = () => {
  const allProducts = useLoaderData();
  const { name } = useParams();

  //const adImages = clickedBrandProductsAd.images;

  const clickedBrandProducts = allProducts.filter(
    (product) => product.foodType.toLowerCase() === name.toLowerCase());

  const [products, setProducts] = useState(clickedBrandProducts);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/foods/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        //console.log(data,data.deletedCount)
        if (data.deletedCount > 0) {
          toast("DELETED SUCCESSFULLY");
           const remainingProducts = products.filter((pro) => pro._id !== id);
           setProducts(remainingProducts);
        }
      });
  };

  const [brands, setBrands] = useState([]);

  console.log(products);

  function replaceSpecialCharactersWithSpace(inputString) {
    // Define a regular expression to match special characters
    // In this example, it replaces any character that is not a letter, digit, or space
    const regex = /[^a-zA-Z0-9\s]/g;
  
    // Use the replace method to replace special characters with spaces
    const resultString = inputString.replace(regex, ' ');
  
    return resultString;
  }

  return (
    <div>
      <div className="mb-32">
        <h1 className="text-center text-7xl font-bold mb-16 text-[#FCE3AE]">
         {replaceSpecialCharactersWithSpace(name)}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto  gap-8 ">
          {(
            products.map((product) => (
              <Product key={product._id} product={product} handleDelete={handleDelete}></Product>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
