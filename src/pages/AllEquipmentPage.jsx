import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AllEquipmentPage = () => {
  const [equipmentList, setEquipmentList] = useState([]);
  const [sortedList, setSortedList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); // Track sorting order
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEquipment = async () => {
      try {
        const response = await axios.get("http://localhost:5001/equipment");
        setEquipmentList(response.data);
        setSortedList(response.data); // Initialize sortedList with fetched data
      } catch (error) {
        console.error("Error fetching equipment:", error);
        setError("Failed to load equipment. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEquipment();
  }, []);

  const handleViewDetails = (id) => {
    navigate(`/equipment/${id}`);
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    const sorted = [...equipmentList].sort((a, b) => {
      if (newSortOrder === "asc") {
        return a.price - b.price; // Ascending order
      } else {
        return b.price - a.price; // Descending order
      }
    });

    setSortedList(sorted);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-800">
        <div className="loader border-t-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-800">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center">
      <div className="max-w-6xl w-full bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            All Equipment
          </h2>
          <button
            onClick={handleSort}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-600"
          >
            Sort by Price
          </button>
        </div>
        {sortedList.length > 0 ? (
          <table className="table-auto w-full border-collapse border border-gray-200 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-600">
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 dark:text-white">
                  Name
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 dark:text-white">
                  Category
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 dark:text-white">
                  Price
                </th>
                <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedList.map((equipment) => (
                <tr key={equipment._id} className="text-center">
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 dark:text-white">
                    {equipment.itemName}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 dark:text-white">
                    {equipment.categoryName}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 dark:text-white">
                    ${equipment.price}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-600 px-4 py-2 ">
                    <button
                      onClick={() => handleViewDetails(equipment._id)}
                      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-gray-600"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No equipment available.
          </p>
        )}
      </div>
    </div>
  );
};

export default AllEquipmentPage;
