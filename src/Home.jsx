import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen ">
            <Navbar />
            <main className="flex-grow container mx-auto">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Home;