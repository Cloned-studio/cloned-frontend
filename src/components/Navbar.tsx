import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
    return (
        <nav className="bg-black text-white px-8 py-5 border-b border-gray-800">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-3xl font-bold tracking-wide"
                >
                    CLONED
                </Link>

                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/"
                        className="hover:text-gray-400 transition"
                    >
                        Home
                    </Link>

                    <Link
                        to="/shop"
                        className="hover:text-gray-400 transition"
                    >
                        Shop
                    </Link>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-4">

                    {/* Currency */}
                    <select
                        className="bg-black border border-gray-700 rounded px-2 py-1"
                    >
                        <option>SEK</option>
                        <option>EUR</option>
                        <option>USD</option>
                        <option>GBP</option>
                    </select>

                    {/* Cart */}
                    <Link
                        to="/cart"
                        className="text-2xl hover:text-gray-400"
                    >
                        <FiShoppingCart />
                    </Link>

                    {/* Login */}
                    <Link
                        to="/login"
                        className="bg-white text-black px-4 py-2 rounded font-medium hover:bg-gray-300 transition"
                    >
                        Login
                    </Link>

                </div>
            </div>
        </nav>
    );
}