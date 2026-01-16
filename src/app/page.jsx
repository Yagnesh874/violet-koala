"use client";
import Image from "next/image";
import Link from "next/link";

import {
  ShieldCheck,
  DollarSign,
  Truck,
  Factory,
  Users,
  BriefcaseMedical,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/pharma.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl text-center">
            {/* Main Heading */}
            <h1
              className="
            text-2xl
            sm:text-3xl
            md:text-5xl
            lg:text-6xl
            font-extrabold
            text-white
            leading-tight
            mb-4
          "
            >
              Affordable Medicines. Trusted Quality. Scalable Future.
            </h1>

            {/* Subheading */}
            <p
              className="
            text-sm
            sm:text-base
            md:text-lg
            lg:text-xl
            text-gray-200
            mb-8
            max-w-3xl
            mx-auto
          "
            >
              Transforming healthcare by making high-quality, affordable
              medicines accessible to all.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="
              bg-[#28a745]
              hover:bg-[#218838]
              text-white
              px-6
              py-3
              rounded-lg
              font-semibold
              transition
              w-full
              sm:w-auto
            "
              >
                Explore Our Products
              </button>

              <button
                className="
              bg-[#007bff]
              hover:bg-[#0056b3]
              text-white
              px-6
              py-3
              rounded-lg
              font-semibold
              transition
              w-full
              sm:w-auto
            "
              >
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9] py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1f4f82]">
              About Biomake Pharmaceuticals
            </h2>

            {/* Green underline */}
            <div className="w-24 h-1 bg-green-500 mx-auto mt-4 rounded" />

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Founded in 2024, Biomake Pharmaceuticals specializes in medicine
              trading.
            </p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              We offer trusted pharmaceutical products under our own brand,
              focusing on faster availability, reducing treatment costs, and
              improving healthcare access while maintaining stringent quality
              standards. We are committed to delivering products that embody
              both <span className="font-semibold">Trusted Quality</span> and{" "}
              <span className="font-semibold">Affordable Medicines</span>,
              ensuring better outcomes for all stakeholders.
            </p>

            {/* Right Content */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1f4f82] mb-4">
                Our Vision & Mission
              </h3>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                To deliver safe, affordable, and effective medicines that
                empower healthcare providers, pharmacies, and patients to
                experience better outcomes with trust and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1f4f82]">
              Why Choose Us
            </h2>

            <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded" />

            <p className="mt-6 text-gray-600 text-sm sm:text-base">
              Our commitment to excellence and innovation sets us apart in the
              pharmaceutical industry.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <ShieldCheck className="mx-auto h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-[#1f4f82] mb-3">
                Trusted Quality Assurance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every product undergoes strict quality checks to ensure safety,
                efficacy, and compliance with regulatory standards, giving you
                complete peace of mind.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <DollarSign className="mx-auto h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-[#1f4f82] mb-3">
                Affordable Pricing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We deliver cost-effective pharmaceutical solutions without
                compromising on quality, helping healthcare providers and
                patients reduce treatment burdens.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <Truck className="mx-auto h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-[#1f4f82] mb-3">
                Strong Distribution Network
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our expanding network ensures timely and reliable medicine
                supply across urban and rural markets, reaching those who need
                it most.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <Factory className="mx-auto h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-[#1f4f82] mb-3">
                Future-Ready Manufacturing Vision
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We invest in modern manufacturing to ensure better quality
                control, efficient production, and innovation for future
                healthcare needs.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <Users className="mx-auto h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-[#1f4f82] mb-3">
                Customer-Centric Approach
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We build long-term relationships through transparency, ethical
                practices, and customized support for all partners and clients.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <BriefcaseMedical className="mx-auto h-10 w-10 text-green-500 mb-4" />
              <h3 className="text-lg font-semibold text-[#1f4f82] mb-3">
                Comprehensive Product Portfolio
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From essential medicines to specialized treatments, our diverse
                range meets the varied demands of the healthcare sector
                effectively.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eef5f9] py-16 sm:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1f4f82]">
              Our Services
            </h2>

            <div className="w-16 h-1 bg-green-500 mx-auto mt-4 rounded" />

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Biomake Pharmaceuticals offers comprehensive services designed to
              meet diverse pharmaceutical needs.
            </p>
          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <i className="fas fa-capsules text-green-500 text-4xl mb-4"></i>
              <h3 className="text-lg font-semibold text-[#1f4f82] mb-3">
                Medicine Trading
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Offering a wide range of trusted pharmaceutical products under
                our own brand, ensuring reliability and accessibility.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
              <i className="fas fa-network-wired text-green-500 text-4xl mb-4"></i>
              <h3 className="text-lg font-semibold text-[#1f4f82] mb-3">
                Strategic Sourcing & Distribution
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ensuring timely and reliable supply of medicines through an
                efficient and robust distribution network, reaching every corner
                of the market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1f4f82] py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Looking to partner with a trusted pharmaceutical company?
          </h3>

          <p className="text-sm sm:text-base text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your needs and explore how Biomake
            Pharmaceuticals can contribute to your success.
          </p>

          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition">
            <Link href="/contact" className="">
              {" "}
              Get in Touch
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
