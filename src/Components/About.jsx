import aboutPic from "../assets/images/about.jpg";
const About = () => {
  return (
    <div className="py-10 md:w-9/12 w-10/12 mx-auto">
      <div>
        <img
          className=" w-6/12 md:w-3/12 mx-auto"
          src={aboutPic}
          alt="About_Me"
        />
        <h1 className="md:text-5xl text-2xl font-bold text-center pt-4 text-purple-600">
          Ranjohn Sarkar Shuvo
        </h1>
        <hr className="mt-5 border-1 text-purple-700 md:w-xs mx-auto" />
        <p className="pt-2 text-gray-600 text-center">"Data-driven strategy. Creative execution. Measurable results."</p>
      </div>
      <div className="pt-5">
        <p className="text-xl text-center">
          I believe marketing should be both art and science. I love blending creative storytelling with analytics to deliver campaigns that don’t just look good but perform well.
        </p>

        <p className="text-xl pt-8 text-center">
          I combine creativity, analytics, and a deep understanding of digital
          platforms to design campaigns that connect with audiences. With
          experience in managing Facebook Ads, content marketing, and SEO, I
          focus on delivering measurable business outcomes for my clients.
        </p>
      </div>
      <div>
        <h1>Key Skills</h1>
      </div>
    </div>
  );
};

export default About;
