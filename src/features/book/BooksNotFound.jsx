const BooksNotFound = ({ keyword }) => {
    return (
        <section className="text-center mt-11 bg-gray-100 shadow text-black py-5">
            <h3 className="text-xl font-medium">
                {" "}
                There is no books with the title{" "}
                <span className=" capitalize text-orange-500">
                    {" "}
                    {`"${keyword}"`}
                </span>
                .{" "}
            </h3>
        </section>
    );
};

export default BooksNotFound;
