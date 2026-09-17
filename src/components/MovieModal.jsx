import { useEffect, useState } from "react";
import {
  FaStar,
  FaCalendarAlt,
  FaTimes,
  FaFilm,
  FaSpinner,
} from "react-icons/fa";
import { fetchShowDetails } from "../api/tvmaze.js";

function stripHtml(html) {
  if (!html) return "No overview available for this title yet.";
  return html.replace(/<[^>]+>/g, "");
}

export default function MovieModal({ showId, onClose }) {
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);
    setError(null);

    fetchShowDetails(showId)
      .then((data) => {
        if (!cancelled) {
          setDetails(data);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setError("Couldn't load details for this title.");
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
  }, [showId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const backdrop =
    details?.image?.original || details?.image?.medium || null;

  const rating = details?.rating?.average
    ? details.rating.average.toFixed(1)
    : "N/A";

  const cast = details?._embedded?.cast?.slice(0, 5) || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-8"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="max-h-full w-full max-w-2xl overflow-y-auto rounded-lg border border-slate-800 bg-slate-900"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
    
        <div className="relative">
          <div className="aspect-[16/8] w-full overflow-hidden bg-slate-800">
            {backdrop ? (
              <img
                src={backdrop}
                alt=""
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <FaFilm
                  className="text-5xl text-slate-500"
                  aria-hidden="true"
                />
              </div>
            )}
          </div>

        
          <button
            type="button"
            onClick={onClose}
            aria-label="Close details"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/80 text-slate-300 transition-colors hover:bg-violet-600 hover:text-white"
          >
            <FaTimes aria-hidden="true" />
          </button>
        </div>

   
        <div className="p-6 sm:p-8">
          {isLoading && (
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <FaSpinner
                className="animate-spin text-violet-400"
                aria-hidden="true"
              />
              Loading details...
            </div>
          )}

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}

          {details && !isLoading && (
            <>
      
              <h2
                id="modal-title"
                className="text-2xl font-bold text-white sm:text-3xl"
              >
                {details.name}
              </h2>

       
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <FaStar
                    className="text-yellow-400"
                    aria-hidden="true"
                  />
                  Rating: {rating}
                </span>

                <span className="flex items-center gap-2">
                  <FaCalendarAlt
                    className="text-violet-400"
                    aria-hidden="true"
                  />
                  Release: {details.premiered || "Unknown"}
                </span>

                {details.network?.name && (
                  <span>
                    Network: {details.network.name}
                  </span>
                )}
              </div>

   
              {details.genres?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {details.genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-md border border-violet-500/50 px-3 py-1 text-xs font-medium text-violet-400"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}

      
              <div className="mt-7">
                <h3 className="text-sm font-semibold text-white">
                  Overview
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {stripHtml(details.summary)}
                </p>
              </div>

 
              {cast.length > 0 && (
                <div className="mt-7">
                  <h3 className="text-sm font-semibold text-white">
                    Starring
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {cast
                      .map((c) => c.person?.name)
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                </div>
              )}

  
              <button
                type="button"
                onClick={onClose}
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-violet-500 hover:bg-violet-600 hover:text-white"
              >
                <FaTimes aria-hidden="true" />
                Close
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}