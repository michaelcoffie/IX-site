import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const MainFooter = () => {
  return (
    <footer className="bg-[#70110c] text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">About Us</h3>
            <p className="mb-4 text-sm opacity-90">
              Iota Chi Chapter of Kappa Alpha Psi Fraternity, Inc. Striving for
              achievement in every field of human endeavor.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#f23bd7] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#f23bd7] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#f23bd7] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/about"
                  className="hover:text-[#f23bd7] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="hover:text-[#f23bd7] transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/membership"
                  className="hover:text-[#f23bd7] transition-colors"
                >
                  Membership
                </Link>
              </li>
              <li>
                <Link
                  to="/alumni"
                  className="hover:text-[#f23bd7] transition-colors"
                >
                  Alumni
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#f23bd7] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>University Campus, City, State</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@iotachi.org</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm opacity-90">
              Subscribe to our newsletter for updates and announcements.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-l-md border-0 bg-white/10 px-4 py-2 text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#f23bd7]"
              />
              <button
                type="submit"
                className="rounded-r-md bg-[#f23bd7] px-4 py-2 text-sm font-medium text-white hover:bg-[#f23bd7]/90 focus:outline-none focus:ring-2 focus:ring-[#f23bd7]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm opacity-90">
          <p>
            © {new Date().getFullYear()} Iota Chi Chapter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
