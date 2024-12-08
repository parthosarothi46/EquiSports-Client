import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const MyEquipmentPage = () => {
  const { user } = useAuth();
  const [equipmentList, setEquipmentList] = useState([]);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const fetchUserEquipment = async () => {
        try {
          const response = await axios.get(
            `https://b10-a10-server-side-parthosarothi46.vercel.app/user-equipment?email=${user.email}`
          );
          setEquipmentList(response.data);
        } catch (error) {
          toast.error("Error fetching user equipment");
        }
      };
      fetchUserEquipment();
    }
  }, [user]);

  const handleUpdate = (id) => {
    navigate(`/update-equipment/${id}`);
  };

  const handleDelete = (equipment) => {
    setSelectedEquipment(equipment);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(
        `https://b10-a10-server-side-parthosarothi46.vercel.app/delete-equipment/${selectedEquipment._id}`
      );
      setEquipmentList(
        equipmentList.filter((item) => item._id !== selectedEquipment._id)
      );
      toast.success("Equipment deleted successfully");
    } catch (error) {
      toast.error("Failed to delete equipment");
    }
    setShowDeleteModal(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white dark:bg-gray-800 px-3 lg:px-4 xl:px-0 py-5">
      <Helmet>
        <title>EquiSports | My Equipment</title>
      </Helmet>
      <div className="max-w-6xl w-full p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          My Equipment List
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {equipmentList.map((equipment) => (
            <div
              key={equipment._id}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-4"
            >
              <img
                src={equipment.image}
                alt={equipment.itemName}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {equipment.itemName}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Category: {equipment.categoryName}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Price: ${equipment.price}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Rating: {equipment.rating}
              </p>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleUpdate(equipment._id)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(equipment)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showDeleteModal && (
        <DeleteConfirmationModal
          onConfirm={confirmDelete}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default MyEquipmentPage;
