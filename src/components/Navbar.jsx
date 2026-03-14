import { useState } from "react";
import { logo, makeInIndiaLogo } from "../assets/home";
import Container from "./Container";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };
  return (
    <nav className="py-2 z-40">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-4 items-center">
            <img
              className="h-[120px] w-[192px] cursor-pointer object-contain"
              src={logo}
              alt="Damroo Components"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button
                  onClick={() => handleScroll("about")}
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => handleScroll("services")}
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </button>
                <button
                  onClick={() => handleScroll("portfolio")}
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => handleScroll("contact")}
                  className="hover:bg-button-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>

          <img
            src={makeInIndiaLogo}
            alt="Make in India"
            className="h-8 w-auto object-contain md:h-12 flex-shrink-0"
            title="Make in India"
          />

          {/* Login button removed for marketing site */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden transition-all" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-black">
              <button
                onClick={() => handleScroll("about")}
                className="w-full text-left hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </button>
              <button
                onClick={() => handleScroll("services")}
                className="w-full text-left hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </button>
              <button
                onClick={() => handleScroll("portfolio")}
                className="w-full text-left hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Portfolio
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="w-full text-left hover:bg-primary-base hover:bg-button-primary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
export default Navbar;
