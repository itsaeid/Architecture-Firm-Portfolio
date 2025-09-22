import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import api from "../api/apiClient";

export default function PortfolioDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    api
      .get(`/portfolios/${id}`)
      .then((res) => {
        if (cancelled) return;
        setItem(res.data);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message || "error");
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) return <p className="p-4">Loading ...</p>;
  if (error) return <p className="p-4 text-red-600">Error: {error}</p>;
  if (!item) return <p className="p-4">Not Found</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-64 object-cover rounded-2xl mb-6"
      />
      <h1 className="text-2xl font-bold mb-4">{item.title}</h1>
      <p className="text-gray-700 leading-relaxed">{item.description}</p>
      {/* <Link
        to="/portfolio"
        className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl"
      >
        Back
      </Link> */}
    </div>
  );
}
