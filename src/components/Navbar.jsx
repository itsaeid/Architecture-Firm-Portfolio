export default function Navbar() {
  return (
    <div className="border-gray-300 border-b w-full flex justify-center items-center">
      <div className="w-[1300px] h-15 flex justify-between items-center">
        {/* Logo  */}
        <div>
          <img src="/img/logo.png" alt="logo" />
        </div>
        {/* Menu  */}
        <div>
          <nav>
            <ul className="flex gap-4">
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
