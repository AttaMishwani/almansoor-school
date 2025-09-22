import React from "react";

const Commitments = () => {
  return (
    <section className="w-[100%] relative py-10 pt-20  bg-blue-500  flex justify-center items-center ">
      <div className="container w-[100%] max-w-[1100px]   gap-x-[6rem] flex flex-row  justify-between">
        <div>
          <h2 className="poppins text-4xl text-white">MISSION & COMMITMENTS</h2>
        </div>
        <div>
          <p className="text-white">
            Happy Palace Group of Schools’ mission is to provide enlightened
            education and examination services to the students. The future of a
            nation depends mainly on its educational system. Education sets the
            path for development and helps to achieve the desired goals.
          </p>
        </div>
        <div>
          <p className="text-white">
            {" "}
            Committed to excellence in developing dynamic personalities to
            accept the challenges of modern era. Committed in creating expertise
            and advancement in every field of life serving mankind and being
            patriotic Pakistani citizens.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Commitments;
