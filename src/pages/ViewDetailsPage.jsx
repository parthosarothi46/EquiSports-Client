import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const ViewDetailsPage = () => {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchEquipmentDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/equipment/${id}`
        );
        setEquipment(response.data);
      } catch (err) {
        setError("Failed to fetch equipment details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchEquipmentDetails();
    }
  }, [id, user]);

  if (!user) {
    return (
      <div className="text-red-500 text-center mt-4">
        You must be logged in to view this page.
      </div>
    );
  }

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={equipment.image}
            alt={equipment.itemName}
            className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md"
          />
          <div className="w-full">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {equipment.itemName}
            </h1>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Category:</strong> {equipment.categoryName}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Price:</strong> ${equipment.price}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Rating:</strong> {equipment.rating} ⭐
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Description:</strong> {equipment.description}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Customization:</strong> {equipment.customization}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Processing Time:</strong> {equipment.processingTime}
            </p>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Stock Status:</strong> {equipment.stockStatus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;
