import axios from "axios";
import { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import api from '../api/apiClient'

export default function PortfolioList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    api
      .get("/portfolios")
      .then((res) => {
        if (cancelled) return;
        setItems(res.data);
      })
      .catch((err) => {
        if (cancelled) return;
        setError(err.message || "خطا در دریافت داده‌ها");
      })
      .finally(() => {
        if (cancelled) return;
        setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <p className="p-4">در حال بارگذاری...</p>;
  if (error) return <p className="p-4 text-red-600">خطا: {error}</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p) => (
        <PortfolioCard key={p.id} portfolio={p} />
      ))}
    </div>
  );
}
