import React from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
} from "lucide-react";

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
            Get in Touch with Us!
          </h1>
          <p className="text-sm md:text-lg text-gray-200 max-w-2xl">
            We're Here to Help and Answer Your Questions
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-xl font-semibold text-[#1f4f82] mb-6">
                Send Us a Message
              </h2>

              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 
                     placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 
                     placeholder-gray-500
                     focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Your Phone Number"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 
                     placeholder-gray-500"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject of your inquiry"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 
                     placeholder-gray-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Type your message here..."
                    className="w-full border border-gray-300 rounded-md px-3 py-2 
                     placeholder-gray-500 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 
             text-white px-10 py-2 rounded-md font-semibold transition"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Sticky Contact Info */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-xl font-semibold text-[#1f4f82] mb-6">
                  Contact Information
                </h2>

                <ul className="space-y-5 text-sm text-gray-700">
                  {/* Address */}
                  <li className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <p>
                      {" "}
                      <span className="text-[#1a4d7d] font-bold">
                        Address
                      </span>{" "}
                      <br /> Mahesana, Gujarat, India
                    </p>
                  </li>

                  {/* Phone */}
                  <li className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>

                    <p>
                      {" "}
                      <span className="text-[#1a4d7d] font-bold">
                        Phone
                      </span>{" "}
                      <br /> +91 9979444111
                    </p>
                  </li>

                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>

                    <p>
                      {" "}
                      <span className="text-[#1a4d7d] font-bold">
                        Email
                      </span>{" "}
                      <br /> biomakepharma2024@gmail.com
                    </p>
                  </li>

                  {/* Hours */}
                  <li className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>

                    <p>
                      {" "}
                      <span className="text-[#1a4d7d] font-bold">
                        Business Hours
                      </span>{" "}
                      <br /> Monday - Saturday: 9:00 AM - 6:00 PM <br /> Sunday:
                      Closed
                    </p>
                  </li>
                </ul>

                {/* Social Icons */}
                <div className="flex gap-4 mt-6 mx-auto items-center justify-center">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
               bg-blue-100 text-blue-600 
               hover:bg-blue-600 hover:text-white transition"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
               bg-blue-100 text-blue-600 
               hover:bg-blue-600 hover:text-white transition"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
               bg-blue-100 text-blue-600 
               hover:bg-blue-600 hover:text-white transition"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full 
               bg-blue-100 text-blue-600 
               hover:bg-blue-600 hover:text-white transition"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-[#1f4f82] mb-4">
              Our Location on Map
            </h3>

            <div className="w-full h-[350px] bg-gray-200 rounded-xl shadow flex items-center justify-center text-gray-500">
              Google Map Embed Here
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
