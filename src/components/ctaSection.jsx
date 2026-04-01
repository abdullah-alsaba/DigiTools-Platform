const CTASection = () => {
  return (
    <section className="py-16 px-6 md:px-10 bg-linear-to-r from-[#6C3AED] to-[#9B59F5]">
      <div className="max-w-7xl mx-auto text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-purple-200 text-sm md:text-base max-w-lg">
          Join thousands of professionals who are already using DigiTools to
          work smarter. Start your free trial today.
        </p>
        <p className="text-purple-300 text-xs">
          14-day free trial • No credit card required • Cancel anytime
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="h-12 px-8 rounded-full bg-white text-[#6C3AED] font-semibold text-sm hover:bg-purple-50 transition-all duration-300">
            Explore Products
          </button>
          <button className="h-12 px-8 rounded-full border border-white text-white font-semibold text-sm hover:bg-white hover:text-[#6C3AED] transition-all duration-300">
            View Pricing
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
