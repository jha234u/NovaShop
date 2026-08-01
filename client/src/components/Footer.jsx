import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#070709] border-t border-white/10 mt-10">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="flex items-center gap-3">

              <img
                src="/logo.png"
                alt="NovaShop"
                className="w-14"
              />

              <h2 className="text-3xl font-black bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                NovaShop
              </h2>

            </div>

            <p className="text-gray-400 mt-5 leading-7">
              Premium shopping experience with quality products,
              fast delivery and secure payments.
            </p>
          </motion.div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-purple-400 cursor-pointer">Home</li>
              <li className="hover:text-purple-400 cursor-pointer">Products</li>
              <li className="hover:text-purple-400 cursor-pointer">Categories</li>
              <li className="hover:text-purple-400 cursor-pointer">About</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Categories
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Gaming</li>
              <li>Furniture</li>
            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <Mail size={18}/>
                support@novashop.com
              </div>

              <div className="flex gap-3">
                <Phone size={18}/>
                +91 98765 43210
              </div>

              <div className="flex gap-3">
                <MapPin size={18}/>
                India
              </div>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 my-10"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 NovaShop. All Rights Reserved.
          </p>

          <div className="flex gap-5 mt-5 md:mt-0">

            <FaFacebookF
              className="hover:text-purple-400 cursor-pointer transition"
            />

            <FaInstagram
              className="hover:text-pink-400 cursor-pointer transition"
            />

            <FaTwitter
              className="hover:text-cyan-400 cursor-pointer transition"
            />

            <FaLinkedinIn
              className="hover:text-blue-400 cursor-pointer transition"
            />

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
