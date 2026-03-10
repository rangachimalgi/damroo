import { logo } from "../assets/home";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#212121] py-14 text-white">
      <Container>
        <div className="flex flex-col sm:flex-row items-center sm:items-center sm:text-left text-center gap-6 sm:gap-10">
          <img src={logo} alt="Damroo Components" className="w-60 h-30" />
          <div className="mt-4 sm:mt-0 text-sm text-[#E5E7EB] space-y-2 text-center sm:text-left">
            <h2 className="text-base font-semibold text-white">Get in touch</h2>
            <p className="font-medium text-white">Damroo Components</p>
            <div>
              <p className="font-semibold text-white">Address</p>
              <p>
                Plot no 18, Gali No 1, Krishna Colony, Opposite Sector 25,
                Faridabad, Haryana - 121004
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Contact us</p>
              <p>
                Email:{" "}
                <span className="font-medium">
                  damroocomponents@gmail.com
                </span>
              </p>
              <p>
                Phone:{" "}
                <span className="font-medium">7982587458 , 9449879100</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
