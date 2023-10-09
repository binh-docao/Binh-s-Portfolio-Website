import React, { useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import Modal from "react-modal";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from 'next/link';

// Portfolio.jsx
Modal.setAppElement("#__next");

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});


const Portfolio = () => {

        
  return (
    <>
      <Gallery>
        <Tabs>
          {/* START FILTER TABLIST */}
          <TabList>
            <Tab>Friends</Tab>
            <Tab>Places</Tab>
            {/* <Tab>Instagram</Tab> */}
            {/* <Tab><Social/></Tab> */}
          </TabList>
          {/* END FILTER TABLIST */}

          <div className="list_wrapper">
            {/* START ALL PORTFOLIO */}
            <TabPanel>
              <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                {/* {Hannah Lebow} */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      
                      <Link href={`/hannahlebow`}>
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/HL/3.jpg"
                        alt="Hannah Lebow"
                        data-tip
                        data-for="HL1"
                      />
                      </Link>
                      <ReactTooltip
                        id="HL1"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(161,190,247,0.9)' }}>Hannah Lebow</h5>
                          <span >Portraits</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Link href={`/nathanguindon`}>
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/ng/NG-2.jpg"
                        alt="NathanRing"
                        data-tip
                        data-for="NG"
                      />
                      </Link>
                      <ReactTooltip
                        id="NG"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(105,163,223,0.9)' }}>Nathan Guindon</h5>
                          <span >Ring Order</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/CK/CK-12.jpg"
                        alt="CK"
                        data-tip
                        data-for="CK"
                      />

                      <ReactTooltip
                        id="CK"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(112,21,62,0.65)' }}>Kaylee & Claire</h5>
                          <span >Game Day</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

          
 
                  <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/trevorzoe/1.jpg"
                        alt="TrevorZoe"
                        data-tip
                        data-for="TrevorZoe"
                      />
                      <ReactTooltip
                        id="TrevorZoe"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(184,178,188,0.88)' }}> Trevor & Zoe</h5>
                          <span>Couple</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/NL/NL-1.jpg"
                        alt="NL"
                        data-tip
                        data-for="NL"
                        // onClick={toggleModalNL}
                      />

                      <ReactTooltip
                        id="NL"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(158,131,101,0.8)' }}>Nico Lopez</h5>
                          <span >City</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}

                {/* {Hannah Lebow} */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      
                      <Link href={`/alexf`}>
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/alexfrench/2.jpg"
                        alt="Alex French"
                        data-tip
                        data-for="AF"
                      />
                      </Link>
                      <ReactTooltip
                        id="AF"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(225,0,151,0.75)' }}>Alex French</h5>
                          <span >Ring Day</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

 {/* // PORTFOLIO_MODAL_TRIGGER_INSERT */}



              </ul>
            </TabPanel>
            {/* END ALL PORTFOLIO */}

          {/* LandScape */}
          <TabPanel>
          <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
          <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/LAND/land-7.jpg"
                        thumbnail="/img/portfolio/LAND/land-7.jpg"
                        width={466}
                        height={700}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={466}
                            height={700}
                            srl_gallery_image="true"
                            src="/img/portfolio/LAND/land-7.jpg"
                            alt="land-1"
                            data-tip
                            data-for="land-1"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
  
                    </div>
                  </div>
                </li>
                {/* END SHOT */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/LAND/land-8.jpg"
                        thumbnail="/img/portfolio/LAND/land-8.jpg"
                        width={466}
                        height={700}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={466}
                            height={700}  
                            srl_gallery_image="true"
                            src="/img/portfolio/LAND/land-8.jpg"
                            alt="land-1"
                            data-tip
                            data-for="land-1"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
  
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/LAND/land-2.jpg"
                        thumbnail="/img/portfolio/LAND/land-2.jpg"
                        width={466}
                        height={700}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={466}
                            height={700}
                            srl_gallery_image="true"
                            src="/img/portfolio/LAND/land-2.jpg"
                            alt="land-1"
                            data-tip
                            data-for="land-1"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
  
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/LAND/land-3.jpg"
                        thumbnail="/img/portfolio/LAND/land-3.jpg"
                        width={466}
                        height={700}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={466}
                            height={700}
                            srl_gallery_image="true"
                            src="/img/portfolio/LAND/land-3.jpg"
                            alt="land-1"
                            data-tip
                            data-for="land-1"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
  
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/LAND/land-4.jpg"
                        thumbnail="/img/portfolio/LAND/land-4.jpg"
                        width={466}
                        height={700}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={466}
                            height={700}
                            srl_gallery_image="true"
                            src="/img/portfolio/LAND/land-4.jpg"
                            alt="land-1"
                            data-tip
                            data-for="land-1"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
  
                    </div>
                  </div>
                </li>
                {/* END SHOT */}
                

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/LAND/land-5.jpg"
                        thumbnail="/img/portfolio/LAND/land-5.jpg"
                        width={466}
                        height={700}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={466}
                            height={700}
                            srl_gallery_image="true"
                            src="/img/portfolio/LAND/land-5.jpg"
                            alt="land-1"
                            data-tip
                            data-for="land-1"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      
  
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/LAND/land-6.jpg"
                        thumbnail="/img/portfolio/LAND/land-6.jpg"
                        width={466}
                        height={700}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={466}
                            height={700}  
                            srl_gallery_image="true"
                            src="/img/portfolio/LAND/land-6.jpg"
                            alt="land-1"
                            data-tip
                            data-for="land-1"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
  
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/LAND/land-9.jpg"
                        thumbnail="/img/portfolio/LAND/land-9.jpg"
                        width={466}
                        height={700}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={466}
                            height={700}  
                            srl_gallery_image="true"
                            src="/img/portfolio/LAND/land-9.jpg"
                            alt="land-1"
                            data-tip
                            data-for="land-1"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
  
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

            </ul>
          </TabPanel>




            {/* START PHOTOGRAHY */}

            {/* END PHOTOGRAHY */}
          </div>
          {/* END LIST WRAPPER */}
        </Tabs>
      </Gallery>
      
 {/* // PORTFOLIO_MODAL_COMPONENT_INSERT */}

    </>
  );
};

export default Portfolio;
