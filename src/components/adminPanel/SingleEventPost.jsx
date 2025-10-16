import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import Loader from "../../UiBlocks/Loader";

const SingleEventPost = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchEvent = async (id) => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setEvent(data);
    } catch (error) {
      console.error("Error fetching event:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvent(id);
  }, [id]);

  const backtoAdminPanel = () => {
    navigate("/adminpanel");
  };

  if (loading) return <Loader />;
  if (!event)
    return (
      <p className="text-center text-red-500 mt-10 text-lg font-medium">
        Event not found!
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Header / Image */}
        <div className="relative">
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full h-72 object-cover"
          />
          <button
            onClick={backtoAdminPanel}
            className="absolute top-4 left-4 bg-white/80 hover:bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all"
          >
            ← Go Back
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            {event.title}
          </h1>

          <p className="text-gray-500 mb-6 flex items-center gap-2">
            <span className="text-lg">📅</span>
            <span>{new Date(event.date).toLocaleDateString()}</span>
          </p>

          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            {event.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleEventPost;
