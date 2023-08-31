import { RxCross1 } from "react-icons/rx";
import BookCategories from "./BookCategories";
import BookAuthors from "./BookAuthors";
import { IText } from "@/components";
import noImage from "@/assets/images/img_noImagepng.png";
import { Link } from "react-router-dom";

const BookDetail = ({ book, setIsOpen }) => {
    const coverImg = book?.volumeInfo?.imageLinks?.thumbnail;
    const authors = book?.volumeInfo.authors;
    const desc = book?.volumeInfo.description;
    const title = book?.volumeInfo.title;
    const publishedDate = book?.volumeInfo?.publishedDate;
    const totalPages = book?.volumeInfo.pageCount;
    const catTypes = book?.volumeInfo.categories;
    const bookLink = book?.volumeInfo.canonicalVolumeLink;

    return (
        <section className=" fixed w-full h-full top-0 left-0 z-20 bg-black/60 flex items-center justify-center">
            <div className=" max-w-3xl w-full rounded-md bg-white flex flex-col text-black m-5 md:m-0 max-h-[85%] overflow-hidden ">
                <div className="flex p-3 justify-end ">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-3xl text-black"
                    >
                        {" "}
                        <RxCross1 />{" "}
                    </button>
                </div>
                <div className="flex flex-col md:flex-row gap-5 p-3 bg-gray-100 overflow-scroll">
                    <img
                        src={coverImg ? coverImg : noImage}
                        alt={title}
                        className="md:w-full max-w-[250px] md:h-[350px] h-44 object-cover mx-auto shadow"
                    />

                    <div className="flex flex-col gap-2 w-full">
                        <BookCategories categories={catTypes} />
                        <h3 className="text-2xl font-bold"> {title} </h3>
                        <p className="text-gray-500 line-clamp-6 tracking-wide ">
                            {" "}
                            {desc
                                ? desc
                                : "There's no description provided for the book!"}{" "}
                        </p>

                        <IText title={"Published Date"} info={publishedDate} />

                        <IText title={"Pages"} info={totalPages} />

                        <IText
                            title={"Author(s)"}
                            info={<BookAuthors authors={authors} />}
                        />

                        <Link
                            to={bookLink}
                            target="_blank"
                            className=" underline text-blue-500 underline-offset-2"
                        >
                            {" "}
                            See More . . .{" "}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetail;
