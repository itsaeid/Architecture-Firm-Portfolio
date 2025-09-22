import { useNavigate } from "react-router";

export default function PortfolioCard({ portfolio }) {
  const navigate = useNavigate();
  return (
    // <Link
    //   to={`/portfolio/${portfolio.id}`}
    //   className="block rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition"
    // >
    <div className="relative block rounded-2xl overflow-hidden shadow-md hover:shadow-5xl">
      {/* image  */}
      <div className="w-full h-full sm:h-56 md:h-75 bg-gray-100">
        <figure className="mask-radial-at-bottom-right">
          <img
            src={portfolio.image}
            alt={portfolio.title}
            className="w-full h-full object-cover "
            loading="lazy"
          />
        </figure>
      </div>
      <div className="absolute w-full flex justify-between items-center left-3 bottom-0 min-w-[55%] md:min-w-[50%]">
        {/* title box  */}
        <div className="bg-white/90 absolute bottom-3 backdrop-blur-sm rounded-xl py-6 px-15 shadow-sm">
          <p className="text-lg font-extrabold text-gray-800 leading-tight">
            {portfolio.title}
          </p>
        </div>
        <div className="absolute right-0 bg-white border-10 pr-1 border-white rounded-lg bottom-0">
          <button
            onClick={() => navigate(`/portfolio/${portfolio.id}`)}
            className="w-15 h-14 rounded-lg bg-emerald-600 flex items-center justify-center shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
              focusable="false"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    // </Link>
  );
}
