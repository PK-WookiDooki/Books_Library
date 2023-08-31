import React from "react";

const BookCategories = ({ categories }) => {
    return (
        <div className="flex items-center gap-2">
            {categories?.map((item) => {
                return (
                    <span
                        key={item}
                        className="px-2 py-1 rounded-md bg-emerald-700 text-white text-sm"
                    >
                        {item}{" "}
                    </span>
                );
            })}
        </div>
    );
};

export default BookCategories;
