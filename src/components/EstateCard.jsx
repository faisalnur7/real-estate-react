import { Link, useLoaderData } from "react-router-dom";

const EstatesCard = () => {

    const estateData = useLoaderData();

    return (
        <section className="max-w-[1200px] mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-10">Featured Estates</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {estateData.map((estate) => (
                    <div
                        key={estate.id} data-aos="zoom-in"
                        data-aos-duration="300"
                        className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
                    >
                        <img
                            src={estate.image}
                            alt={estate.estate_title}
                            className="w-full h-60 object-cover"
                        />

                        <div className="p-5">
                            <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                                {estate.estate_title}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">{estate.location}</p>
                            <p className="text-lg font-bold text-gray-800 dark:text-white mb-4">{estate.price}</p>

                            <Link
                                to={`/estate_details/${estate.id}`}
                                className="inline-block px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EstatesCard;
