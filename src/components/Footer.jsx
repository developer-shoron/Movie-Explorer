import { FaGithub, FaDatabase } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 text-center sm:flex-row sm:justify-between sm:text-left">

        <div className="flex items-center gap-2">
          <MdMovie
            className="text-xl text-violet-400"
            aria-hidden="true"
          />

          <span className="font-display text-base font-semibold text-white">
            Flicker
          </span>
        </div>

     
        <p className="text-sm text-slate-400">
          © 2026 Flicker. Show data courtesy of TVMaze.
        </p>
    
        <div className="flex items-center gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="text-slate-400 transition-colors hover:text-violet-400"
          >
            <FaGithub className="text-xl" />
          </a>

          <a
            href="https://www.tvmaze.com"
            target="_blank"
            rel="noreferrer"
            aria-label="TVMaze API"
            title="TVMaze API"
            className="text-slate-400 transition-colors hover:text-violet-400"
          >
            <FaDatabase className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}