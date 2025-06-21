import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const sliderData = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        heading: "Live the Luxury Life",
        subtext: "Explore world-class estates and private paradises",
        cta: "View Listings",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1599423300746-b62533397364",
        heading: "Beachfront Bliss",
        subtext: "Wake up to ocean views every day",
        cta: "View Listings",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
        heading: "Modern Mansions",
        subtext: "Design, space, and elegance combined",
        cta: "View Listings",
    }
];

const HeroSlider = () => {
    return (
        <section className="w-full h-[80vh] relative">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop
                className="w-full h-full"
            >
                {sliderData.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className="w-full h-full bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
                                <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
                                    {slide.heading}
                                </h2>
                                <p className="text-white text-lg md:text-2xl mb-6">{slide.subtext}</p>
                                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition">
                                    {slide.cta}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default HeroSlider;
