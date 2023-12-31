import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Update = () => {

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

    const loadedProduct = useLoaderData();
    const { name, image, foodType, price } = loadedProduct;
    console.log(name);
    const handleUpdateProduct = e =>{
        e.preventDefault();
        const form  = e.target;
        const fName = form.name.value;
        const fImage = form.image.value;
        const fFoodType = form.foodType.value;
        // const fType = form.type.value;
        const fPrice = form.price.value;
        // const fShortDescription = form.shortDescription.value;
        // const fRating = form.rating.value;
        const updatedProduct = {fName, fImage, fFoodType, fPrice};
        console.log(updatedProduct);
        
        fetch(`http://localhost:3000/foods/${loadedProduct._id}`,{
            method:'PUT',
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    toast('Updated Successfully!!')
                }
            })
        
    }

  return (
    <div className="hero min-h-screen bg-base-200">
        <ToastContainer></ToastContainer>
      <div className="hero-content flex-col lg:flex-row-reverse w-full">
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full  shadow-2xl border border-[#FCE3AE] bg-base-100 py-20 px-5">
          <h1 className="text-[#FCE3AE] text-center text-3xl font-bold">
            Update Food Here
          </h1>
          <form className="card-body" onSubmit={handleUpdateProduct}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  defaultValue={name}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered"
                  name="image"
                  defaultValue={image}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Food Type</span>
                </label>
                <select 
                  className="input input-bordered text-[#FCE3AE]"
                  name="foodType"
                  value={foodType}
                  required>
                    {
                      brands.map(cat => <option key={cat._id} value={cat.sName}>{cat.name}</option>)
                    }
                    {/* <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Breads">Breads</option>
                  <option value="Kebab">Kebab</option>
                  <option value="setMenu">Set Menu</option> */}
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  name="price"
                  defaultValue={price}
                  required
                />
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Short description</span>
                </label>
                <input
                  type="text"
                  placeholder="Short description"
                  className="input input-bordered"
                  name="shortDescription"
                  defaultValue={shortDescription}
                  required
                />
              </div> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-opacity-0 border-[#FCE3AE] hover:bg-opacity-0 hover:border-orange-200 w-[30%] mx-auto">
                Update
              </button>
            </div>
          </form>
          <div className="text-center">
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
