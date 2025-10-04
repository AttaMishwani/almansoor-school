import React from "react";
import students from "../../assets/images/home/students.jpg";
import studentstwo from "../../assets/images/home/studentstwo.jpg";

const StudentLife = () => {
  // fallback image used if Unsplash is blocked or request fails
  const fallback =
    "https://via.placeholder.com/800x1000?text=Image+Unavailable";

  return (
    <section className="w-full min-h-[100vh] bg-blue-500 flex justify-center items-center relative overflow-hidden">
      <div className="w-full h-full min-h-[100vh] flex border-2 border-green-500">
        {/* Left big image (35%) */}
        <div className="h-full w-[35%]">
          <img
            src={students}
            alt="Students in classroom"
            loading="lazy"
            onError={(e) => (e.currentTarget.src = fallback)}
            className="w-full h-full object-cover shadow-md"
          />
        </div>

        {/* Middle stacked boxes (30%) */}
        <div className="w-[30%] h-full flex flex-col">
          <div className="flex-1 text-white poppins-thin bg-blue-600 border-2 flex justify-center items-center p-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non cumque
            libero praesentium accusamus beatae consequuntur necessitatibus
            deserunt ratione quos unde? Neque, rerum velit? Eos dolore placeat
          </div>
          <div className="flex-1 text-white poppins-thin bg-blue-600 border-2 flex justify-center items-center p-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non cumque
            libero praesentium accusamus beatae consequuntur necessitatibus
            deserunt ratione quos unde? Neque, rerum velit? Eos dolore placeat
          </div>
        </div>

        {/* Right big image (35%) */}
        <div className="h-full w-[35%]">
          <img
            src={studentstwo}
            alt="Students in classroom"
            loading="lazy"
            onError={(e) => (e.currentTarget.src = fallback)}
            className="w-full h-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default StudentLife;
