import { useState } from "react";
import BookDetail from "./BookDetail";
import noImage from "@/assets/images/img_noImagepng.png";

const Book = ({ book }) => {
    const [isOpen, setIsOpen] = useState(false);

    const coverImg = book?.volumeInfo?.imageLinks?.thumbnail;
    const title = book?.volumeInfo.title;
    const publishedDate = book?.volumeInfo?.publishedDate;
    return (
        <section className=" duration-200">
            {isOpen ? <BookDetail book={book} setIsOpen={setIsOpen} /> : ""}
            <div
                onClick={() => setIsOpen(true)}
                className="shadow hover:shadow-lg w-48 rounded-md group overflow-hidden bg-black/40 cursor-pointer "
            >
                <div className="overflow-hidden">
                    <img
                        src={coverImg ? coverImg : noImage}
                        alt={title}
                        className="w-full object-cover h-64 group-hover:scale-110 duration-200 "
                    />
                </div>

                <div className="p-2">
                    <h3 className="text-xl font-semibold line-clamp-1 ">
                        {" "}
                        {title}{" "}
                    </h3>
                    <p className="text-gray-400">
                        {" "}
                        {publishedDate ? publishedDate : "Unknown"}{" "}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Book;
