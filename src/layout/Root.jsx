import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Root = () => {
    <div className="max-w-[1200px] mx-auto">
        <Header />
        <Navbar />

        <Outlet></Outlet>

        <Footer />
    </div>
}

export default Root;