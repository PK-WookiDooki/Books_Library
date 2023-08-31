const PaginateBtn = ({
    title,
    event,
    activePage,
    activePoint,
    isText,
    isArrow,
}) => {
    return isText ? (
        <button
            onClick={event}
            className={` ${
                activePage === activePoint ? "hidden" : "block"
            } h-9 w-32 text-black rounded-md bg-white shadow hover:shadow-md`}
        >
            {title}
        </button>
    ) : (
        <button
            disabled={activePage === activePoint}
            onClick={event}
            className={` ${
                activePage === activePoint && isArrow
                    ? " hidden "
                    : activePage === activePoint
                    ? "  bg-slate-800 text-white "
                    : " bg-white text-emerald-950 "
            } h-9 w-9 rounded-md  shadow-md flex items-center justify-center `}
        >
            {" "}
            {title}{" "}
        </button>
    );
};

export default PaginateBtn;
