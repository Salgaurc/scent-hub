import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-xl font-bold tracking-wider text-slate-900"
        >
          SCENT HUB
        </Link>

        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-700">
            <li>
              <Link to="/" className="hover:text-black">
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-black">
                Shop
              </Link>
            </li>

            <li>
              <Link to="/collections" className="hover:text-black">
                Collections
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button className="text-sm font-medium">Search</button>

          <button className="text-sm font-medium">Cart</button>

          <button className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-100">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
