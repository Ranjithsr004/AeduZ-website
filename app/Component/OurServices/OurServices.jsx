import React from 'react';

const OurServices = () => {
  return (
    <div className="bg-[#F0F8FF] py-8 px-8">
      <div className="container mx-auto mt-12 mb-12">
        <h2 className="text-5xl font-semibold text-center mb-8 text-[#37517e]">Our Services</h2>
        <div className="flex flex-wrap justify-center lg:mx-12  min-h-screen ">
          <div className="group w-full md:w-1/3 px-4 mb-8 [perspective:1000px]">
            <div className="relative h-full w-full bg-white shadow-lg rounded-lg  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden]">
              <img className="w-full h-48 lg:mt-8 object-cover rounded-lg shadow-black/40 object-center " src="./personalized.jpeg" alt="First card" />
              <h3 className="text-xl justify-center font-semibold mt-2 mb-2 text-center ">Personalized Mentorship Program</h3>
              </div>
              <div className="p-4  absolute-inset-0 h-full w-full rounded-xl  px-12 text-center text-black-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex h-64 items-center justify-center ">
                  <h3 className="text-base font-semibold mb-2 text-center ">Tailored mentorship plans and one-on-one sessions with experienced mentors address student's academic challenges and personal growth. Customized study strategies and continuous progress tracking ensure student's success</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="group w-full md:w-1/3 px-4 mb-8 [perspective:1000px]">
            <div className="relative h-full w-full bg-white shadow-lg rounded-lg  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden]">
              <img className="w-full h-48 lg:mt-8 object-cover rounded-lg shadow-black/40 object-center " src="./experience.jpeg" alt="First card" />
              <h3 className="text-xl justify-center font-semibold mt-2 mb-2  text-center ">Experienced Mentors</h3>
              </div>
              <div className="p-4  absolute-inset-0 h-full w-full rounded-xl  px-12 text-center text-black-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex h-64 items-center justify-center ">
                  <h3 className="text-base font-semibold mb-2 text-center ">Access to mentors from top institutes like IITs and NITs, offering expertise in various subjects and exam preparation strategies. Focused on fostering critical thinking skills, problem-solving abilities, and self-confidence</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="group w-full md:w-1/3 px-4 mb-8 [perspective:1000px]">
            <div className="relative h-full w-full bg-white shadow-lg rounded-lg  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden]">
              <img className="w-full h-48 lg:mt-8 object-cover rounded-xl shadow-black/40 object-center" src="./customized.jpeg" alt="First card" />
              <h3 className="text-xl justify-center font-semibold mt-2 mb-2 text-center ">Customized Mentor Matching</h3>
              </div>
              <div className="p-4  absolute-inset-0 h-full w-full rounded-xl  px-12 text-center text-black-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex h-64 items-center justify-center ">
                  <h3 className="text-base font-semibold mb-2 text-center ">Careful matching of students with mentors based on academic strengths, weaknesses, age, gender, city, institution and learning preferences</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="group w-full md:w-1/3 px-4 mb-8 [perspective:1000px]">
            <div className="relative h-full w-full bg-white shadow-lg rounded-lg  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden]">
              <img className="w-full h-48 lg:mt-8 object-cover rounded-xl shadow-black/40 object-center" src="./transparent.jpeg" alt="First card" />
              <h3 className="text-xl justify-center font-semibold mt-2 mb-2 text-center ">Transparent Communication</h3>
              </div>
              <div className="p-4  absolute-inset-0 h-full w-full rounded-xl  px-12 text-center text-black-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex h-64 items-center justify-center ">
                  <h3 className="text-base font-semibold mb-2 text-center ">Open channels for communication between mentors, students, and institution. Regular updates, call logs, and session summaries ensure prompt resolution of any concerns</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="group w-full md:w-1/3 px-4 mb-8 [perspective:1000px]">
            <div className="relative h-full w-full bg-white shadow-lg rounded-lg  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden]">
              <img className="w-full h-48 lg:mt-8 object-cover rounded-xl shadow-black/40 object-center" src="./support.jpeg" alt="First card" />
              <h3 className="text-xl justify-center font-semibold mt-2 mb-2 text-center ">Consultation and Support</h3>
              </div>
              <div className="p-4  absolute-inset-0 h-full w-full rounded-xl  px-12 text-center text-black-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex h-64 items-center justify-center ">
                  <h3 className="text-base font-semibold mb-2 text-center ">Guidance for institutions in implementing and optimizing the mentorship program. Personalized consultation for students in college selection based on their interests, strengths, and priorities</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="group w-full md:w-1/3 px-4 mb-8 [perspective:1000px]">
            <div className="relative h-full w-full bg-white shadow-lg rounded-lg  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden]">
              <img className="w-full h-48 lg:mt-8 object-cover rounded-xl shadow-black/40 object-center" src="./special.jpeg" alt="First card" />
              <h3 className="text-xl justify-center font-semibold mt-2 mb-2 text-center ">Special Need Student List</h3>
              </div>
              <div className="p-4  absolute-inset-0 h-full w-full rounded-xl  px-12 text-center text-black-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex h-64 items-center justify-center ">
                  <h3 className="text-base font-semibold mb-2 text-center ">Providing institutions with a list of students requiring special treatment like psychologist, psychiatrist and medication ensures their needs are met effectively, promoting inclusivity and academic success</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="group w-full md:w-1/3 px-4 mb-8 [perspective:1000px]">
            <div className="relative h-full w-full bg-white shadow-lg rounded-lg  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 [backface-visibility:hidden]">
              <img className="w-full h-48 lg:mt-8 object-cover rounded-xl shadow-black/40 object-center" src="./statistic.jpeg" alt="First card" />
              <h3 className="text-xl justify-center font-semibold mt-2 mb-2 text-center ">Useful statistics</h3>
              </div>
              <div className="p-4  absolute-inset-0 h-full w-full rounded-xl  px-12 text-center text-black-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="flex h-64 items-center justify-center ">
                  <h3 className="text-base font-semibold mb-2 text-center ">AeduZ provides institutions with vital insights through "Useful Statistics," offering detailed call logs, monthly/yearly reports, and metrics on student engagement</h3>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default OurServices;
