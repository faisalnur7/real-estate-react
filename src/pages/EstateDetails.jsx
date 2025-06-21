// src/pages/EstateDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EstateDetails = () => {
  const { id } = useParams();
  const [estate, setEstate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/luxuryEstates.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedEstate = data.find(item => item.id === parseInt(id));
        setEstate(selectedEstate);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading estate data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!estate) {
    return <div className="text-center py-20 text-red-500">Estate not found!</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <img src={estate.image} alt={estate.estate_title} className="w-full rounded-lg mb-6 max-h-[500px] object-cover" />
      <h2 className="text-3xl font-bold text-indigo-600 mb-2">{estate.estate_title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{estate.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <p><strong>Location:</strong> {estate.location}</p>
          <p><strong>Segment:</strong> {estate.segment_name}</p>
          <p><strong>Status:</strong> {estate.status}</p>
          <p><strong>Area:</strong> {estate.area}</p>
          <p><strong>Price:</strong> <span className="text-green-600 font-semibold">{estate.price}</span></p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Facilities:</h4>
          <ul className="list-disc list-inside space-y-1">
            {estate.facilities.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
