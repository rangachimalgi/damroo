import anshulIndustries from "../../assets/home/anshulIndustries.jpg";
import heroMotoCorp from "../../assets/home/Hero_MotoCorp.svg.png";
import gbIndustries from "../../assets/home/gbIndustries.png";
import kansal from "../../assets/home/kansal.png";
import mechvil from "../../assets/home/mechvil.png";
import SectionTitle from "./SectionTitle";

export default function Trusted() {
  return (
    <section className="mt-14 bg-[#6D9886] rounded-md py-12">
      <div className="flex items-center md:justify-around px-4 gap-4 flex-wrap justify-center">
        <SectionTitle title="clients we serve" classes="opacity-50" />
        <div className="lg:w-1/2 w-full flex flex-wrap items-center lg:justify-start justify-center gap-4 lg:mt-0 mt-4">
          <img
            src={heroMotoCorp}
            alt="Hero MotoCorp"
            className="h-20 w-auto object-contain"
          />
          <img
            src={gbIndustries}
            alt="GB Industries"
            className="h-20 w-auto object-contain"
          />
          <img
            src={anshulIndustries}
            alt="Anshul Industries"
            className="h-20 w-auto object-contain"
          />
          <img
            src={kansal}
            alt="Kansal Color Roofing"
            className="h-25 w-auto object-contain"
          />
          <img
            src={mechvil}
            alt="Mechvil Infrastructure"
            className="h-30 w-auto object-contain"
          />
        </div>
      </div>
      {/* <div className="mt-8 text-center text-white px-4">
        Hero Motors, GB Industries, Anshul Industries, Kansal Color Roofing,
        Packer Speed, Mechvil Infrastructure Pvt Ltd, Wintra PEB
      </div> */}
    </section>
  );
}
