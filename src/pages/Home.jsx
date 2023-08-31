import { useDispatch, useSelector } from "react-redux";
import { BNFound, BooksList } from "@/features";
import { useGetAllSearchBooksQuery } from "@/features/book/bookApi";
import { BookLoader, HBanner } from "@/components";
import { setKeyword } from "@/features/book/bookSlice";
import { useState } from "react";

const Home = () => {
    const { keyword, size, startIndex } = useSelector((state) => state.books);
    const [search, setSearch] = useState("");
    const { data, isLoading } = useGetAllSearchBooksQuery({
        keyword,
        size,
        startIndex,
    });
    const searchedBooks = data?.items;
    const dispatch = useDispatch();
    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setKeyword(e.target.value));
        setSearch(e.target.value);
    };

    const clearSearch = (e) => {
        e.preventDefault();
        dispatch(setKeyword("react"));
        setSearch("");
    };

    if (isLoading) {
        return (
            <div className="flex items-center w-full justify-center">
                <BookLoader />
            </div>
        );
    }

    return (
        <section className="w-full">
            <HBanner
                search={search}
                handleSearch={handleSearch}
                clearSearch={clearSearch}
            />
            {searchedBooks?.length > 1 ? (
                <BooksList
                    books={searchedBooks}
                    totalItems={data?.totalItems}
                />
            ) : (
                <BNFound keyword={search} />
            )}
        </section>
    );
};

export default Home;
