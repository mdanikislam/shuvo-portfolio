import Marquee from 'react-fast-marquee';

const Testimonial = () => {
  return (
    <div>
      <section className="my-8">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
          <h1 className="text-4xl font-semibold leading-none text-center">
            What our customers are saying about us
          </h1>
        </div>

        <Marquee
          direction="right"
          gradient={true}
          gradientColor={[255, 255, 255]}
          gradientWidth={60}
          speed={30}
		  pauseOnHover='true'
        >
          <div className="flex gap-8 md:gap-10 px-4">
            {/* Use flex-col to stack each testimonial and give consistent width on all screens */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="min-w-[280px] max-w-sm flex-shrink-0 flex flex-col items-center">
                <div className="relative text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300"
                  >
                    <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                    <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                  </svg>
                  <p className="px-6 py-1 text-lg italic">
                    {i === 1 && `He really understands how to make Meta Ads work. Our cost per lead dropped significantly, and he always provides clear reporting. Highly recommended!`}
                    {i === 2 && `What I like most is his communication, discipline, and creative thinking. He brings new ideas every week and makes sure things get better over time.`}
                    {i === 3 && `Our sales have gone up, our ad visuals are more professional, and we now track everything clearly. Couldn’t ask for more.`}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300"
                  >
                    <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                    <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                  </svg>
                </div>
                <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
                <p className="text-center">
                  {i === 1 && `Raihan, Co-Founder at Beautyology`}
                  {i === 2 && `Glowee Team`}
                  {i === 3 && `Marketing Manager, Shahidas`}
                </p>
              </div>
            ))}
          </div>
        </Marquee>
      </section>
    </div>
  );
};

export default Testimonial;
