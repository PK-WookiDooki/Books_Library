import { Outlet } from "react-router-dom";
import { Nav } from "@/components";

const MainLayout = () => {
    return (
        <main className="flex flex-col bg-gradient-to-r from-[#32374d] via-[#d6a378] to-[#67141e] text-white min-h-screen">
            <Nav />

            <section className="flex flex-1">
                <Outlet />
            </section>

            <footer className=" py-7 text-center bg-slate-900 mt-auto">
                <p> Book Library Footer </p>
            </footer>
        </main>
    );
};

export default MainLayout;
