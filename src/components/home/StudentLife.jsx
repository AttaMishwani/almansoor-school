import React from "react";
import students from "../../assets/images/home/students.jpg";
import studentstwo from "../../assets/images/home/studentstwo.jpg";

const StudentLife = () => {
  // fallback image used if Unsplash is blocked or request fails
  const fallback =
    "https://via.placeholder.com/800x1000?text=Image+Unavailable";

  return (
    <section className="w-full h-[100vh] bg-blue-500 flex justify-center items-center">
      <div className="w-full h-full flex flex-wrap">
        {/* Left big image (40%) */}
        <div className="h-full w-[35%]  ">
          <img
            src={students}
            alt="Students in classroom"
            loading="lazy"
            onError={(e) => (e.currentTarget.src = fallback)}
            className="w-full h-full object-cover  shadow-md"
          />
        </div>

        {/* Middle two stacked images (20%) */}
        <div className="w-[30%] h-[100%] flex flex-col justify-center items-center">
          <div className="w-full h-[50%] text-white poppins-thin  bg-blue-700 flex justify-center items-center p-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non cumque
            libero praesentium accusamus beatae consequuntur necessitatibus
            deserunt ratione quos unde? Neque, rerum velit? Eos dolore placeat
          </div>
          <div className="w-full h-[50%] text-white poppins-thin  bg-blue-600 flex justify-center items-center p-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non cumque
            libero praesentium accusamus beatae consequuntur necessitatibus
            deserunt ratione quos unde? Neque, rerum velit? Eos dolore placeat
          </div>
        </div>

        {/* Right big image (40%) */}
        <div className="h-full w-[35%]  ">
          <img
            src={studentstwo}
            alt="Students in classroom"
            loading="lazy"
            onError={(e) => (e.currentTarget.src = fallback)}
            className="w-full h-full object-cover  shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
