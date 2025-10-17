import React from "react";
import { supabase } from "../../supabase/supabaseClient";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "../../UiBlocks/Loader";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const fetchEvents = async () => {
  const { data, error } = await supabase
    .from("events")
    .select("*")
    .order("date", { ascending: false });

  if (error) throw error;
  return data;
};

const ManageEvents = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    isLoading,
    data: Events = [],
    error,
    isError,
  } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  const handleDelete = async (id) => {
    try {
      await supabase.from("events").delete().eq("id", id);
      queryClient.invalidateQueries(["events"]);
      toast.success("Event deleted successfully");
    } catch (err) {
      console.error("Error deleting event:", err);
      toast.error("Error deleting event");
    }
  };

  if (isLoading) return <Loader />;
  if (isError)
    return <div className="text-red-500">Error: {error.message}</div>;

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Manage Events</h2>
        <button
          onClick={() => queryClient.invalidateQueries(["events"])}
          className="px-3 py-1 text-sm bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Refresh
        </button>
      </div>

      {Events.length === 0 ? (
        <p className="text-gray-600">No events found.</p>
      ) : (
        <table className="w-full border border-gray-200 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border-b">Image</th>
              <th className="p-3 border-b">Title</th>
              <th className="p-3 border-b">Date</th>
              <th className="p-3 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Events.map((event) => (
              <tr key={event.id} className="border-b hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={event.image_url}
                    alt={event.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="p-3">{event.title}</td>
                <td className="p-3">{event.date}</td>
                <td className="p-3 flex space-x-2">
                  <button
                    onClick={() => navigate(`/edit-event/${event.id}`)}
                    className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(event.id)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() =>
                      window.open(`#/events/${event.id}`, "_blank")
                    }
                    className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ManageEvents;
