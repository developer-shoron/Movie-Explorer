import { FaExclamationTriangle, FaSearch } from "react-icons/fa";
import MovieCard from "./MovieCard.jsx";
import Loader from "./Loader.jsx";

export default function MovieGrid({
  shows,
  isLoading,
  error,
  onSelect,
  query,
}) {
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-500/30 bg-slate-900 px-6 py-16 text-center">
        <FaExclamationTriangle
          className="mx-auto mb-4 text-3xl text-red-400"
          aria-hidden="true"
        />

        <p className="font-sans text-lg font-semibold text-white">
          Something went wrong.
        </p>

        <p className="mt-2 font-sans text-sm text-slate-400">
          {error}
        </p>
      </div>
    );
  }

  if (shows.length === 0) {
    return (
      <div className="rounded-lg border border-slate-800 bg-slate-900 px-6 py-16 text-center">
        <FaSearch
          className="mx-auto mb-4 text-3xl text-violet-400"
          aria-hidden="true"
        />

        <p className="font-sans text-lg font-semibold text-white">
          No matches found.
        </p>

        <p className="mt-2 font-sans text-sm text-slate-400">
          {query
            ? `Nothing found for "${query}". Try a different title.`
            : "This catalog is currently empty."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {shows.map((show) => (
        <MovieCard
          key={show.id}
          show={show}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}