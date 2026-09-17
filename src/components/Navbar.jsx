import { Link, NavLink } from "react-router-dom";
import { MdMovie } from "react-icons/md";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
  
        <Link
          to="/"
          className="flex items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800">
            <MdMovie
              className="text-xl text-violet-400"
              aria-hidden="true"
            />
          </div>

          <span className="text-xl font-bold tracking-tight text-white">
            Flicker
          </span>
        </Link>

      
        <nav className="flex items-center gap-3 sm:gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hidden rounded-lg px-3 py-2 text-sm font-medium transition-colors sm:inline-block ${
                isActive
                  ? "bg-slate-800 text-violet-400"
                  : "text-slate-400 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-violet-600 text-white"
                  : "border border-violet-500 text-violet-400 hover:bg-violet-600 hover:text-white"
              }`
            }
          >
            Movies
          </NavLink>
        </nav>
      </div>
    </header>
  );
}