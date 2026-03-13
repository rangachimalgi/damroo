import { useState } from "react";
import Container from "../Container";
import SectionTitle from "./SectionTitle";
import {
  hanging,
  standing,
  hangings,
  fixclip,
  halfkundi,
  ubracket,
  standingseam,
  goldenclip,
  patti,
  mainstand,
  gistand,
} from "../../assets/home";

const items = [
  {
    id: 1,
    image: hanging,
    title: "Hanging clip 54/200",
  },
  {
    id: 2,
    image: standing,
    title: "Standing sheet clip /200",
  },
  {
    id: 3,
    image: hangings,
    title: "Hangings clip 78/200",
  },
  {
    id: 4,
    image: fixclip,
    title: "Fix clip ss304.",
  },
  {
    id: 5,
    image: halfkundi,
    title: "Half kundi",
  },
  {
    id: 6,
    image: ubracket,
    title: "U- bracket 10 mm",
  },
  {
    id: 7,
    image: standingseam,
    title: "Satending seem 2",
  },
  {
    id: 8,
    image: goldenclip,
    title: "Golden clip",
  },
  {
    id: 9,
    image: patti,
    title: "6Mm Patti",
  },
  {
    id: 10,
    image: mainstand,
    title: "Main stand",
  },
  {
    id: 11,
    image: gistand,
    title: "Gl stand",
  },
];

export default function Portfolio() {
  const [mobileIndex, setMobileIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  const mobileItemsPerSlide = 1;
  const desktopItemsPerSlide = 3;

  const mobileTotalSlides = Math.ceil(items.length / mobileItemsPerSlide);
  const desktopTotalSlides = Math.ceil(items.length / desktopItemsPerSlide);

  const mobileVisibleItems = [items[mobileIndex]];

  const desktopVisibleItems = [
    items[desktopIndex],
    items[(desktopIndex + 1) % items.length],
    items[(desktopIndex + 2) % items.length],
  ];

  const handleMobileNext = () => {
    setMobileIndex((prev) => (prev + mobileItemsPerSlide) % items.length);
  };

  const handleMobilePrev = () => {
    setMobileIndex((prev) => (prev - mobileItemsPerSlide + items.length) % items.length);
  };

  const handleDesktopNext = () => {
    setDesktopIndex((prev) => (prev + desktopItemsPerSlide) % items.length);
  };

  const handleDesktopPrev = () => {
    setDesktopIndex(
      (prev) => (prev - desktopItemsPerSlide + items.length) % items.length
    );
  };

  return (
    <section id="portfolio" className="my-14">
      <Container>
        <SectionTitle title="our portfolio" />
        <p className="text-[#5B6469] max-w-3xl mt-3">
          A glimpse of sheet metal components, enclosures and fabricated
          assemblies manufactured for different industrial applications.
        </p>
        {/* Mobile: 1 image per slide with arrows */}
        <div className="mt-8 relative md:hidden">
          <div className="grid grid-cols-1 gap-6">
            {mobileVisibleItems.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl bg-white shadow-sm overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-contain bg-[#F9FAFB]"
                />
                <div className="px-4 py-4">
                  <h3 className="font-semibold text-[#111827] text-base">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={handleMobilePrev}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-md w-9 h-9 flex items-center justify-center text-[#111827]"
            aria-label="Previous projects"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={handleMobileNext}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-md w-9 h-9 flex items-center justify-center text-[#111827]"
            aria-label="Next projects"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {Array.from({ length: mobileTotalSlides }).map((_, slideIndex) => {
            const isActive = mobileIndex === slideIndex * mobileItemsPerSlide;

            return (
              <button
                key={slideIndex}
                type="button"
                onClick={() =>
                  setMobileIndex((slideIndex * mobileItemsPerSlide) % items.length)
                }
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  isActive ? "bg-[#111827]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              />
            );
          })}
        </div>

        {/* Desktop/Tablet: 3 images per slide with arrows and dots */}
        <div className="mt-8 relative hidden md:block">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 gap-6">
            {desktopVisibleItems.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl bg-white shadow-sm overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-contain bg-[#F9FAFB]"
                />
                <div className="px-4 py-4">
                  <h3 className="font-semibold text-[#111827] text-base">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={handleDesktopPrev}
            className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-md w-9 h-9 flex items-center justify-center text-[#111827]"
            aria-label="Previous projects"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={handleDesktopNext}
            className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full shadow-md w-9 h-9 flex items-center justify-center text-[#111827]"
            aria-label="Next projects"
          >
            ›
          </button>
        </div>

        <div className="hidden md:flex justify-center gap-2 mt-6">
          {Array.from({ length: desktopTotalSlides }).map((_, slideIndex) => {
            const isActive =
              desktopIndex === slideIndex * desktopItemsPerSlide;

            return (
              <button
                key={slideIndex}
                type="button"
                onClick={() =>
                  setDesktopIndex(
                    (slideIndex * desktopItemsPerSlide) % items.length
                  )
                }
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  isActive ? "bg-[#111827]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

