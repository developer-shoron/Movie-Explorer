import { FaStar, FaCalendarAlt, FaFilm } from "react-icons/fa";

export default function MovieCard({ show, onSelect }) {
  const poster = show.image?.medium || show.image?.original;
  const year = show.premiered ? show.premiered.slice(0, 4) : "—";
  const rating = show.rating?.average
    ? show.rating.average.toFixed(1)
    : "N/A";

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-slate-800 bg-slate-900 transition-colors hover:border-violet-500/50">
      {/* Poster */}
      <div className="aspect-[2/3] w-full overflow-hidden bg-slate-800">
        {poster ? (
          <img
            src={poster}
            alt={`${show.name} poster`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <FaFilm
              className="text-4xl text-slate-500"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {/* Movie Info */}
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h3 className="line-clamp-2 font-sans text-base font-semibold leading-snug text-white">
          {show.name}
        </h3>

        <div className="flex items-center gap-3 text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <FaStar
              className="text-yellow-400"
              aria-hidden="true"
            />
            {rating}
          </span>

          <span className="text-slate-600" aria-hidden="true">
            •
          </span>

          <span className="flex items-center gap-1.5">
            <FaCalendarAlt
              className="text-violet-400"
              aria-hidden="true"
            />
            {year}
          </span>
        </div>

        {/* Details Button */}
        <button
          type="button"
          onClick={() => onSelect(show.id)}
          className="mt-auto rounded-lg border border-violet-500 px-4 py-2 text-sm font-medium text-violet-400 transition-colors hover:bg-violet-600 hover:text-white"
        >
          See Details
        </button>
      </div>
    </div>
  );
}