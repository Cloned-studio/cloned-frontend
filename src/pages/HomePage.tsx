import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">

            <Navbar />

            <main className="flex-1 flex items-center justify-center px-6">

                <div className="text-center max-w-3xl">

                    <h1 className="text-6xl md:text-8xl font-bold">
                        CLONED
                    </h1>

                    <p className="mt-6 text-2xl text-gray-400">
                        Wear What You Imagine.
                    </p>

                    <p className="mt-6 text-lg text-gray-500">
                        Discover fashion inspired by creativity,
                        individuality, and imagination.
                    </p>

                    <Link
                        to="/shop"
                        className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-300 transition"
                    >
                        Shop Now
                    </Link>

                </div>

            </main>

            <Footer />

        </div>
    );
}