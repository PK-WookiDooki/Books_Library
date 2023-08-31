import { useGetBooksFromShelvesQuery } from "@/features/book/bookApi";

const MyLibrary = () => {
    const { data } = useGetBooksFromShelvesQuery();

    console.log(data);

    return <div></div>;
};

export default MyLibrary;
