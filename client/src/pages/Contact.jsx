import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-[#09090B] text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-black mb-4">
              Contact Us
            </h1>

            <p className="text-gray-400 text-lg">
              We'd love to hear from you. Get in touch anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div className="space-y-8">

              <div className="rounded-3xl bg-[#111] border border-white/10 p-6 flex items-center gap-5">
                <div className="bg-purple-600 p-4 rounded-full">
                  <FiMail size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Email</h3>
                  <p className="text-gray-400">
                    support@novashop.com
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#111] border border-white/10 p-6 flex items-center gap-5">
                <div className="bg-cyan-500 p-4 rounded-full">
                  <FiPhone size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Phone</h3>
                  <p className="text-gray-400">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#111] border border-white/10 p-6 flex items-center gap-5">
                <div className="bg-pink-500 p-4 rounded-full">
                  <FiMapPin size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Address</h3>
                  <p className="text-gray-400">
                    Kanpur, Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#111] border border-white/10 p-6 flex items-center gap-5">
                <div className="bg-green-500 p-4 rounded-full">
                  <FiClock size={24} />
                </div>

                <div>
                  <h3 className="text-xl font-bold">Working Hours</h3>
                  <p className="text-gray-400">
                    Mon - Sat : 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <div className="rounded-3xl bg-[#111] border border-white/10 p-8">

              <h2 className="text-3xl font-bold mb-8">
                Send a Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl bg-[#181818] px-5 py-4 outline-none border border-white/10 focus:border-purple-500"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl bg-[#181818] px-5 py-4 outline-none border border-white/10 focus:border-cyan-500"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl bg-[#181818] px-5 py-4 outline-none border border-white/10 focus:border-purple-500"
                />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full rounded-xl bg-[#181818] px-5 py-4 outline-none border border-white/10 focus:border-cyan-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 py-4 font-bold transition hover:scale-105"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;