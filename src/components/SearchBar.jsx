import { FaSearch } from "react-icons/fa";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative">
      <FaSearch
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        aria-hidden="true"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a show by title..."
        aria-label="Search for a movie or show by title"
        className="w-full rounded-lg border border-slate-800 bg-slate-900 py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-violet-500 focus:outline-none"
      />
    </div>
  );
}