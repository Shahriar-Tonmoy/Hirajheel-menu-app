import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {

  const allProducts = useLoaderData();
  const { id } = useParams();
  const selectedProduct = allProducts.find((pro) => pro._id == id);
  
  const {_id, ...newSelectedPro} = selectedProduct
  const { name, image, brandName, type, price, shortDescription, rating } = selectedProduct;

  const handleCart = () =>{
    fetch('https://brand-website-server-9lu7pgb34-mirza-shahriar-tonmoys-projects.vercel.app/cart_products',{
      method:'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newSelectedPro)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data){
            toast("Your product is successfully added to cart!!");
        }
      })
  }
  return (
    <div>
        <ToastContainer></ToastContainer>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-orange-400">{name}</h1>
            <p className="py-6">{shortDescription}</p>
            <p className="py-4 text-2xl font-bold">{price}</p>
            <p className="py-4 text-2xl font-bold">{rating}</p>
            <button onClick={handleCart} className="btn bg-orange-400  text-white hover:bg-orange-500">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
