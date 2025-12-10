import React from "react";

function Outgoing() {
  const data = [
    { year: "2013-14", countries: ["Germany"], students: 3 },
    { year: "2014-15", countries: ["Iran"], students: 3 },
    { year: "2015-16", countries: ["Germany", "Iran"], students: 3 },
    { year: "2016-17", countries: ["Germany", "Nepal", "Kenya"], students: 19 },
    { year: "2017-18", countries: ["Nepal"], students: 17 },
    { year: "2018-19", countries: ["Countries"], students: 12 },
    { year: "2019-20", countries: ["Countries"], students: 11 },
    { year: "2020-21", countries: ["Countries"], students: 27 },
    { year: "2021-22", countries: ["Countries"], students: 5 },
    { year: "2022-23", countries: ["Countries"], students: 6 },
    { year: "2023-24", countries: ["Countries"], students: 5 },
    { year: "2024-25", countries: ["Countries"], students: 8 },
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-white text-gray-900">

        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6 mt-12">
          <div className="w-full bg-[#003F68] text-white rounded-2xl p-10 flex flex-col md:flex-row items-center gap-10 shadow-xl">

            {/* TEXT CONTENT */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                Take Your Career Global with <br /> IAESTE Outgoing
              </h1>

              <p className="mt-4 text-gray-200 max-w-md">
                Work abroad. Explore cultures. Build your future with
                international exchange opportunities.
              </p>

              <button className="mt-6 bg-white text-[#003F68] px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
                Apply for Outgoing 2025
              </button>
            </div>

            {/* IMAGE */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src="https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Plane"
                className="w-64 h-48 object-cover rounded-2xl shadow-md lg:mr-[-15px]"
              />
            </div>
          </div>
        </section>

        {/* STATISTICS SECTION */}
        <section className="max-w-6xl mx-auto mt-12 p-6">

          <h2 className="text-2xl font-bold text-[#003F68]">
            Outgoing Exchange Statistics
          </h2>

          <p className="text-gray-600 mt-1">
            Total outgoing : <span className="font-semibold">91</span>
          </p>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {data.map((item, index) => (
              <div
                key={index}
                className="
                  bg-[#EAF4FF]
                  rounded-2xl
                  p-5
                  shadow-sm
                  border border-transparent
                  hover:shadow-lg
                  hover:bg-[#dcecff]
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                  cursor-pointer
                "
              >
                {/* YEAR */}
                <p className="text-lg font-semibold text-[#003F68]">{item.year}</p>

                {/* COUNTRIES */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.countries.map((country, idx) => (
                    <span
                      key={idx}
                      className="
                        bg-[#003F68]
                        text-white
                        text-sm
                        px-3
                        py-1
                        rounded-full
                      "
                    >
                      {country}
                    </span>
                  ))}
                </div>

                {/* STUDENTS BADGE */}
                <div className="mt-4 flex justify-end">
                  <span
                    className="
                      bg-white
                      shadow
                      px-4
                      py-1
                      text-sm
                      rounded-full
                      text-[#003F68]
                      font-medium
                    "
                  >
                    {item.students} Students
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Outgoing;
