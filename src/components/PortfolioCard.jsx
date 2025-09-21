import { Link } from 'react-router-dom'

export default function PortfolioCard({ portfolio }) {
  return (
    <Link
      to={`/portfolio/${portfolio.id}`}
      className="block rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-lg transition"
    >
      <div className="w-full h-48 bg-gray-100 overflow-hidden">
        <img
          src={portfolio.image}
          alt={portfolio.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1">{portfolio.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">
          {portfolio.description}
        </p>
      </div>
    </Link>
  );
}
