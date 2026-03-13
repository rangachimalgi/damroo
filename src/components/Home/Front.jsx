export default function Front() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="z-10">
      <div className="sm:w-11/12 mx-auto">
        <div
          className={`py-8 sm:rounded-3xl relative w-full h-[520px] sm:h-[620px] bg-homefrontbg bg-cover bg-center bg-no-repeat`}
        >
          <div className="absolute inset-0 bg-black/35 backdrop-blur-sm sm:rounded-3xl" />

          {/* Mobile hero text */}
          <article className="lg:hidden absolute top-[18%] left-1/2 -translate-x-1/2 w-[90%] z-10">
            <div className="bg-white/90 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-[#111827] text-base sm:text-lg leading-snug font-extrabold text-center">
                Precision sheet metal manufacturing &amp; industrial job work for OEMs and industries.
              </p>
            </div>
          </article>

          <div className="absolute bottom-[24%] sm:left-[6%] left-[5%] flex items-center flex-wrap gap-4 z-10">
            <button
              onClick={() => handleScrollTo("contact")}
              className="sm:text-[20px] bg-button-primary text-[#111827] hover:bg-button-primary-hover transition-colors sm:px-10 px-3 py-3 rounded-md capitalize sm:w-auto w-full font-extrabold tracking-wide shadow-lg shadow-black/25"
            >
              Reach us at
            </button>

            <button
              onClick={() => handleScrollTo("services")}
              className="sm:text-[20px] text-[#111827] sm:px-10 px-3 py-3 rounded-md border-[1px] border-transparent bg-white capitalize sm:w-auto w-full font-extrabold tracking-wide hover:bg-[#F3F4F6] shadow-lg shadow-black/25"
            >
              View services
            </button>
          </div>
          {/* Desktop hero text */}
          <article className="lg:flex hidden items-end absolute top-[30%] right-0 w-[30%] border-l-2 h-1/2 px-2 border-l-white z-10">
            <div className="w-[80%] bg-white/95 rounded-2xl px-4 py-4 shadow-xl">
              <p className="text-[#111827] text-[24px] leading-snug font-extrabold">
                Precision sheet metal manufacturing &amp; industrial job work for OEMs and industries.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
