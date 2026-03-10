import FundCard from "./FundCard";
import {
  funds_1,
  funds_2,
  funds_3,
  funds_4,
  funds_5,
  funds_6,
  funds_7,
  funds_8,
} from "../../assets/home";

const cards = [
  {
    id: 1,
    highlight: "Sheet Metal Fabrication",
    meta: "",
    description:
      "We specialize in manufacturing high-quality sheet metal components for various industrial applications. Our fabrication services include cutting, forming, shaping, and assembling metal parts according to customer drawings and specifications.",
    image: funds_1,
    badge: "Sheet Metal Fabrication",
  },
  {
    id: 2,
    highlight: "Laser & Precision Cutting",
    meta: "",
    description:
      "Our precision cutting services ensure accurate dimensions and clean finishes for all types of sheet metal parts. We handle both standard and custom designs with high precision.",
    image: funds_2,
    badge: "Laser Cutting & Precision Cutting",
  },
  {
    id: 3,
    highlight: "CNC Bending & Forming",
    meta: "",
    description:
      "Using modern bending equipment, we offer precise forming and bending of sheet metal components to achieve exact shapes and angles required for industrial applications.",
    image: funds_3,
    badge: "CNC Bending & Forming",
  },
  {
    id: 4,
    highlight: "Welding & Assembly",
    meta: "",
    description:
      "We provide strong and reliable welding solutions for different types of metal components, along with complete assembly services to deliver ready-to-use products.",
    image: funds_4,
    badge: "Welding & Assembly",
  },
  {
    id: 5,
    highlight: "Custom Job Work",
    meta: "",
    description:
      "Damroo Components undertakes all types of sheet metal job work, whether it is prototype development, small batch production, or large-scale manufacturing as per client requirements.",
    image: funds_5,
    badge: "Custom Job Work",
  },
  {
    id: 6,
    highlight: "Component Manufacturing",
    meta: "",
    description:
      "We manufacture a wide range of custom sheet metal components, brackets, enclosures, frames, panels, and fabricated assemblies for multiple industries.",
    image: funds_6,
    badge: "Component Manufacturing",
  },
  {
    id: 7,
    highlight: "OEM & Industrial Supply",
    meta: "",
    description:
      "We support OEMs and industrial clients with consistent supply of precision sheet metal parts, ensuring quality, reliability, and timely delivery.",
    image: funds_7,
    badge: "OEM & Industrial Supply",
  },
];

export default function FundCards() {
  return (
    <article className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-14 gap-4">
      {cards.map((card) => (
        <FundCard key={card.id} card={card} />
      ))}
    </article>
  );
}
