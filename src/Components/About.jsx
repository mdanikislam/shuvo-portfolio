import aboutPic from "../assets/images/about.jpg";
import { GiSkills } from "react-icons/gi";

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
        <p className="pt-2 text-gray-600 text-center">
          "Data-driven strategy. Creative execution. Measurable results."
        </p>
      </div>
      <div className="pt-5">
        <p className="text-xl text-center">
          I believe marketing should be both art and science. I love blending
          creative storytelling with analytics to deliver campaigns that don’t
          just look good but perform well.
        </p>

        <p className="text-xl pt-8 text-center">
          I combine creativity, analytics, and a deep understanding of digital
          platforms to design campaigns that connect with audiences. With
          experience in managing Facebook Ads, content marketing, and SEO, I
          focus on delivering measurable business outcomes for my clients.
        </p>
      </div>
      <div className="flex flex-col items-center pt-3">
        <div>
          <h1 className="flex gap-2 items-center font-bold text-3xl py-3">
          <GiSkills /> Key Skills
        </h1>
        <ul>
          <li>✅ Digital Marketing Strategy & Planning</li>

          <li>✅ Facebook Ads Manager, Pixel & Analytics</li>

          <li>✅ Google Analytics (including GA4)</li>

          <li>✅ Content & Creative Coordination</li>

          <li>✅ Market Research & Competitor Analysis</li>

          <li>✅ SEO (Search Engine Optimization)</li>
          <li>✅ Video Editing (Adobe After Effects, Premiere Pro)</li>

          <li>✅ Graphic Design (Photoshop, Illustrator)</li>
        </ul>
          <div className="pt-5">
            <h1 className="flex gap-2 items-center font-bold text-3xl py-3">📈 Experience</h1>
<ul>
<li> ✔️ Digital Marketing Executive at Beautyology, Glowee Bangladesh, Shahidas Lifestyle</li>

<li>✔️ Content Marketing</li>

<li>✔️ Facebook Ads Campaign Management</li>

<li>✔️ Analytics & Reporting</li>
</ul>
          </div>
        </div>
      </div>
      {/* Experience  */}
      
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab suscipit a veritatis ratione ea doloremque excepturi rem magnam iste, dignissimos error sunt possimus dolore iusto saepe nesciunt quia quo esse vero ad quidem, neque perspiciatis. Harum eos minima nam sed, molestiae ullam sequi, adipisci porro corporis beatae unde necessitatibus excepturi.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur, quidem officiis ut corporis ullam impedit rerum? Sed itaque amet maiores, nulla ea laboriosam. Sequi odio doloremque similique provident alias odit quisquam esse eligendi! Aliquid distinctio sed expedita ab, nulla nihil, impedit nisi nesciunt sit labore fugit assumenda esse ipsa natus officiis iste magni, atque velit doloribus ullam quibusdam quo molestiae aliquam repudiandae? Dolore eveniet repudiandae, iste dolores deserunt rerum.</p>
      </div>
  
  );
};

export default About;
