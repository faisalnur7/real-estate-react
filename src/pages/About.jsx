import { useContext, useEffect } from "react";
import { TitleContext } from "../contexts/TitleContext";

const About = () => {

    const { setTitle } = useContext(TitleContext);
    useEffect(() => {
        setTitle("About Us");
        return () => setTitle("");
    }, [setTitle]);


    return (
        <section className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-16">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div data-aos="fade-right">
                    <img
                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811"
                        alt="Luxury Real Estate"
                        className="rounded-xl shadow-lg w-full"
                    />
                </div>

                {/* Content */}
                <div data-aos="fade-left">
                    <h2 className="text-4xl font-bold mb-6">
                        Welcome to <span className="text-indigo-600">Luxury Estates</span>
                    </h2>
                    <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                        At Luxury Estates, we bring you a curated selection of the world’s most exquisite properties — from beachfront villas and hillside mansions to private islands and luxury resorts.
                    </p>
                    <p className="mb-6 leading-relaxed text-gray-600 dark:text-gray-300">
                        With a passion for elegance and attention to detail, our team of real estate experts ensures a seamless experience whether you're buying your dream home or investing in a rare retreat.
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src="https://i.ibb.co/2FsfXqM/blank-avatar.jpg"
                            alt="Founder"
                            className="w-16 h-16 rounded-full border-2 border-indigo-600"
                        />
                        <div>
                            <p className="font-semibold text-lg">Faisal Nur</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Founder & CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
