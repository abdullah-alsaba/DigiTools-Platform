import bannerImg from "../assets/banner.png";
import playIcon from "../assets/Play.png";

const Banner = () => {
  return (
    <>
      <section className="bg-white pt-14 pb-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="flex-1 text-left max-w-xl">
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#6C3AED]"></span>
              New: AI Powered Tools Available
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-5">
              Supercharge Your <br />
              Digital Workflow
            </h1>

            <p className="text-gray-500 text-sm md:text-base max-w-md mb-3 leading-relaxed">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today.
            </p>

            <p className="text-sm font-medium block mb-7">Explore Products</p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="btn rounded-full px-7 bg-[#6C3AED] border-none text-white hover:bg-[#5a2dcc] font-semibold text-sm">
                Explore Products
              </button>

              <button className="btn btn-outline rounded-full px-7 text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-300 font-semibold text-sm flex items-center gap-2">
                <img src={playIcon} alt="Play" className="w-4 h-4" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <img
                src={bannerImg}
                alt="Digital Tools"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-linear-to-r from-[#6C3AED] to-[#9B59F5] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-6 text-center text-white">
          <div>
            <h3 className="text-3xl font-extrabold">50K+</h3>
            <p className="text-purple-200 text-sm mt-1">Active Users</p>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/20"></div>

          <div>
            <h3 className="text-3xl font-extrabold">200+</h3>
            <p className="text-purple-200 text-sm mt-1">Premium Tools</p>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/20"></div>

          <div>
            <h3 className="text-3xl font-extrabold">4.9</h3>
            <p className="text-purple-200 text-sm mt-1">Rating</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
