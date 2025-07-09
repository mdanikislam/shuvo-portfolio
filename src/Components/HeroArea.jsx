import heroPic from "../assets/images/hero.gif";

const HeroArea = () => {
  return (
    <div className="md:flex justify-between gap-3 items-center">
      <div >
        <h1 className="text-2xl md:text-3xl font-medium">Hi'm,</h1>
        <h1 className="text-4xl md:text-5xl py-5 font-bold">Ranjohn Sarkar Shuvo</h1>
        <p className="md:w-4/5 text-xl ">
          I help brands grow faster with data-driven digital marketing
          strategies that attract the right audience, boost engagement, and turn
          clicks into loyal customers.
        </p>
        <div className="pt-8">
          <a
            href="#_"
            class="relative inline-flex items-center justify-center p-4 px-8 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
          >
            <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
            <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
            <span class="relative text-white">Hire Me</span>
          </a>
        </div>
      </div>
      <div>
        <img className="object-cover" src={heroPic} alt="" />
      </div>
    </div>
  );
};

export default HeroArea;
