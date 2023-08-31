import { BookPagination } from "@/components";
import Book from "./Book";

const BooksList = ({ books, totalItems }) => {
    return (
        <section className="w-[80%] mx-auto py-5 ">
            <div className="flex flex-wrap gap-5 justify-center ">
                {books?.map((book) => {
                    return <Book key={book?.id} book={book} />;
                })}
            </div>
            <BookPagination totalItems={totalItems} />
        </section>
    );
};

export default BooksList;
