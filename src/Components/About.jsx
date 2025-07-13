import aboutPic from "../assets/images/about.jpg";
const About = () => {
  return (
    <div className="py-10 w-9/12 mx-auto">
      <div>
        <img
          className=" w-6/12 md:w-3/12 mx-auto"
          src={aboutPic}
          alt="About_Me"
        />
        <h1 className="md:text-4xl text-2xl font-bold text-center pt-4 text-purple-600">
          Ranjohn Sarkar Shuvo
        </h1>
      </div>
      <div className="pt-5">
        <p className="text-xl text-center">
          A passionate Digital Marketing Executive based in Dhaka, Bangladesh. I
          specialize in creating effective marketing strategies that drive
          results and help brands grow online.
        </p>

        <p className="text-xl pt-8 text-center">
          I combine creativity, analytics, and a deep understanding of digital
          platforms to design campaigns that connect with audiences. With
          experience in managing Facebook Ads, content marketing, and SEO, I
          focus on delivering measurable business outcomes for my clients. I’m
          always eager to learn and adapt to the rapidly evolving digital
          landscape, staying updated with the latest tools, trends, and best
          practices.
        </p>
      </div>
    </div>
  );
};

export default About;
