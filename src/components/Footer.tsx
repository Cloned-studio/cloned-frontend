export default function Footer() {
    return (
        <footer className="bg-black text-gray-400 border-t border-gray-800 py-6">
            <div className="max-w-7xl mx-auto text-center">
                <p>
                    © {new Date().getFullYear()} CLONED.
                    Wear What You Imagine.
                </p>
            </div>
        </footer>
    );
}