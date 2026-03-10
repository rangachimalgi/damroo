import Container from "../Container";
import SectionTitle from "./SectionTitle";
import { portfolio, portfolio_2, portfolio_3 } from "../../assets/home";

const items = [
  {
    id: 1,
    image: portfolio,
    title: "Sheet metal enclosures",
  },
  {
    id: 2,
    image: portfolio_2,
    title: "Fabricated frames",
  },
  {
    id: 3,
    image: portfolio_3,
    title: "Industrial components",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="my-14">
      <Container>
        <SectionTitle title="our portfolio" />
        <p className="text-[#5B6469] max-w-3xl mt-3">
          A glimpse of sheet metal components, enclosures and fabricated
          assemblies manufactured for different industrial applications.
        </p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mt-8">
          {items.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-white shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-contain bg-[#F9FAFB]"
              />
              <div className="px-4 py-3">
                <h3 className="font-semibold text-[#111827] text-sm">
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

