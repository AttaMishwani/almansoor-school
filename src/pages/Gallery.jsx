import React from "react";

const Gallery = () => {
  const images = [
    "https://source.unsplash.com/400x400/?classroom",
    "https://source.unsplash.com/400x400/?students",
    "https://source.unsplash.com/400x400/?library",
    "https://source.unsplash.com/400x400/?sports",
    "https://source.unsplash.com/400x400/?playground",
    "https://source.unsplash.com/400x400/?school",
  ];

  return (
    <section className="px-6 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-8">Our Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="School"
              className="rounded-lg shadow-md hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
