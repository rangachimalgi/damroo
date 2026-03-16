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
          <div className="absolute inset-0 bg-black/10 sm:bg-black/20 sm:rounded-3xl" />

          {/* Centered welcome text */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center drop-shadow-lg px-4">
              Welcome to Damroo Components
            </h1>
          </div>

          {/* Precision paragraph: hidden on mobile, visible on tablet only */}
          <article className="hidden sm:block lg:hidden absolute top-[18%] left-1/2 -translate-x-1/2 w-[90%] z-10">
            <div className="bg-white/90 rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-[#111827] text-base sm:text-lg leading-snug font-extrabold text-center">
                Precision sheet metal manufacturing &amp; industrial job work for OEMs and industries.
              </p>
            </div>
          </article>

          <div className="absolute bottom-4 right-4 sm:bottom-[24%] sm:left-[6%] sm:right-auto flex items-center flex-wrap gap-2 sm:gap-4 justify-end sm:justify-start z-10">
            <button
              onClick={() => handleScrollTo("contact")}
              className="text-xs sm:text-[20px] bg-button-primary text-[#111827] hover:bg-button-primary-hover transition-colors px-3 py-2 sm:px-10 sm:py-3 rounded-md capitalize w-auto font-extrabold tracking-wide shadow-lg shadow-black/25"
            >
              Reach us at
            </button>

            <button
              onClick={() => handleScrollTo("services")}
              className="text-xs sm:text-[20px] text-[#111827] px-3 py-2 sm:px-10 sm:py-3 rounded-md border-[1px] border-transparent bg-white capitalize w-auto font-extrabold tracking-wide hover:bg-[#F3F4F6] shadow-lg shadow-black/25"
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
