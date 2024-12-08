import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";
import { Helmet } from "react-helmet";

const ViewDetailsPage = () => {
  const { id } = useParams();
  const [equipment, setEquipment] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchEquipmentDetails = async () => {
      try {
        const response = await axios.get(
          `https://b10-a10-server-side-parthosarothi46.vercel.app/equipment/${id}`
        );
        setEquipment(response.data);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchEquipmentDetails();
    }
  }, [id, user]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-white dark:bg-gray-800 px-3 lg:px-4 xl:px-0 pb-5 md:pb-0">
      <Helmet>
        <title>EquiSports | Equipment Details</title>
      </Helmet>
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={equipment.image}
            alt={equipment.itemName}
            className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-md"
          />
          <div className="w-full">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              {equipment.itemName}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              <strong>Category:</strong> {equipment.categoryName}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              <strong>Price:</strong> ${equipment.price}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              <strong>Rating:</strong> {equipment.rating} ⭐
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              <strong>Description:</strong> {equipment.description}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              <strong>Customization:</strong> {equipment.customization}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              <strong>Processing Time:</strong> {equipment.processingTime}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
              <strong>Stock Status:</strong> {equipment.stockStatus}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsPage;
