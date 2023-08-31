import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <section className="w-full flex flex-col gap-7 items-center justify-center">
            <h2 className="text-5xl font-bold"> Oops </h2>
            <p className="font-medium text-lg">
                {" "}
                The page you were looking for is not found!
            </p>

            <Link
                to={"/"}
                className="py-2 px-5 rounded-md bg-red-700 hover:bg-red-600 duration-200"
            >
                {" "}
                Go Back{" "}
            </Link>
        </section>
    );
};

export default PageNotFound;
