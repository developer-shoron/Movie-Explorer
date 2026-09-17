import { useEffect, useMemo, useState } from "react";
import { FaFilm } from "react-icons/fa";
import SearchBar from "../components/SearchBar.jsx";
import MovieGrid from "../components/MovieGrid.jsx";
import MovieModal from "../components/MovieModal.jsx";
import { fetchAllShows, searchShows } from "../api/tvmaze.js";

export default function Movies() {
  const [allShows, setAllShows] = useState([]);
  const [searchResults, setSearchResults] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  // Initial catalog load
  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);

    fetchAllShows(0)
      .then((data) => {
        if (!cancelled) {
          setAllShows(data);
          setError(null);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("Couldn't load the catalog. Try again shortly.");
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  // Debounced search
  useEffect(() => {
    if (!query.trim()) {
      setSearchResults(null);
      setError(null);
      return;
    }

    const timeoutId = setTimeout(() => {
      setIsLoading(true);

      searchShows(query.trim())
        .then((results) => {
          setSearchResults(results);
          setError(null);
        })
        .catch(() => {
          setError("Search failed. Try again.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 350);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const shows = useMemo(
    () => (searchResults !== null ? searchResults : allShows),
    [searchResults, allShows]
  );

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
      {/* Page Heading */}
      <div className="mb-8">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
            <FaFilm className="text-lg text-violet-400" aria-hidden="true" />
          </div>

          <h1 className="font-display text-3xl font-bold text-white">
            Browse the catalog
          </h1>
        </div>

        <p className="text-sm leading-6 text-slate-400">
          {allShows.length > 0 && searchResults === null
            ? `${allShows.length} titles ready to explore.`
            : "Search by name or browse the full list below."}
        </p>
      </div>

      {/* Search */}
      <div className="mb-8 max-w-xl">
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {/* Movie Grid */}
      <MovieGrid
        shows={shows}
        isLoading={isLoading}
        error={error}
        onSelect={setSelectedId}
        query={query}
      />

      {/* Movie Details Modal */}
      {selectedId && (
        <MovieModal
          showId={selectedId}
          onClose={() => setSelectedId(null)}
        />
      )}
    </section>
  );
}