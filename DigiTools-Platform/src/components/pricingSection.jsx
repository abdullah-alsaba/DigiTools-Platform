const plans = [
  {
    name: "Starter",
    price: 0,
    period: "Month",
    description: "Perfect for getting started",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    featured: false,
    cta: "Get Started Free",
  },
  {
    name: "Pro",
    price: 29,
    period: "Month",
    description: "Best for professionals",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    featured: true,
    cta: "Start Pro Trial",
  },
  {
    name: "Enterprise",
    price: 99,
    period: "Month",
    description: "For teams and businesses",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    featured: false,
    cta: "Contact Sales",
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Choose the plan that fits your needs. Upgrade or downgrade any time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-transform hover:-translate-y-1 duration-300 overflow-hidden flex flex-col ${
                plan.featured
                  ? "bg-[#6C3AED] text-white border-[#6C3AED] shadow-2xl"
                  : "bg-white border-gray-100 shadow-sm text-gray-900"
              }`}
            >
              <div className="p-7 flex flex-col gap-4 flex-1">
                {plan.featured && (
                  <span className="badge bg-white text-[#6C3AED] border-none text-xs font-bold px-3 py-1 w-fit rounded-full">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3
                    className={`font-extrabold text-xl ${
                      plan.featured ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm mt-1 ${
                      plan.featured ? "text-purple-200" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="flex items-end gap-1">
                  <span
                    className={`text-4xl font-extrabold ${
                      plan.featured ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price === 0 ? "$0" : `$${plan.price}`}
                  </span>
                  <span
                    className={`mb-1 text-sm ${
                      plan.featured ? "text-purple-200" : "text-gray-400"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>

                <ul className="flex flex-col gap-2 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <span
                        className={`font-bold ${
                          plan.featured ? "text-white" : "text-[#6C3AED]"
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={
                          plan.featured ? "text-purple-100" : "text-gray-600"
                        }
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full text-sm font-semibold mt-2 transition-all ${
                    plan.featured
                      ? "bg-white text-[#6C3AED] hover:bg-purple-50"
                      : "bg-[#6C3AED] text-white hover:bg-[#5a2dcc]"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
