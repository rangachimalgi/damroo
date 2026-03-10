import Container from "../Container";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="my-14">
      <Container>
        <SectionTitle title="contact us" />
        <div className="mt-6 text-[#5B6469] space-y-2">
          <h2 className="font-bold text-lg text-black">Damroo Components</h2>
          <p>
            Plot no 18, Gali No 1, Krishna Colony, Opposite Sector 25,
            Faridabad, Haryana - 121004
          </p>
          <p>
            <span className="font-semibold text-black">Email:</span>{" "}
            damroocomponents@gmail.com
          </p>
          <p>
            <span className="font-semibold text-black">Phone:</span> 7982587458,
            9449879100
          </p>
        </div>
      </Container>
    </section>
  );
}

