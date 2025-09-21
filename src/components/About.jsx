export const About = () => {
  return (
    <div className="w-full">
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
                  src="https://photoclerks.com/html/archeva-update/assets/svg/house-decoration.svg"
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
                  src="https://photoclerks.com/html/archeva-update/assets/svg/rating.svg"
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
      {/* second section  */}
      <div className="flex justify-center items-center w-full h-[80vh]">
        <div className="flex w-[1300px] gap-10">
          {/* left col  */}
          <div className="grid w-1/2 grid-cols-2 gap-4 p-4">
            <img
              src="/img/about1.jpg"
              alt="about1"
              className="col-span-1 row-span-2 rounded-xl object-cover w-full h-full"
            />
            <img
              src="/img/about2.jpg"
              alt="about2"
              className="rounded-xl object-cover w-full h-full"
            />
            <img
              src="/img/about3.jpg"
              alt="about3"
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
          {/* right col  */}
          <div className="flex flex-col justify-center gap-5 items-start w-1/2">
            <span className="text-primary font-semibold text-lg">About Us</span>
            <h2 className="text-5xl font-semibold">
              Building Architects Innovate Designers Experience.
            </h2>
            <p className="text-gray-500 text-lg">
              At the heart of our studio lies a deep commitment to creating
              spaces that are as intelligent as they are inspiring. We believe
              that architecture and interior design are not just about
              structures or aesthetics they’re about shaping meaningful
              experiences. Our multidisciplinary team blends creative.
            </p>
            <div className="flex gap-6">
              <div className="border-gray-300 border rounded-xl p-13 flex flex-col gap-2 items-center justify-center">
                <span className="text-4xl font-bold">10+ Years</span>
                <p className="text-gray-500 text-md">More Than Of Experience</p>
              </div>
              <div className="border-gray-300 border rounded-xl p-13 flex flex-col gap-2 items-center justify-center">
                <span className="text-4xl font-bold">10,000+</span>
                <p className="text-gray-500 text-md">
                  People Trusting Our Agency
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <button className="button-primary">Contat Us</button>
              <button className="button-alarm">Portfolio</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
