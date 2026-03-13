import anshulIndustries from "../../assets/home/anshulIndustries.jpg";
import heroMotoCorp from "../../assets/home/Hero_MotoCorp.svg.png";
import gbIndustries from "../../assets/home/gbIndustries.png";
import kansal from "../../assets/home/kansal.png";
import mechvil from "../../assets/home/mechvil.png";
import SectionTitle from "./SectionTitle";

export default function Trusted() {
  return (
    <section className="mt-14 bg-[#6D9886] rounded-md py-12">
      <div className="flex flex-col md:flex-row items-center md:justify-around px-4 gap-8">
        <SectionTitle title="clients we serve" classes="opacity-50" />
        <div className="flex-1 flex flex-col gap-6">
          <div className="w-full flex flex-wrap items-center lg:justify-start justify-center gap-4">
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

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <div className="bg-white/10 border border-white/40 rounded-full px-6 py-2">
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase text-white text-center">
                KAMA PARINT N PAK
              </p>
            </div>
            <div className="bg-[#F3F4F6] rounded-full px-6 py-2 shadow-sm">
              <p className="text-xs sm:text-sm font-extrabold tracking-[0.18em] uppercase text-[#111827] text-center">
                HINDUSTAN PROJECTS AND INDUSTRIES
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="mt-8 text-center text-white px-4">
        Hero Motors, GB Industries, Anshul Industries, Kansal Color Roofing,
        Packer Speed, Mechvil Infrastructure Pvt Ltd, Wintra PEB
      </div> */}
    </section>
  );
}
