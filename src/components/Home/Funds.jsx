import Container from "../Container";
import SectionTitle from "./SectionTitle";

const services = [
  {
    id: 1,
    title: "Sheet Metal Fabrication",
    text:
      "High-quality sheet metal components with cutting, forming, shaping and assembling as per customer drawings and specifications.",
  },
  {
    id: 2,
    title: "Laser Cutting & Precision Cutting",
    text:
      "Accurate dimensions and clean finishes for all sheet metal parts, handling both standard and custom designs with high precision.",
  },
  {
    id: 3,
    title: "CNC Bending & Forming",
    text:
      "Precise forming and bending of sheet metal components to achieve exact shapes and angles for industrial applications.",
  },
  {
    id: 4,
    title: "Welding & Assembly",
    text:
      "Strong and reliable welding solutions with complete assembly services to deliver ready-to-use metal products.",
  },
  {
    id: 5,
    title: "Custom Job Work",
    text:
      "Prototype development, small batch production and large-scale manufacturing of sheet metal parts as per client requirements.",
  },
  {
    id: 6,
    title: "Component Manufacturing",
    text:
      "Custom brackets, enclosures, frames, panels and fabricated assemblies for multiple industries.",
  },
  {
    id: 7,
    title: "OEM & Industrial Supply",
    text:
      "Consistent supply of precision sheet metal parts for OEMs and industrial clients, focused on quality and on-time delivery.",
  },
];

export default function Funds() {
  return (
    <section id="services" className="my-14">
      <Container>
        <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
          <div>
            <SectionTitle title="our services" />
            <p className="text-[#5B6469] max-w-3xl mt-3">
              At Damroo Components, we provide a comprehensive range of sheet
              metal manufacturing and industrial job work services tailored to
              meet the diverse needs of industries. Our facility operates under
              a quality-driven system certified with ISO 9001:2015, ensuring
              consistent manufacturing standards, process control, and customer
              satisfaction.
            </p>
          </div>
          {/* <button className="bg-button-primary hover:bg-button-primary-hover text-[#6C6252] font-bold px-6 py-2 rounded-full">
            Get Started
          </button> */}
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {services.map((service) => (
            <article
              key={service.id}
              className="rounded-2xl p-6 border bg-white text-[#111827] border-gray-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#111827] hover:text-white hover:border-transparent group"
            >
              <div className="mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold bg-[#F3F4F6] text-[#111827] group-hover:bg-white group-hover:text-[#111827]"
                >
                  {service.title.charAt(0)}
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p
                className="text-sm mb-4 text-[#5B6469] group-hover:text-gray-200"
              >
                {service.text}
              </p>
              {/* <button
                className="text-sm font-semibold flex items-center gap-1 text-[#111827] group-hover:text-[#A7F3D0]"
              >
                Learn more <span>›</span>
              </button> */}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
