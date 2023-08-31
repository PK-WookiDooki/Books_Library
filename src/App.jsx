import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Home, Library, PNFound } from "@/pages";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="my_library" element={<Library />} />
                <Route path="*" element={<PNFound />}></Route>
            </Route>
        </Routes>
    );
};

export default App;
