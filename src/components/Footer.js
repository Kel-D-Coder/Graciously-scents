

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © {new Date().getFullYear()} Your Website Name. Made by <p className="text-pink-500 hover:underline">Kel-D-coder</p>.
                </p>
            </div>
        </footer>

    )
}