import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogout } from "../firebase/auth/authService";
import { clearUser } from "../redux/authSlice";
import { FaUserShield, FaSignOutAlt, FaCog } from "react-icons/fa";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await adminLogout();
    } catch (error) {
      console.log(error);
    }

    dispatch(clearUser());
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-10 px-4">
      {/* Header Card */}
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-8 mb-8 border border-blue-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaUserShield className="text-blue-500 text-4xl" />
            <div>
              <p className="text-gray-500 text-sm">
                Manage your school website efficiently and securely.
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2.5 rounded-lg shadow transition-all duration-200"
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {/* Admin Info Section */}
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
          <FaCog className="text-blue-500" />
          Admin Information
        </h2>

        <p className="text-gray-600 mb-6">
          Signed in as:{" "}
          <span className="font-medium text-blue-600">
            {auth.user?.email ?? "Unknown"}
          </span>
        </p>

        {/* Admin Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-b from-blue-50 to-white p-5 rounded-xl border border-blue-100 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Manage Content
            </h3>
            <p className="text-gray-600 text-sm">
              Upload, update, or delete website content like banners, text, and
              media.
            </p>
          </div>

          <div className="bg-gradient-to-b from-green-50 to-white p-5 rounded-xl border border-green-100 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              Manage Events
            </h3>
            <p className="text-gray-600 text-sm">
              Add upcoming events, announcements, or school activities easily.
            </p>
          </div>

          <div className="bg-gradient-to-b from-purple-50 to-white p-5 rounded-xl border border-purple-100 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              Manage Users
            </h3>
            <p className="text-gray-600 text-sm">
              Control user access, monitor admin activity, and ensure security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
