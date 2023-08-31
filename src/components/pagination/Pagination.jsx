import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginateBtn from "./PaginateBtn";
import { setStartIndex } from "@/features/book/bookSlice";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

const Pagination = ({ totalItems }) => {
    const { size } = useSelector((state) => state.books);

    const [activePage, setActivePage] = useState(1);

    const totalPages = totalItems > 100 ? 10 : Math.ceil(totalItems / size);
    const dispatch = useDispatch();

    const handlePageChange = (pageNumber) => {
        dispatch(setStartIndex(pageNumber));
        setActivePage(pageNumber + 1);
    };

    const nextPage = () => {
        if (activePage < 10) {
            dispatch(setStartIndex(activePage));
            setActivePage(activePage + 1);
        }
    };

    const previousPage = () => {
        if (activePage > 0) {
            dispatch(setStartIndex(activePage - 2));
            setActivePage(activePage - 1);
        }
    };

    return (
        <section className="mt-5">
            <div className="md:flex hidden gap-2 flex-wrap justify-center">
                <PaginateBtn
                    title={<BsArrowBarLeft />}
                    activePoint={1}
                    event={previousPage}
                    activePage={activePage}
                    isArrow={true}
                />
                {Array(totalPages)
                    .fill(null)
                    .map((_, index) => {
                        return (
                            <PaginateBtn
                                key={index}
                                title={index + 1}
                                event={() => handlePageChange(index)}
                                activePage={activePage}
                                activePoint={index + 1}
                            />
                        );
                    })}
                <PaginateBtn
                    title={<BsArrowBarRight />}
                    activePoint={totalPages}
                    event={nextPage}
                    activePage={activePage}
                    isArrow={true}
                />
            </div>

            <div className="md:hidden flex flex-col gap-3">
                <p className="text-center text-xl p-1 rounded-md border border-white">
                    {" "}
                    {activePage + " / " + totalPages} Pages{" "}
                </p>
                <div className="flex items-center justify-between ">
                    <PaginateBtn
                        title={"Previous"}
                        activePoint={1}
                        event={previousPage}
                        activePage={activePage}
                        isText={true}
                    />
                    <div className="ml-auto">
                        <PaginateBtn
                            title={"Next"}
                            activePoint={totalPages}
                            event={nextPage}
                            activePage={activePage}
                            isText={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pagination;
