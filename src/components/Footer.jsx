import { logo, makeInIndiaLogo } from "../assets/home";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-white py-14 text-[#111827] border-t border-gray-200">
      <Container>
        <div className="flex flex-col sm:flex-row items-center sm:items-center sm:text-left text-center gap-6 sm:gap-10">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <img src={logo} alt="Damroo Components" className="w-72 h-auto max-h-16 object-contain" />
            <img
              src={makeInIndiaLogo}
              alt="Make in India"
              className="h-14 w-auto object-contain sm:h-16"
              title="Make in India"
            />
          </div>
          <div className="mt-4 sm:mt-0 text-sm text-gray-700 text-center sm:text-left flex-1">
            <h2 className="text-base font-semibold text-[#111827]">Get in touch</h2>
            <p className="font-medium text-[#111827]">Damroo Components</p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-4">
              <div>
                <p className="font-semibold text-[#111827]">Address</p>
                <p className="text-gray-700">
                  Plot no 18, Gali No 1, Krishna Colony, Opposite Sector 25,
                  Faridabad, Haryana - 121004
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#111827]">Contact us</p>
                <p className="text-gray-700">
                  Email:{" "}
                  <span className="font-medium text-[#111827]">
                    damroocomponents@gmail.com
                  </span>
                </p>
                <p className="text-gray-700">
                  Phone:{" "}
                  <span className="font-medium text-[#111827]">7982587458 , 9449879100</span>
                </p>
              </div>
              <div>
                <p className="font-semibold text-[#111827]">GST No</p>
                <p className="text-gray-700">06ABJPG3327J1ZR</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
