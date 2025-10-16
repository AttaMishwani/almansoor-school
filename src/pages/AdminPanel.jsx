// src/pages/AdminPanel.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase/supabaseClient"; // Your Supabase client
import { clearUser, setUser } from "../redux/authSlice";
import PostEvent from "../components/adminPanel/PostEvent";
import ManageEvents from "../components/adminPanel/ManageEvents";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("postEvent");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  // Check session on mount
  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      if (data.session) {
        dispatch(
          setUser({ email: data.session.user.email, uid: data.session.user.id })
        );
      } else {
        navigate("/admin-auth");
      }
    });

    // Listen for auth changes (optional)
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          dispatch(
            setUser({ email: session.user.email, uid: session.user.id })
          );
        } else {
          dispatch(clearUser());
          navigate("/admin-auth");
        }
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, [dispatch, navigate]);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      dispatch(clearUser());
      navigate("/admin-auth");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  // Render tab content
  const renderContent = () => {
    switch (activeTab) {
      case "postEvent":
        return <PostEvent />;
      case "manageEvents":
        return <ManageEvents />;
      case "siteSettings":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Site Settings</h2>
            <p className="text-gray-600">
              Adjust website configurations and preferences (dummy content).
            </p>
          </div>
        );
      case "analytics":
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
            <p className="text-gray-600">
              View traffic and engagement statistics (dummy content).
            </p>
          </div>
        );
      default:
        return <p>Select a tab to begin.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold text-center mb-6">Admin Panel</h1>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("postEvent")}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition ${
                activeTab === "postEvent"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-50 text-gray-700"
              }`}
            >
              📅 Post New Event
            </button>

            <button
              onClick={() => setActiveTab("manageEvents")}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition ${
                activeTab === "manageEvents"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-50 text-gray-700"
              }`}
            >
              🧾 Manage Events
            </button>

            <button
              onClick={() => setActiveTab("siteSettings")}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition ${
                activeTab === "siteSettings"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-50 text-gray-700"
              }`}
            >
              ⚙️ Site Settings
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition ${
                activeTab === "analytics"
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-50 text-gray-700"
              }`}
            >
              📊 Analytics
            </button>
          </nav>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleLogout}
            className="px-4 py-2 w-full bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-white rounded-xl shadow p-6">
          <p className="text-sm text-gray-500 mb-2">
            Signed in as:{" "}
            <span className="font-medium">{auth.user?.email}</span>
          </p>

          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
