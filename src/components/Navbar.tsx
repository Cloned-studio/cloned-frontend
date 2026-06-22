export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-black text-white">
            <h1 className="text-2xl font-bold">
                CLONED
            </h1>

            <div className="flex gap-6">
                <a href="#">Shop</a>
                <a href="#">Login</a>
                <a href="#">Cart</a>
            </div>
        </nav>
    );
}