import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const AddEquipmentPage = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5001/add-equipment", {
        ...formData,
        userEmail: user.email,
        userName: user.displayName,
      });
      toast.success("Equipment added successfully!");
      navigate("/my-equipment");
    } catch (error) {
      toast.error("Failed to add equipment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Add New Equipment
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Image URL */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Item Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Item Name</label>
            <input
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter item name"
              required
            />
          </div>

          {/* Category Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Category Name
            </label>
            <input
              type="text"
              name="categoryName"
              value={formData.categoryName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter category name"
              required
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter description"
              rows="4"
              required
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter price"
              required
            />
          </div>

          {/* Rating */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter rating (1-5)"
              required
            />
          </div>

          {/* Customization */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Customization
            </label>
            <input
              type="text"
              name="customization"
              value={formData.customization}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter customization options"
              required
            />
          </div>

          {/* Processing Time */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Processing Time
            </label>
            <input
              type="text"
              name="processingTime"
              value={formData.processingTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter processing/delivery time"
              required
            />
          </div>

          {/* Stock Status */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              Stock Status
            </label>
            <input
              type="number"
              name="stockStatus"
              value={formData.stockStatus}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter available quantity"
              required
            />
          </div>

          {/* User Email (Read-Only) */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">
              User Email
            </label>
            <input
              type="email"
              value={user.email}
              readOnly
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* User Name (Read-Only) */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">User Name</label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Equipment"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddEquipmentPage;
