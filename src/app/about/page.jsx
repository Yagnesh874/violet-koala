import React from "react";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
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
            About Biomake Pharmaceuticals
          </h1>
          <p className="text-sm md:text-lg text-gray-200 max-w-2xl">
            Transforming Healthcare Through Quality & Affordability
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-[#eef6fa] py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a4d7d]">
            Our Story
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto my-4"></div>
          <p className="text-gray-600 text-sm md:text-base mb-14">
            Founded in 2024 with a Vision to Make Healthcare Accessible
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-[#1a4d7d] mb-4">
                Our Journey Begins
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Founded in 2024, Biomake Pharmaceuticals emerged from a clear
                vision: to revolutionize healthcare by making essential
                medicines truly accessible and affordable. We operate with a
                dual focus on robust medicine trading under our own brand and
                efficient third-party manufacturing services.
                <br />
                <br />
                Our dedication lies in delivering high-quality, affordable
                pharmaceutical products while adhering to stringent quality
                standards in every aspect of our operations.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition">
              <h3 className="text-lg font-semibold text-[#1a4d7d] mb-4">
                Our Mission & Vision
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong>Mission:</strong> To deliver safe, affordable, and
                effective medicines that empower healthcare providers,
                pharmacies, and patients to experience better outcomes with
                trust and confidence.
                <br />
                <br />
                <strong>Vision:</strong> To become a leading and trusted name in
                affordable pharmaceutical solutions, consistently expanding our
                reach and product portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="team">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1a4d7d]">
            Our Leadership Team
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto my-4"></div>

          <p className="text-gray-500 text-sm mt-2">
            Meet the Visionaries Behind Biomake Pharmaceuticals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Parthkumar Patel",
                role: "Partner & Operations Head",
                desc: "20+ Years Experience in Pharmaceutical Operations and Vendor Management",
                image: "/user (1).png",
              },
              {
                name: "Janki Patel",
                role: "Partner & Administrative Head",
                desc: "10+ Years Experience in Administrative Support and Customer Relations",
                image: "/user (1).png",
              },
              {
                name: "Bhagwatiben Patel",
                role: "Partner & Community Engagement",
                desc: "10+ Years Experience in Community Engagement and Internal Coordination",
                image: "/user (1).png",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition text-center"
              >
                {/* Profile Image */}
                <div className="flex justify-center -mt-14 mb-4">
                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={112}
                      height={112}
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="font-semibold text-[#1a4d7d] text-lg">
                  {member.name}
                </h3>

                <p className="text-sm text-[#555] font-medium mt-1">
                  {member.role}
                </p>

                <p className="text-sm text-gray-600 mt-3">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#eef6fa]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1a4d7d]">
            What Our Partners Say
          </h2>
          <div className="w-16 h-1 bg-green-500 mx-auto my-4"></div>

          <p className="text-gray-500 text-sm mt-2">
            Real Feedback from Our Valued Partners
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                quote:
                  "Biomake Pharmaceuticals has consistently delivered high-quality products at competitive prices. Their commitment to quality and customer service is truly commendable.",
                name: "Dr. Rajesh Kumar",
                role: "Medical Director, City Hospital",
              },
              {
                quote:
                  "The team at Biomake is professional and responsive. Their manufacturing capabilities have helped us scale our operations efficiently.",
                name: "Meena Sharma",
                role: "CEO, Pharma Marketing Solutions",
              },
              {
                quote:
                  "Their distribution network is impressive. We have seen consistent growth since partnering with Biomake.",
                name: "Amit Patel",
                role: "Owner, HealthCare Pharmacy Chain",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white shadow-md rounded-xl p-6 text-center flex flex-col items-center"
              >
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-sm text-gray-600 mb-4">{item.quote}</p>
                <h4 className="font-semibold text-[#1a4d7d] mb-4">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500 mb-4">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl  mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#1a4d7d]">
            Join Our Journey
          </h2>
          <p className="text-gray-600 mt-3">
            Partner with us to create a healthier future for all.
          </p>

          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">
            <Link href="/contact" className="">
              {" "}
              Get in Touch →
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
