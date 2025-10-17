import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../../supabase/supabaseClient";
import Loader from "../../UiBlocks/Loader";
const CLOUD_NAME = "dyalydbjx"; // your Cloudinary cloud name
const UPLOAD_PRESET = "almansoor"; // your unsigned upload preset

const EditEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    image_url: "",
  });
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);
  const [newImage, setNewImage] = useState(null);

  // Fetch event data
  const fetchEvent = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .eq("id", id)
      .single();

    if (error) console.error("Error fetching event:", error);
    else setEvent(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchEvent();
  }, [id]);

  // Upload image to Cloudinary
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();
    return data.secure_url;
  };

  // Update event
  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);

    let imageUrl = event.image_url;

    // if user uploaded new image → upload to Cloudinary
    if (newImage) {
      try {
        imageUrl = await uploadToCloudinary(newImage);
      } catch (err) {
        console.error("Error uploading image:", err);
        alert("Image upload failed. Try again.");
        setUpdating(false);
        return;
      }
    }

    const { error } = await supabase
      .from("events")
      .update({
        title: event.title,
        description: event.description,
        date: event.date,
        image_url: imageUrl,
      })
      .eq("id", id);

    if (error) {
      console.error("Error updating event:", error);
      alert("Failed to update event. Please try again.");
    } else {
      alert("✅ Event updated successfully!");
      navigate("/adminpanel");
    }

    setUpdating(false);
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">✏️ Edit Event</h2>

      {/* Current Image */}
      {event.image_url && (
        <div className="mb-4 text-center">
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full h-64 object-cover rounded-lg mb-2"
          />
          <p className="text-sm text-gray-500">Current event image</p>
        </div>
      )}

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
          className="w-full border rounded-lg p-2"
          placeholder="Event Title"
          required
        />

        <input
          type="date"
          value={event.date}
          onChange={(e) => setEvent({ ...event, date: e.target.value })}
          className="w-full border rounded-lg p-2"
          required
        />

        <textarea
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
          className="w-full border rounded-lg p-2 h-32"
          placeholder="Event Description"
          required
        />

        {/* New Image Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload New Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewImage(e.target.files[0])}
            className="w-full border rounded-lg p-2"
          />
          {newImage && (
            <p className="text-sm text-green-600 mt-1">
              New image selected: {newImage.name}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={updating}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition"
        >
          {updating ? "Updating..." : "Update Event"}
        </button>
      </form>

      <button
        onClick={() => navigate(-1)}
        className="w-full mt-4 bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-lg"
      >
        ← Go Back
      </button>
    </div>
  );
};

export default EditEvent;
