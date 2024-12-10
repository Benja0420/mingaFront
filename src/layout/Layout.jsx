import { Outlet } from "react-router-dom"

import Navbar from "./components/navbar/Navbar.jsx"
import Footer from "./components/footer/Footer.jsx"

function Layout() {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className="bg-gray-500 min-h-[100vh] flex flex-col">
                <Outlet />
            </main>
            <Footer />
        </>

    )
}

export default Layout