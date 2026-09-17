import { FaSpinner } from "react-icons/fa";

export default function Loader({ label = "Loading titles..." }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-slate-400">
      <FaSpinner
        className="animate-spin text-3xl text-violet-400"
        role="status"
        aria-label={label}
      />

      <p className="font-sans text-sm">{label}</p>
    </div>
  );
}