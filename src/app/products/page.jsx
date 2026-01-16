import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Pill,
  Route,
  HeartPulse,
  BriefcaseMedical,
  Truck,
  Megaphone,
  Boxes,
  ShieldCheck,
  Handshake, 
  TrendingUp
} from "lucide-react";

const services = [
  {
    title: "Medicine Trading",
    description:
      "Offering a wide range of trusted pharmaceutical products under our own brand, ensuring reliability and accessibility.",
    icon: (
      <Pill className="w-14 h-14 text-green-600 mb-2" />
    ),
  },
  {
    title: "Sourcing & Distribution",
    description:
      "Ensuring timely and reliable supply of medicines through an efficient and robust distribution network.",
    icon: (
      <Route className="w-14 h-14 text-green-600 mb-2" />
    ),
  },
];


const product = [
  {
    title: "General Medicine",
    description:
      "High-quality formulations for common and chronic health conditions.",
    icon: (
      <BriefcaseMedical className="w-14 h-14 text-green-700" />
    ),
  },
  {
    title: "Cardiac Care",
    description:
      "Advanced medicines supporting heart health and cardiovascular wellness.",
    icon: (
      <Pill className="w-14 h-14 text-green-700" />
    ),
  },
];


const partnership = [
  {
    title: "Distribution Partners",
    description:
      "Join our distribution network to deliver medicines across regions.",
    icon: (
      <Handshake className="w-14 h-14 text-green-700" />
    ),
  },
  {
    title: "Marketing Collaboration",
    description:
      "Collaborate with us to build and promote pharmaceutical brands.",
    icon: (
      <TrendingUp className="w-14 h-14 text-green-700" />
    ),
  },
];

function page() {
  return (
    <>
      <section className="relative w-full h-[70vh]">
        <Image
          src="/pharma.jpg" // replace with your image
          alt="About Biomake Pharmaceuticals"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Quality Medicines for a Healthier Tomorrow
          </h1>
          <p className="text-sm md:text-lg text-gray-200 max-w-2xl">
            Explore Our Diverse Range of Pharmaceuticals and Manufacturing
            Capabilities
          </p>
        </div>
      </section>

      <section className="py-16 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-[#1a4d7d]">
            Our Services
          </h2>
          <div className="h-1 w-16 bg-green-700 mx-auto my-4 rounded"></div>
          <p className="text-sm text-[#555] mb-12">
            Comprehensive solutions tailored for the pharmaceutical industry.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition"
              >
                <div className=" flex flex-col items-center text-center mt-6">
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-[#1a4d7d] mt-8">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#333] mt-3 ">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#eaf3f8]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-[#1a4d7d]">
            Our Product Categories
          </h2>
          <div className="h-1 w-16 bg-green-700 mx-auto my-4 rounded"></div>
          <p className="text-sm text-[#555] mb-12">
            Biomake Pharmaceuticals is committed to launching 25+ branded SKUs
            across essential therapeutic categories.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {product.map((product, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition"
              >
                <div className=" flex flex-col items-center text-center mt-6">
                  {product.icon}
                  <h3 className="text-2xl font-semibold text-[#1a4d7d] mt-8">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#333] mt-3 ">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="partnerships-opportunities">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-[#1a4d7d]">
            Partnership Opportunities
          </h2>
          <div className="h-1 w-16 bg-green-700 mx-auto my-4 rounded"></div>
          <p className="text-sm text-[#555] mb-12">
            We believe in growing together. Explore how you can partner with us.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {partnership.map((partnership, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-lg p-6 shadow hover:shadow-lg transition"
              >
                <div className=" flex flex-col items-center text-center mt-6">
                  {partnership.icon}
                  <h3 className="text-2xl font-semibold text-[#1a4d7d] mt-8">
                    {partnership.title}
                  </h3>
                  <p className="text-sm text-[#333] mt-3 ">
                    {partnership.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">
            <Link href="/contact" className="">
              {" "}
              Become a partner
            </Link>
          </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
