import React from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import { how_1, how_2, how_3, how_4 } from "../../assets/home";

const items = [
  {
    id: 1,
    icon: how_1,
    heading: "ISO 9001:2015 certified quality",
    text: "Quality-driven systems, documented processes and rigorous checks to ensure consistent performance and reliability.",
  },
  {
    id: 2,
    icon: how_2,
    heading: "End-to-end sheet metal solutions",
    text: "Fabrication, cutting, bending, welding and assemblies under one roof for faster turnaround and better control.",
  },
  {
    id: 3,
    icon: how_3,
    heading: "Prototype to mass production",
    text: "Flexible capacity to support prototypes, small batches and large-scale manufacturing as your demand grows.",
  },
  {
    id: 4,
    icon: how_4,
    heading: "Trusted OEM & industrial partner",
    text: "Serving leading clients with dependable delivery, engineering support and long-term manufacturing partnerships.",
  },
];

export default function HowItWorks() {
  return (
    <section className="my-14">
      <Container>
        <SectionTitle title="why choose us" />
        <div className="bg-[#D9CAB3] bg-opacity-30 px-8 py-14 rounded-md mt-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-8">
            {items.map((item) => (
              <div
                className="text-center flex flex-col items-center justify-center"
                key={item.id}
              >
                <img src={item.icon} alt="icon" className="pb-4 w-24" />
                <h1 className="font-bold text-lg py-4">{item.heading}</h1>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
