const FAQ = () => {
  return (
    <div>
      <div>
        <div className="collapse collapse-arrow bg-orange-400">
          <input type="radio" name="my-accordion-2" checked="checked" />
          <div className="collapse-title text-xl font-medium text-white">
          What types of vehicles do you sell?
          </div>
          <div className="collapse-content">
            <p className="text-white">
            We offer a wide range of vehicles, including sports cars, trucks, SUVs.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow border-2 border-orange-400">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
          How do I schedule a test drive?
          </div>
          <div className="collapse-content">
            <p>
            You can schedule a test drive by contacting our dealership through our website or by phone.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-orange-400">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium text-white">
          What is the warranty coverage for the vehicles you sell?
          </div>
          <div className="collapse-content">
            <p className="text-white">
            Warranty coverage varies by manufacturer and model. You can find detailed information about warranties in our product listings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
