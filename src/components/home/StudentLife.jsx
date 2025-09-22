import React from "react";
import students from "../../assets/images/home/students.jpg";
import studentstwo from "../../assets/images/home/studentstwo.jpg";

const StudentLife = () => {
  // fallback image used if Unsplash is blocked or request fails
  const fallback =
    "https://via.placeholder.com/800x1000?text=Image+Unavailable";

  return (
    <section className="w-full h-[150vh]  bg-blue-500  flex justify-center items-center relative overflow-hidden  ">
      <svg
        className="absolute top-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 280"
      >
        <path
          fill="#F9FAFB"
          fill-opacity="1"
          d="M0,0L40,0C80,0,160,0,240,16C320,32,400,64,480,96C560,128,640,160,720,165.3C800,171,880,149,960,128C1040,107,1120,85,1200,80C1280,75,1360,85,1400,90.7L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      <div className="w-full h-full min-h-[100vh] flex flex-wrap">
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
          <div className="w-full h-[50%] text-white poppins-thin  bg-blue-600 flex justify-center items-center p-5 pt-[20rem] pb-[8rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non cumque
            libero praesentium accusamus beatae consequuntur necessitatibus
            deserunt ratione quos unde? Neque, rerum velit? Eos dolore placeat
          </div>
          <div className="w-full h-[50%] text-white poppins-thin pb-[20rem] pt-[8rem] border-t-2 border-t-amber-50/45  bg-blue-600 flex justify-center items-center p-5">
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

      <svg
        className="absolute bottom-0 left-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 280"
      >
        <path
          fill="#F9FAFB"
          fill-opacity="1"
          d="M0,0L40,0C80,0,160,0,240,16C320,32,400,64,480,96C560,128,640,160,720,165.3C800,171,880,149,960,128C1040,107,1120,85,1200,80C1280,75,1360,85,1400,90.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default StudentLife;
