import { Link } from "react-router-dom";
import "./link.css";
import NLink from "./NLink";

const Navbar = () => {
    return (
        <nav className="sticky top-0 shadow-md z-10 backdrop-blur-xl bg-black/40">
            <section className="w-[85%] mx-auto py-5 flex items-center justify-between">
                <h1 className=" text-3xl font-cursive">
                    <Link to={"/"}>Google Books</Link>
                </h1>

                {/*<ul>
                    <NLink title={"library"} path={"my_library"} />
                </ul>*/}
            </section>
        </nav>
    );
};

export default Navbar;
