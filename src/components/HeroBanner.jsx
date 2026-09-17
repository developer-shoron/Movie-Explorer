import { Link } from "react-router-dom";
import { MdMovie } from "react-icons/md";

export default function HeroBanner() {
  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-5 py-24 text-center sm:py-32">
        {/* Small Label */}
        <div className="mb-6 flex items-center gap-2 text-sm font-medium text-violet-400">
          <MdMovie className="text-lg" aria-hidden="true" />
          <span>Discover your next favorite show</span>
        </div>

        {/* Heading */}
        <h1 className="font-sans text-4xl font-bold leading-tight text-white sm:text-6xl">
          Every story starts
          <br />
          with a single frame.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl font-sans text-base leading-7 text-slate-400 sm:text-lg">
          Flicker brings thousands of shows together in one place. Search by
          title, browse the catalog, and explore detailed information before
          you decide what to watch.
        </p>

        {/* CTA */}
        <Link
          to="/movies"
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-8 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-violet-500"
        >
          <MdMovie aria-hidden="true" />
          Explore Now
        </Link>
      </div>
    </section>
  );
}