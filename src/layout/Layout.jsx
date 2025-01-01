import { Outlet } from "react-router-dom"

import Navbar from "./components/navbar/Navbar.jsx"
import Footer from "./components/footer/Footer.jsx"

function Layout() {
    return (
        <>
            <header className="relative">
                <Navbar />
            </header>
            <main className="min-h-[100vh] flex">
                <Outlet />
            </main>
            <Footer />
        </>

    )
}

export default Layout