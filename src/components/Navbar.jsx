export default function Navbar() {
  return (
    <div>
      <div className="w-[1300px] h-15 b- bg-red-800 flex justify-between items-center">
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
          <button>Contact us</button>
        </div>
      </div>
    </div>
  );
}
