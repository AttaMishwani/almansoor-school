import React from "react";

import AboutSection from "../components/home/AboutSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import UpcomingEvents from "../components/home/UpcomingEvents";
import HomeSection from "../components/home/HomeSection";
import WhatParentsSays from "../components/home/WhatParentsSays";
import ApplyNow from "../components/home/ApplyNow";
import Commitments from "../components/home/Commitments";
import AdmissionsOpen from "../components/home/AdmissionsOpen";
import Events from "../components/home/Events";
import StudentLife from "../components/home/StudentLife";

const Home = () => {
  return (
    <section className="bg-gray-50 text-gray-800 w-full relative">
      <HomeSection />

      {/* About Section */}
      <AboutSection />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#2B7FFF"
          fill-opacity="1"
          d="M0,160L34.3,149.3C68.6,139,137,117,206,117.3C274.3,117,343,139,411,154.7C480,171,549,181,617,154.7C685.7,128,754,64,823,85.3C891.4,107,960,213,1029,234.7C1097.1,256,1166,192,1234,165.3C1302.9,139,1371,149,1406,154.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>

      <div className="container w-full max-w-[1100px] mx-auto ">
        {/* Features Section */}
        <WhyChooseUs />
      </div>
      <StudentLife />
      <AdmissionsOpen />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
        <path
          fill="#2B7FFF"
          fill-opacity="1"
          d="M0,224L34.3,229.3C68.6,235,137,245,206,256C274.3,267,343,277,411,240C480,203,549,117,617,117.3C685.7,117,754,203,823,229.3C891.4,256,960,224,1029,202.7C1097.1,181,1166,171,1234,170.7C1302.9,171,1371,181,1406,186.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
      <Commitments />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 230">
        <path
          fill="#2B7FFF"
          fill-opacity="1"
          d="M0,160L40,154.7C80,149,160,139,240,144C320,149,400,171,480,170.7C560,171,640,149,720,149.3C800,149,880,171,960,160C1040,149,1120,107,1200,106.7C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
      <Events />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#2B7FFF"
          fill-opacity="1"
          d="M0,96L40,101.3C80,107,160,117,240,133.3C320,149,400,171,480,186.7C560,203,640,213,720,192C800,171,880,117,960,117.3C1040,117,1120,171,1200,186.7C1280,203,1360,181,1400,170.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <UpcomingEvents />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#2B7FFF"
          fill-opacity="1"
          d="M0,64L34.3,106.7C68.6,149,137,235,206,240C274.3,245,343,171,411,160C480,149,549,203,617,197.3C685.7,192,754,128,823,112C891.4,96,960,128,1029,128C1097.1,128,1166,96,1234,101.3C1302.9,107,1371,149,1406,170.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <div className="container w-full max-w-[1100px] mx-auto ">
        <WhatParentsSays />
      </div>

      {/* <div className="container w-full max-w-[1100px] mx-auto flex justify-center items-center ">
        <ApplyNow />
      </div> */}

      {/* Testimonials Section */}
    </section>
  );
};

export default Home;
