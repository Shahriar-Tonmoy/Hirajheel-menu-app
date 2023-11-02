const AddCategory = () => {
    const handleNewCategory = (e) => {
        e.preventDefault();
        //IMAGE UPLOAD 
        // const reader = new FileReader();
        // reader.readAsDataURL(e.target.files[0]);
        // reader.onload = () =>{
        //   console.log(reader.result);
        // }
    
        const form = e.target;
        const name = form.name.value;
        const sName = form.sName.value;
        const image = form.image.value;
        // const foodType = form.foodType.value;
        //const type = form.type.value;
        // const price = form.price.value;
        //const shortDescription = form.shortDescription.value;
        //const rating = form.rating.value;
        const newCategory = {
          name,
          sName,
          image,
        };
        form.reset();
        fetch("http://localhost:3000/categories", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newCategory),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="text-center lg:text-left"></div>
          <div className="card flex-shrink-0 w-full  shadow-2xl border border-[#FCE3AE] bg-base-100 py-20 px-5">
            <h1 className="text-[#FCE3AE] text-center text-3xl font-bold">
              Add New Category
            </h1>
            <form className="card-body" onSubmit={handleNewCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="form-control">
                  <label className="label text-[#FCE3AE]">
                    <span className="label-text text-[#FCE3AE]">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered"
                    name="name"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label text-[#FCE3AE]">
                    <span className="label-text text-[#FCE3AE]">URL Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered"
                    name="sName"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label text-[#FCE3AE]">
                    <span className="label-text text-[#FCE3AE]">Image</span>
                  </label>
                  <input
                    type="text"
                    placeholder=""
                    className="input input-bordered"
                    name="image"
                    required
                  />
                  {/* <input type="file" name="image" accept="image/*" id=""   /> */}
                </div>
                {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input
                  type="text"
                  placeholder="Type"
                  className="input input-bordered"
                  name="type"
                  required
                />
              </div> */}
                {/* <div className="form-control">
                <label className="label">
                  <span className="label-text text-[#FCE3AE]">Short description</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  name="shortDescription"
                  required
                />
              </div> */}
                {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="type"
                  placeholder="Rating"
                  className="input input-bordered"
                  name="rating"
                  required
                />
              </div> */}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-opacity-0 border-[#FCE3AE] hover:bg-opacity-0 hover:border-orange-200 w-[20%] mx-auto">
                  Add
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
    </div>
  );
};

export default AddCategory;
