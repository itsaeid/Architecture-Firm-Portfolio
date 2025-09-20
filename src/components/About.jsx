export const About = () => {
  return (
    <div className="flex flex-col bg-secondary bg-about justify-center items-center w-full h-[100vh]">
      <div className="flex flex-col justify-center w-[1300px] items-center">
        <span className="text-third text-xl font-semibold">Who We Are</span>
        <h2 className="text-white text-5xl font-bold mt-5">
          Defining Spaces Through
        </h2>
        <h2 className="text-white text-5xl font-bold mt-3">
          Purposeful Design
        </h2>
        <p className="font-semibold text-lg text-white mt-5 px-100 text-center">
          Communicates a holistic, intelligent approach to architecture and
          interiors. At the heart of our studio lies a deep commitment to
          creating spaces.
        </p>
        {/* cards  */}
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-15">
          {/* first card  */}
          <div className="flex gap-4 pointer bg-white p-8 rounded-2xl">
            <div className="bg-primary p-4 rounded-xl ">
              <img
                src="https://photoclerks.com/html/archeva-update/assets/svg/document-contact.svg"
                alt="svg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-3xl">20K+</span>
              <span>Interior Designed Worldwide</span>
            </div>
          </div>
          {/* second card  */}
          <div className="flex gap-4 pointer bg-white p-8 rounded-2xl">
            <div className="bg-primary p-4 rounded-xl ">
              <img
                src="https://photoclerks.com/html/archeva-update/assets/svg/document-contact.svg"
                alt="svg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-3xl">97%</span>
              <span>Satisfied Customers</span>
            </div>
          </div>
          {/* third card  */}
          <div className="flex gap-4 pointer bg-white p-8 rounded-2xl">
            <div className="bg-primary p-4 rounded-xl ">
              <img
                src="https://photoclerks.com/html/archeva-update/assets/svg/professional-services.svg"
                alt="svg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-3xl">47+</span>
              <span>Professional Architects</span>
            </div>
          </div>
          {/* fourth card  */}
          <div className="flex gap-4 pointer bg-white p-8 rounded-2xl">
            <div className="bg-primary p-4 rounded-xl ">
              <img
                src="https://photoclerks.com/html/archeva-update/assets/svg/document-contact.svg"
                alt="svg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-bold text-3xl">17K+</span>
              <span>Completed Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
