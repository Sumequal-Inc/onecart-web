import { CORE_FEATURES } from "./data";

export function CoreFeatures() {
  return (
    <section id="features" className="py-24 bg-[#F8FAFC] px-5">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="mb-4 font-bold text-[#374151] text-3xl md:text-4xl">
            Our Loan Services
          </h2>

          <p className="max-w-2xl mx-auto text-[#6B7280]">
            We offer a wide range of loan services including Personal Loan,
            Business Loan, Home Loan and Loan Against Property with fast
            approval and minimal documentation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                {/* Icon */}
                <div className="mb-5 bg-[#1E3A8A] w-14 h-14 flex items-center justify-center rounded-xl group-hover:bg-[#2563EB] transition">
                  <Icon style={{ color: "white", fontSize: 28 }} />
                </div>

                {/* Title */}
                <h3 className="mb-3 text-[#374151] font-bold text-xl">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B7280] text-sm leading-6">
                  {feature.description}
                </p>

                {/* Read More */}
                <div className="mt-5">
                  <span className="text-[#2563EB] font-medium text-sm group-hover:underline">
                    Read More →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}