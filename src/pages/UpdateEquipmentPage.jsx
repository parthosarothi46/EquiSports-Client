// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useAuth } from "../context/AuthContext";

// const UpdateEquipmentPage = () => {
//   const { id } = useParams(); // Get the equipment ID from the URL
//   const navigate = useNavigate();
//   const { user } = useAuth(); // Get the logged-in user's data
//   const [equipmentData, setEquipmentData] = useState({
//     image: "",
//     itemName: "",
//     categoryName: "",
//     description: "",
//     price: "",
//     rating: "",
//     customization: "",
//     processingTime: "",
//     stockStatus: "",
//   });

//   useEffect(() => {
//     const fetchEquipmentData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5001/equipment/${id}`
//         );
//         if (response.data) {
//           setEquipmentData(response.data);
//         } else {
//           toast.error("Equipment not found");
//           navigate("/my-equipment"); // Redirect if item is not found
//         }
//       } catch (error) {
//         console.error("Error fetching equipment:", error);
//         toast.error("Failed to fetch equipment details");
//       }
//     };
//     fetchEquipmentData();
//   }, [id, navigate]);

//   const handleChange = (e) => {
//     setEquipmentData({ ...equipmentData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { _id, ...dataToSubmit } = equipmentData; // Exclude _id from submission

//       const updatedData = {
//         ...dataToSubmit,
//         userEmail: user.email, // Read-only user email
//         userName: user.displayName, // Read-only user name
//       };

//       await axios.put(
//         `http://localhost:5001/update-equipment/${id}`,
//         updatedData
//       );
//       toast.success("Equipment updated successfully");
//       navigate("/my-equipment");
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message); // Log error details
//       toast.error("Failed to update equipment");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
//       <div className="max-w-xl w-full bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Update Equipment
//         </h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="itemName"
//             value={equipmentData.itemName}
//             onChange={handleChange}
//             placeholder="Item Name"
//             className="input-field"
//           />
//           <input
//             type="text"
//             name="categoryName"
//             value={equipmentData.categoryName}
//             onChange={handleChange}
//             placeholder="Category Name"
//             className="input-field"
//           />
//           <textarea
//             name="description"
//             value={equipmentData.description}
//             onChange={handleChange}
//             placeholder="Description"
//             className="input-field"
//           />
//           <input
//             type="number"
//             name="price"
//             value={equipmentData.price}
//             onChange={handleChange}
//             placeholder="Price"
//             className="input-field"
//           />
//           <input
//             type="number"
//             name="rating"
//             value={equipmentData.rating}
//             onChange={handleChange}
//             placeholder="Rating"
//             className="input-field"
//           />
//           <input
//             type="text"
//             name="customization"
//             value={equipmentData.customization}
//             onChange={handleChange}
//             placeholder="Customization"
//             className="input-field"
//           />
//           <input
//             type="text"
//             name="processingTime"
//             value={equipmentData.processingTime}
//             onChange={handleChange}
//             placeholder="Processing Time (Delivery)"
//             className="input-field"
//           />
//           <input
//             type="number"
//             name="stockStatus"
//             value={equipmentData.stockStatus}
//             onChange={handleChange}
//             placeholder="Stock Status"
//             className="input-field"
//           />
//           {/* User Email and User Name are read-only */}
//           <input
//             type="text"
//             value={user.email}
//             readOnly
//             className="input-field"
//             placeholder="User Email"
//           />
//           <input
//             type="text"
//             value={user.displayName}
//             readOnly
//             className="input-field"
//             placeholder="User Name"
//           />

//           <button
//             type="submit"
//             className="bg-green-500 text-white px-4 py-2 rounded mt-4"
//           >
//             Update Equipment
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateEquipmentPage;

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

const UpdateEquipmentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
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
          navigate("/my-equipment");
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
      const { _id, ...dataToSubmit } = equipmentData;

      const updatedData = {
        ...dataToSubmit,
        userEmail: user.email,
        userName: user.displayName,
      };

      await axios.put(
        `http://localhost:5001/update-equipment/${id}`,
        updatedData
      );
      toast.success("Equipment updated successfully");
      navigate("/my-equipment");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error("Failed to update equipment");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col justify-center items-center py-8">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          Update Equipment
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Item Name and Category Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="itemName"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Item Name
              </label>
              <input
                type="text"
                name="itemName"
                value={equipmentData.itemName}
                onChange={handleChange}
                placeholder="Item Name"
                className="input-field border rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="categoryName"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Category Name
              </label>
              <input
                type="text"
                name="categoryName"
                value={equipmentData.categoryName}
                onChange={handleChange}
                placeholder="Category Name"
                className="input-field border rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Description
            </label>
            <textarea
              name="description"
              value={equipmentData.description}
              onChange={handleChange}
              placeholder="Description"
              className="input-field border rounded-lg p-3 w-full h-32 focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Price and Rating */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                value={equipmentData.price}
                onChange={handleChange}
                placeholder="Price"
                className="input-field border rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="rating"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Rating
              </label>
              <input
                type="number"
                name="rating"
                value={equipmentData.rating}
                onChange={handleChange}
                placeholder="Rating"
                className="input-field border rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Customization and Processing Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="customization"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Customization
              </label>
              <input
                type="text"
                name="customization"
                value={equipmentData.customization}
                onChange={handleChange}
                placeholder="Customization"
                className="input-field border rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="processingTime"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Processing Time
              </label>
              <input
                type="text"
                name="processingTime"
                value={equipmentData.processingTime}
                onChange={handleChange}
                placeholder="Processing Time"
                className="input-field border rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Stock Status */}
          <div className="space-y-2">
            <label
              htmlFor="stockStatus"
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Stock Status
            </label>
            <input
              type="number"
              name="stockStatus"
              value={equipmentData.stockStatus}
              onChange={handleChange}
              placeholder="Stock Status"
              className="input-field border rounded-lg p-3 w-full focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* User Email and User Name (Read-Only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                User Email
              </label>
              <input
                type="text"
                value={user.email}
                readOnly
                className="input-field border rounded-lg p-3 w-full bg-gray-100 dark:bg-gray-600 dark:text-gray-300 cursor-not-allowed"
                placeholder="User Email"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="userName"
                className="text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                User Name
              </label>
              <input
                type="text"
                value={user.displayName}
                readOnly
                className="input-field border rounded-lg p-3 w-full bg-gray-100 dark:bg-gray-600 dark:text-gray-300 cursor-not-allowed"
                placeholder="User Name"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 text-lg bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Update Equipment
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEquipmentPage;
