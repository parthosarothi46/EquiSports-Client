import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const UpdateEquipmentPage = () => {
  const { id } = useParams(); // Get the equipment ID from the URL
  const navigate = useNavigate();
  const { user } = useAuth(); // Get the logged-in user's data
  const [equipmentData, setEquipmentData] = useState({
    image: "",
    itemName: "",
    categoryName: "",
    description: "",
    price: "",
    rating: "",
    customization: "",
    processingTime: "",
    stockStatus: "",
  });

  useEffect(() => {
    const fetchEquipmentData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/equipment/${id}`
        );
        if (response.data) {
          setEquipmentData(response.data);
        } else {
          toast.error("Equipment not found");
          navigate("/my-equipment"); // Redirect if item is not found
        }
      } catch (error) {
        console.error("Error fetching equipment:", error);
        toast.error("Failed to fetch equipment details");
      }
    };
    fetchEquipmentData();
  }, [id, navigate]);

  const handleChange = (e) => {
    setEquipmentData({ ...equipmentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { _id, ...dataToSubmit } = equipmentData; // Exclude _id from submission

      const updatedData = {
        ...dataToSubmit,
        userEmail: user.email, // Read-only user email
        userName: user.displayName, // Read-only user name
      };

      await axios.put(
        `http://localhost:5001/update-equipment/${id}`,
        updatedData
      );
      toast.success("Equipment updated successfully");
      navigate("/my-equipment");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message); // Log error details
      toast.error("Failed to update equipment");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-xl w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Update Equipment
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="itemName"
            value={equipmentData.itemName}
            onChange={handleChange}
            placeholder="Item Name"
            className="input-field"
          />
          <input
            type="text"
            name="categoryName"
            value={equipmentData.categoryName}
            onChange={handleChange}
            placeholder="Category Name"
            className="input-field"
          />
          <textarea
            name="description"
            value={equipmentData.description}
            onChange={handleChange}
            placeholder="Description"
            className="input-field"
          />
          <input
            type="number"
            name="price"
            value={equipmentData.price}
            onChange={handleChange}
            placeholder="Price"
            className="input-field"
          />
          <input
            type="number"
            name="rating"
            value={equipmentData.rating}
            onChange={handleChange}
            placeholder="Rating"
            className="input-field"
          />
          <input
            type="text"
            name="customization"
            value={equipmentData.customization}
            onChange={handleChange}
            placeholder="Customization"
            className="input-field"
          />
          <input
            type="text"
            name="processingTime"
            value={equipmentData.processingTime}
            onChange={handleChange}
            placeholder="Processing Time (Delivery)"
            className="input-field"
          />
          <input
            type="number"
            name="stockStatus"
            value={equipmentData.stockStatus}
            onChange={handleChange}
            placeholder="Stock Status"
            className="input-field"
          />
          {/* User Email and User Name are read-only */}
          <input
            type="text"
            value={user.email}
            readOnly
            className="input-field"
            placeholder="User Email"
          />
          <input
            type="text"
            value={user.displayName}
            readOnly
            className="input-field"
            placeholder="User Name"
          />

          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded mt-4"
          >
            Update Equipment
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipmentPage;
