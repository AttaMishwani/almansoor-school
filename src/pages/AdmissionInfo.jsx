import React from "react";

const AdmissionInfo = () => {
  const steps = [
    {
      title: "Step 1: Application Form",
      desc: "Fill out the admission application form online or collect it from the campus admission office.",
    },
    {
      title: "Step 2: Required Documents",
      desc: "Submit photocopies of previous academic certificates, CNIC/B-Form, recent photographs, and any other required documents.",
    },
    {
      title: "Step 3: Admission Test",
      desc: "Appear in the admission entry test conducted by the institute to evaluate eligibility.",
    },
    {
      title: "Step 4: Interview",
      desc: "Shortlisted candidates will be called for an interview to assess academic and personal skills.",
    },
    {
      title: "Step 5: Fee Submission",
      desc: "Once selected, submit the admission and tuition fee within the given deadline to confirm your enrollment.",
    },
  ];

  return (
    <section className="min-h-screen py-16 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
            Admission Procedure
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow the steps below to successfully complete the admission
            process. Make sure to submit all required documents and meet the
            deadlines to secure your place.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 flex items-start gap-6 hover:shadow-xl transition"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h2>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-blue-500 text-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-4">Required Documents</h3>
            <ul className="list-disc pl-5 space-y-2 text-blue-100">
              <li>Previous academic certificates</li>
              <li>CNIC/B-Form</li>
              <li>4 recent passport-size photographs</li>
              <li>Admission form receipt</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Important Deadlines
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Application submission: 15th August</li>
              <li>Admission test: 25th August</li>
              <li>Interview: 1st September</li>
              <li>Fee submission deadline: 10th September</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-blue-500 mb-2">
            Need Assistance?
          </h3>
          <p className="text-gray-600 mb-4">
            For any queries regarding admissions, please contact our admission
            office.
          </p>
          <p className="text-gray-800 font-semibold">
            📞 +92 300 1234567 | ✉️ admissions@example.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdmissionInfo;
