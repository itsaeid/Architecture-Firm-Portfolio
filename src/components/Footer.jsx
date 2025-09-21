import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <div className="w-full bg-[#131615] flex justify-center items-center h-[40vh]">
      <div className="w-[1300px] gap-10 justify-center grid grid-cols-4">
        {/* first col  */}
        <div className="col-span-1 grid gap-4">
          <img src="/img/logo-white.png" alt="" />
          <p className="text-white">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non.
          </p>
          <div className="flex gap-6">
            <Facebook />
            <Linkedin />
            <Instagram />
          </div>
        </div>
        {/* second col  */}
        <div className="col-span-1 grid">
            <h3 className="text-white font-semibold text-2xl">Fast Access</h3>
            <ul>
                <li className="text-white hover:text-primary cursor-pointer">About Us</li>
                <li className="text-white hover:text-primary cursor-pointer">Projects</li>
                <li className="text-white hover:text-primary cursor-pointer">Blogs</li>
            </ul>
        </div>
        {/* third col  */}
        <div className="col-span-1">

        </div>
      </div>
    </div>
  );
};
