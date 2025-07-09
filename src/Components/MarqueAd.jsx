import React from 'react';
import facebookAds from '../assets/images/facebook-ads-for-dentists.png'
import googleAds from '../assets/images/google-ads.png'
import content from '../assets/images/content.jpeg'
import keyword from '../assets/images/keyword-research-.webp'
import facebookBuisinessPage from '../assets/images/page book business page setup.webp'
import youtubeSeo from '../assets/images/Youtube_SEO.png'
import facebookPixel from '../assets/images/the_facebook_pixel.webp'

const MarqueAd = () => {
    return (
        <div>
                  <div className="pt-10">
        <Marquee>
            <img src={facebookAds} alt="" />
            <img src={googleAds} alt="" />
            <img src={content} alt="" />
            <img src={keyword} alt="" />
            <img src={facebookBuisinessPage} alt="" />
            <img src={youtubeSeo} alt="" />
            <img src={facebookPixel} alt="" />
        </Marquee>
      </div>
        </div>
    );
};

export default MarqueAd;