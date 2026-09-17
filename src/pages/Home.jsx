import { Link } from "react-router-dom";
import { FaSearch, FaArrowRight, FaLayerGroup } from "react-icons/fa";
import { MdMovie, MdInfoOutline } from "react-icons/md";
import HeroBanner from "../components/HeroBanner.jsx";

const highlights = [
  {
    icon: FaSearch,
    title: "Search by title",
    body: "Find any show in the catalog quickly and easily.",
  },
  {
    icon: FaLayerGroup,
    title: "Browse the catalog",
    body: "Explore a collection of shows from the TVMaze database.",
  },
  {
    icon: MdInfoOutline,
    title: "View show details",
    body: "Check ratings, genres, descriptions, and other information.",
  },
];

export default function Home() {
  return (
    <>
      <HeroBanner />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <MdMovie
            className="mx-auto mb-3 text-4xl text-violet-400"
            aria-hidden="true"
          />

          <h2 className="font-display text-3xl font-bold text-white">
            Explore your favorite shows
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            Search for shows, browse the catalog, and get useful information
            about your favorite titles.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-lg border border-slate-800 bg-slate-900 p-6 transition-colors hover:border-violet-500"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-slate-800">
                  <Icon
                    className="text-xl text-violet-400"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col gap-5 rounded-lg border border-slate-800 bg-slate-900 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              Ready to find something to watch?
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Browse the complete TVMaze catalog and discover new shows.
            </p>
          </div>

          <Link
            to="/movies"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-violet-500"
          >
            Go to catalog
            <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}