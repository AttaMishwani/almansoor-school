// src/components/PostEvent.jsx
import React, { useState } from "react";
import { supabase } from "../../supabase/supabaseClient"; // supabase client
import Loader from "../../UiBlocks/Loader";

const CLOUD_NAME = "dyalydbjx"; // your Cloudinary cloud name
const UPLOAD_PRESET = "almansoor"; // your unsigned upload preset

const PostEvent = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventImage, setEventImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!eventTitle || !eventDescription || !eventDate || !eventImage) {
      alert("Please fill all fields and select an image.");
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", eventImage);
      formData.append("upload_preset", UPLOAD_PRESET);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!data.secure_url) {
        throw new Error("Cloudinary upload failed");
      }

      const imageURL = data.secure_url;

      // 2️⃣ Insert event into Supabase
      const { error } = await supabase.from("events").insert([
        {
          title: eventTitle,
          description: eventDescription,
          date: eventDate,
          image_url: imageURL,
        },
      ]);

      if (error) throw error;

      alert("Event posted successfully");

      // Clear fields
      setEventTitle("");
      setEventDescription("");
      setEventDate("");
      setEventImage(null);
    } catch (error) {
      console.log(error);
      alert("Error posting event: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Post a New Event</h2>
      {loading ? (
        <Loader />
      ) : (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 border-2 p-4 rounded-lg"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Title
            </label>
            <input
              type="text"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              placeholder="Enter event title"
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Description
            </label>
            <textarea
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              placeholder="Enter event details..."
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
              rows={5}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Date
            </label>
            <input
              type="date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          {/* Image upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setEventImage(e.target.files[0])}
              className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Post Event
          </button>
        </form>
      )}
    </div>
  );
};

export default PostEvent;
