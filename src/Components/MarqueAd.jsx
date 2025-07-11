
import facebookAds from '../assets/images/facebook-ads-for-dentists.png'
import googleAds from '../assets/images/google-ads.png'
import content from '../assets/images/content.jpeg'
import keyword from '../assets/images/keyword-research-.webp'
import facebookBuisinessPage from '../assets/images/page book business page setup.webp'
import youtubeSeo from '../assets/images/Youtube_SEO.png'
import facebookPixel from '../assets/images/the_facebook_pixel.webp'
import Marquee from 'react-fast-marquee'

const MarqueAd = () => {
    return (
        <div>
                  <div className="pt-10 ">
        <Marquee>
            <img src={facebookAds}  className='md:h-20 mx-4 object-contain' alt="" />
            <img src={googleAds}  className='md:h-20 mx-4 object-contain' alt="" />
            <img src={content } className='md:h-20 mx-4 object-contain' alt="" />
            <img src={keyword}  className='md:h-20 mx-4 object-contain' alt="" />
            <img src={facebookBuisinessPage}  className='md:h-20 mx-4 object-contain' alt="" />
            <img src={youtubeSeo}  className='md:h-20 mx-4 object-contain' alt="" />
            <img src={facebookPixel}  className='md:h-20 mx-4 object-contain' alt="" />
        </Marquee>
      </div>
        </div>
    );
};

export default MarqueAd;