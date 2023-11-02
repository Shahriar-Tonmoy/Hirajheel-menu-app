const Gallery = () => {
  return (
    <div>
      <h1 className="text-center text-5xl font-bold mb-16 text-green-100">
        Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
        <img src="https://i.ibb.co/hm32BkL/esports-championship.jpg" alt="" />
        <img src="https://i.ibb.co/HC9sjV5/Cosplay.jpg" alt="" />
        <img src="https://i.ibb.co/C11cmsB/Unity-Game-Development.jpg" alt="" />
        <img src="https://i.ibb.co/W0vLc7R/tech-innovation.jpg" alt="" />
        <img src="https://i.ibb.co/Tv4L3bj/gaming-expo.jpg" alt="" />
        <img src="https://i.ibb.co/5LTkh4f/Hackathon.jpg" alt="" />
      </div>
    </div>
  );
};

export default Gallery;
