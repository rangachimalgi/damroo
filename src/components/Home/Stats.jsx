export default function Stats() {
  return (
    <section className="stats_box py-10 grid place-items-center lg:grid-cols-4 grid-cols-2 gap-4 sm:w-9/12 w-11/12 mx-auto -mt-8 px-4">
      <div>
        <h1 className="md:text-[28px] text-[20px] font-bold">Quality</h1>
        <p>Standardized checks at every manufacturing stage</p>
      </div>
      <div>
        <h1 className="md:text-[28px] text-[20px] font-bold">
          ISO 9001:2015
        </h1>
        <p>Certified quality management system</p>
      </div>
      <div>
        <h1 className="md:text-[28px] text-[20px] font-bold">On-time</h1>
        <p>Planned lead times and committed dispatch dates</p>
      </div>
      <div>
        <h1 className="md:text-[28px] text-[20px] font-bold">Support</h1>
        <p>Technical collaboration from enquiry to dispatch</p>
      </div>
    </section>
  );
}
