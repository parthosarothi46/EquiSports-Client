import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import DeleteConfirmationModal from "../components/DeleteConfirmationModal";

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
            `http://localhost:5001/user-equipment?email=${user.email}`
          );
          setEquipmentList(response.data);
        } catch (error) {
          console.error("Error fetching user equipment:", error);
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
        `http://localhost:5001/delete-equipment/${selectedEquipment._id}`
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
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-6xl w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          My Equipment List
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {equipmentList.map((equipment) => (
            <div
              key={equipment._id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <img
                src={equipment.image}
                alt={equipment.itemName}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{equipment.itemName}</h3>
              <p className="text-gray-600">
                Category: {equipment.categoryName}
              </p>
              <p className="text-gray-600">Price: ${equipment.price}</p>
              <p className="text-gray-600">Rating: {equipment.rating}</p>
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
