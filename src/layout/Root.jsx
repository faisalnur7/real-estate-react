import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
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