import Container from "../Container";
import SectionTitle from "./SectionTitle";
import { about } from "../../assets/home";

export default function About() {
  return (
    <section id="about" className="my-14">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div>
            <img
              src={about}
              alt="Damroo Components facility"
              className="w-full rounded-3xl object-cover shadow-md"
            />
          </div>
          <div>
            <SectionTitle title="about us" />
            <div className="mt-4 space-y-3 text-[#5B6469]">
              <p>
                Damroo Components is a trusted name in precision sheet metal
                manufacturing and industrial job work solutions. With a
                commitment to quality, reliability, and engineering excellence,
                we specialize in delivering customized metal fabrication
                services that cater to diverse industrial requirements.
              </p>
              <p>
                At Damroo Components, we manufacture a wide range of sheet metal
                components and assemblies, supporting industries with high
                quality fabrication, forming, cutting, and finishing services.
                Whether it is small batch production, prototype development, or
                large scale manufacturing, our team ensures that every project
                is executed with precision and efficiency.
              </p>
              <p>
                Our facility is equipped to handle all types of sheet metal job
                work, including fabrication, bending, punching, welding, and
                customized metal processing as per client drawings and
                specifications. We work closely with our customers to understand
                their technical requirements and deliver solutions that meet the
                highest standards of durability and performance.
              </p>
              <p>
                Driven by a culture of innovation, workmanship, and customer
                satisfaction, Damroo Components has built a reputation for
                timely delivery and dependable manufacturing support. As we
                continue to grow, our mission remains simple – to provide
                reliable, high precision sheet metal manufacturing solutions
                that help our customers build better products and stronger
                businesses.
              </p>
            </div>
            {/* <button className="mt-6 inline-flex items-center gap-2 bg-[#111827] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#000000]">
              Learn more about us <span>➜</span>
            </button> */}
          </div>
        </div>
      </Container>
    </section>
  );
}

