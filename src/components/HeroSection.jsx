export const HeroSection = () => {
  return (
    <div className="flex justify-between items-center w-[1300px] h-[100vh]">
      {/* left side  */}
      <div className="banner-left-sec w-1/2">
        <h5 className="font-bold text-xl text-primary">Trusted Partners</h5>
        <h1 className="text-7xl mt-5 font-extrabold">
          Architecture Interiors Living
        </h1>
        <p className="text-gray-700 text-justify pr-3.5 text-xl mt-5">
          We create spaces that go beyond structure where thoughtful
          architecture meets refined interiors to elevate everyday living. With
          a commitment to excellence, designs blend function.
        </p>
        <div className="flex gap-4 pt-5">
          <button className="button-primary">Contact us</button>
          <button className="button-secondary">More project</button>
        </div>
      </div>
      {/* right side  */}
      <div className="w-1/2">
        <figure className="image-effect">
          <img src="/img/banner.jpg" alt="" />
        </figure>
      </div>
    </div>
  );
};
