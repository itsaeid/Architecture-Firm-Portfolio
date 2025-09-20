export default function Navbar() {
  return (
    <div className="border-gray-300 bg-white border-b w-full flex justify-center fixed top-0 z-50 items-center">
      <div className="w-[1300px] h-20 flex justify-between items-center">
        {/* Logo  */}
        <div>
          <img src="/img/logo.png" alt="logo" />
        </div>
        {/* Menu  */}
        <div>
          <nav>
            <ul className="flex gap-4 text-lg font-semibold">
              <li>Home</li>
              <li>Portfolio</li>
            </ul>
          </nav>
        </div>
        {/* contact button  */}
        <div>
          <button className="button-primary">Contact us</button>
        </div>
      </div>
    </div>
  );
}
