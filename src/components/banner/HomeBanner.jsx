import { RxCross1 } from "react-icons/rx";
import bookBg from "@/assets/images/img_bookbg.jpg";
import "./banner.css";

const HomeBanner = ({ search, handleSearch, clearSearch }) => {
    return (
        <div className="relative">
            <img
                src={bookBg}
                alt="Books"
                className=" object-cover w-full max-h-[440px]"
            />
            <div className="text-blk">
                <h2 className=" banner-text ">
                    {" "}
                    The more that you read, <br /> the more things you will
                    know.
                </h2>

                <form className="input-group">
                    <input
                        value={search}
                        onChange={handleSearch}
                        type="text"
                        className="form-input"
                        name="keyword"
                        placeholder="Search book here . . ."
                    />
                    <button
                        onClick={clearSearch}
                        className={` ${
                            search.trim().length > 0 ? "block" : "hidden"
                        } clear-btn `}
                    >
                        {" "}
                        <RxCross1 />{" "}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HomeBanner;
