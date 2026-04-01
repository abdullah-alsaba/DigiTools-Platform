import userIcon from "../assets/user.png";
import packageIcon from "../assets/package.png";
import rocketIcon from "../assets/rocket.png";

const StepsSection = () => {
  return (
    <section className="py-20 px-6 md:px-10 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 mt-3 text-sm">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center relative shadow-sm hover:shadow-md transition">
            
            <span className="absolute top-4 right-4 w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-semibold flex items-center justify-center">
              01
            </span>

           
            <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <img src={userIcon} alt="Create Account" className="w-7 h-7" />
            </div>

            <h3 className="font-semibold text-gray-900 text-lg mb-2">
              Create Account
            </h3>
            <p className="text-gray-500 text-sm">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center relative shadow-sm hover:shadow-md transition">
            <span className="absolute top-4 right-4 w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-semibold flex items-center justify-center">
              02
            </span>

            <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <img
                src={packageIcon}
                alt="Choose Products"
                className="w-7 h-7"
              />
            </div>

            <h3 className="font-semibold text-gray-900 text-lg mb-2">
              Choose Products
            </h3>
            <p className="text-gray-500 text-sm">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          
          <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center relative shadow-sm hover:shadow-md transition">
            <span className="absolute top-4 right-4 w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-semibold flex items-center justify-center">
              03
            </span>

            <div className="w-16 h-16 mx-auto rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <img src={rocketIcon} alt="Start Creating" className="w-7 h-7" />
            </div>

            <h3 className="font-semibold text-gray-900 text-lg mb-2">
              Start Creating
            </h3>
            <p className="text-gray-500 text-sm">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
