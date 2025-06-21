import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Root = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, // animation duration in ms
            once: true,    // whether animation should happen only once
        });
    }, []);
    return (
        <div className="mx-auto font-poppins">
            <Header />
            <Outlet></Outlet>
            <Footer />
            <ToastContainer />
        </div>
    );
}

export default Root;