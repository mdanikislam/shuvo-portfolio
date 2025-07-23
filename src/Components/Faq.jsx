
const Faq = () => {
  return (
    <div>
        <h1 className='text-xl md:text-2xl font-medium text-purple-600 text-center'>FAQ</h1>
        <h2 className='text-2xl md:text-4xl font-bold text-center py-2'>Some Common Questions</h2>
      <div className="join join-vertical bg-base-100 flex justify-center pt-5">
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">
            What is digital marketing?
          </div>
          <div className="collapse-content text-sm">
            Digital marketing is the use of digital channels like websites, social media, search engines, email, and mobile apps to promote products or services. It helps businesses reach a wider audience, track user behavior, and measure campaign effectiveness in real time.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">
            What’s the difference between SEO and SEM?
          </div>
          <div className="collapse-content text-sm">
            SEO (Search Engine Optimization) is the process of optimizing your website to get free (organic) traffic from search engines.
SEM (Search Engine Marketing) involves paid strategies like Google Ads to appear in search results.
In short, SEO = free, SEM = paid.
          </div>
        </div>

        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">
            Why is social media important for marketing?
          </div>
          <div className="collapse-content text-sm">
            Social media allows direct interaction with customers, builds brand awareness, drives traffic, and increases sales. It also gives real-time feedback, helps with customer service, and boosts community engagement.
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">
            What are some common digital marketing tools?
          </div>
          <div className="collapse-content text-sm">
            <h2 className="font-bold">Google Analytics – for tracking website traffic</h2>

<p>1.Google Ads – for paid search marketing</p>

<p>2.Facebook Ads Manager – for running social media ads</p>

<p>3.Mailchimp – for email marketing</p>

<p>4.SEMrush / Ahrefs – for SEO research and performance</p>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">
            How do you measure the success of a digital marketing campaign?
          </div>
          <div className="collapse-content text-sm">
            <h2 className="font-bold">By tracking KPIs (Key Performance Indicators) like:</h2>

<p>1.Website traffic</p>

<p>2.Conversion rate</p>
<p>3.Click-through rate (CTR)

</p>
<p>4.ROI (Return on Investment)</p>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
