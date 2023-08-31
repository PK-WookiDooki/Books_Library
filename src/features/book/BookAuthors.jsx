const BookAuthors = ({ authors }) => {
    return (
        <div className="flex items-center gap-1 flex-wrap ">
            {authors?.map((author, index) => {
                return (
                    <span key={index}>
                        {" "}
                        {author}
                        {index < authors?.length - 1 ? " , " : ""}
                    </span>
                );
            })}
        </div>
    );
};

export default BookAuthors;
