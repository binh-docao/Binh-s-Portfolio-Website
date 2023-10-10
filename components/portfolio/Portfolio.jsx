import React, {useEffect} from "react";
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import {Gallery,Item} from "react-photoswipe-gallery";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from 'next/link';
import "photoswipe/dist/photoswipe.css";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'


const Portfolio = () => {

  return (
    <>
      <Gallery>
        <Tabs>
          {/* START FILTER TABLIST */}
          <TabList>
            <Tab>Friends</Tab>
            <Tab>Events</Tab>
            <Tab>Places</Tab>
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
              >                                      {/* {Hannah Lebow} */}
              <li>
          <div className="inner">
            <div className="entry tokyo_tm_portfolio_animation_wrap">
              
              <Link href={`/hannahlebow`}
                data-tooltip-id="HG"
                data-tooltip-float="true"
                data-tooltip-variant="light"
                data-tooltip-place="bottom"
                data-tooltip-position-strategy="fixed"
              >
              <Image
                width={400}
                height={600}
                src="/img/portfolio/hannahlebow/3.jpg"
                alt="Hannah Lebow"
                
              />

              </Link>
              <ReactTooltip
                id="HG"
                place="bottom"
                type="light"
                effect="float"
                className="tooltip-wrapper"
              >
                <div>
                  <h5 style={{ background: 'rgba(161,190,247,0.9)' }}>Hannah Lebow</h5>
                  <span>First Day of School</span>
                </div>

              </ReactTooltip>
            </div>
          </div>
        </li>
        {/* END HANNAH LEBOW */}

{/* Nathan Guindon */}
<li>
<div className="inner">
<div className="entry tokyo_tm_portfolio_animation_wrap">
  <Link href="/nathanguindon"
    data-tooltip-id="NATHANGUINDON"
    data-tooltip-float="true"
    data-tooltip-variant="light"
    data-tooltip-place="bottom"
    data-tooltip-position-strategy="fixed"
  >
  <Image
    width={400}
    height={600}
    src="/img/portfolio/nathanguindon/1.jpg"
    alt="Nathan Guindon"
  />
  </Link>
  <ReactTooltip
    id="NATHANGUINDON"
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
{/* Davis Cleveland */}
<li>
<div className="inner">
<div className="entry tokyo_tm_portfolio_animation_wrap">
  <Link href="/daviscleveland"
    data-tooltip-id="DAVISCLEVELAND"
    data-tooltip-float="true"
    data-tooltip-variant="light"
    data-tooltip-place="bottom"
    data-tooltip-position-strategy="fixed"
  >
  <Image
    width={400}
    height={600}
    src="/img/portfolio/daviscleveland/1.jpg"
    alt="Davis Cleveland"
  />
  </Link>
  <ReactTooltip
    id="DAVISCLEVELAND"
    place="bottom"
    type="light"
    effect="float"
    className="tooltip-wrapper"
  >
    <div>
      <h5 style={{ background: 'rgba(159,59,91,0.75)' }}>Davis Cleveland</h5>
      <span>Game Day</span>
    </div>
  </ReactTooltip>
</div>
</div>
</li>

                {/* {Alex Harris} */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      
                      <Link href={`/alexharris`}
                        data-tooltip-id="AH"
                        data-tooltip-float="true"
                        data-tooltip-variant="light"
                        data-tooltip-place="bottom"
                        data-tooltip-position-strategy="fixed"
                      >
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/alexharris/1.jpg"
                        alt="Alex Harris"
                        
                      />

                      </Link>
                      <ReactTooltip
                        id="AH"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(156,164,183,0.75)' }}>Alex Harris</h5>
                          <span >Ring Day</span>
                        </div>

                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END Alex Harris */}
                {/* {Alex French} */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      
                      <Link href={`/alexfrench`}
                        data-tooltip-id="AF"
                        data-tooltip-float="true"
                        data-tooltip-variant="light"
                        data-tooltip-place="bottom"
                        data-tooltip-position-strategy="fixed"
                      >
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/alexfrench/2.jpg"
                        alt="Alex French"
                        
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
                          <h5 style={{ background: 'rgba(229,0,150,0.75)' }}>Alex French</h5>
                          <span >Ring Day</span>
                        </div>

                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END ALEX FRENCH */}
                {/* {Grace May} */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      
                      <Link href={`/gracemay`}
                        data-tooltip-id="GM"
                        data-tooltip-float="true"
                        data-tooltip-variant="light"
                        data-tooltip-place="bottom"
                        data-tooltip-position-strategy="fixed"
                      >
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/gracemay/1.jpg"
                        alt="Grace May"
                        
                      />

                      </Link>
                      <ReactTooltip
                        id="GM"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(239,29,44,0.75)' }}>Grace May</h5>
                          <span >Ring Day</span>
                        </div>

                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END GRACE MAY */}

    {/* Carrigan Berry */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Link href="/carriganberry"
            data-tooltip-id="CARRIGANBERRY"
            data-tooltip-float="true"
            data-tooltip-variant="light"
            data-tooltip-place="bottom"
            data-tooltip-position-strategy="fixed"
          >
          <Image
            width={400}
            height={600}
            src="/img/portfolio/carriganberry/1.jpg"
            alt="Carrigan Berry"
          />
          </Link>
          <ReactTooltip
            id="CARRIGANBERRY"
            place="bottom"
            type="light"
            effect="float"
            className="tooltip-wrapper"
          >
            <div>
              <h5 style={{ background: 'rgba(239,0,152,0.75)' }}>Carrigan Berry</h5>
              <span>21st Birthday</span>
            </div>
          </ReactTooltip>
        </div>
      </div>
    </li>

    {/* Trevor Zoe */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Link href="/trevorzoe"
            data-tooltip-id="TREVORZOE"
            data-tooltip-float="true"
            data-tooltip-variant="light"
            data-tooltip-place="bottom"
            data-tooltip-position-strategy="fixed"
          >
          <Image
            width={400}
            height={600}
            src="/img/portfolio/trevorzoe/1.jpg"
            alt="Trevor Zoe"
          />
          </Link>
          <ReactTooltip
            id="TREVORZOE"
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

         {/* Claire Kaylee */}
         <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Link href="/clairekaylee"
            data-tooltip-id="CLAIREKAYLEE"
            data-tooltip-float="true"
            data-tooltip-variant="light"
            data-tooltip-place="bottom"
            data-tooltip-position-strategy="fixed"
          >
          <Image
            width={400}
            height={600}
            src="/img/portfolio/clairekaylee/1.jpg"
            alt="Claire Kaylee"
          />
          </Link>
          <ReactTooltip
            id="CLAIREKAYLEE"
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

    {/* Elle Mallory */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Link href="/ellemallory"
            data-tooltip-id="ELLEMALLORY"
            data-tooltip-float="true"
            data-tooltip-variant="light"
            data-tooltip-place="bottom"
            data-tooltip-position-strategy="fixed"
          >
          <Image
            width={400}
            height={600}
            src="/img/portfolio/ellemallory/1.jpg"
            alt="Elle Mallory"
          />
          </Link>
          <ReactTooltip
            id="ELLEMALLORY"
            place="bottom"
            type="light"
            effect="float"
            className="tooltip-wrapper"
          >
          <div>
            <h5 style={{ background: 'rgba(3,170,153,0.9)' }}>Elle & Mallory</h5>
            <span >Sunset</span>
          </div>
          </ReactTooltip>
        </div>
      </div>
    </li>
  

    
    {/* Caroline Keathley */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Link href="/carolinekeathley"
            data-tooltip-id="CAROLINEKEATHLEY"
            data-tooltip-float="true"
            data-tooltip-variant="light"
            data-tooltip-place="bottom"
            data-tooltip-position-strategy="absolute"
          >
          <Image
            width={400}
            height={600}
            src="/img/portfolio/carolinekeathley/1.jpg"
            alt="Caroline Keathley"
          />
          </Link>
          <ReactTooltip
            id="CAROLINEKEATHLEY"
            place="bottom"
            type="light"
            effect="float"
            className="tooltip-wrapper"
          >
            <div>
              <h5 style={{ background: 'rgba(0,198,198,0.8)' }}>Caroline Keathley</h5>
              <span>Ring Day</span>
            </div>
          </ReactTooltip>
        </div>
      </div>
    </li>

   
    {/* Savannah Bickhaus */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Link href="/savannahbickhaus"
            data-tooltip-id="SAVANNAHBICKHAUS"
            data-tooltip-float="true"
            data-tooltip-variant="light"
            data-tooltip-place="bottom"
            data-tooltip-position-strategy="fixed"
          >
          <Image
            width={400}
            height={600}
            src="/img/portfolio/savannahbickhaus/1.jpg"
            alt="Savannah Bickhaus"
          />
          </Link>
          <ReactTooltip
            id="SAVANNAHBICKHAUS"
            place="bottom"
            type="light"
            effect="float"
            className="tooltip-wrapper"
          >
            <div>
              <h5 style={{ background: 'rgba(214,218,225,0.75)' }}>Savannah Bickhaus</h5>
              <span>Ring Day</span>
            </div>
          </ReactTooltip>
        </div>
      </div>
    </li>
    {/* Whit Smith */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Link href="/whitsmith"
            data-tooltip-id="WHITSMITH"
            data-tooltip-float="true"
            data-tooltip-variant="light"
            data-tooltip-place="bottom"
            data-tooltip-position-strategy="fixed"
          >
          <Image
            width={400}
            height={600}
            src="/img/portfolio/whitsmith/1.jpg"
            alt="Whit Smith"
          />
          </Link>
          <ReactTooltip
            id="WHITSMITH"
            place="bottom"
            type="light"
            effect="float"
            className="tooltip-wrapper"
          >
          <div>
            <h5 style={{ background: 'rgba(150,49,110,0.9)' }}>Whit Smith</h5>
            <span >Graduation</span>
          </div>
          </ReactTooltip>
        </div>
      </div>
    </li>
                  {/* Nico Lopez */}
                  <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Link href="/nicolopez"
                        data-tooltip-id="NICOLOPEZ"
                        data-tooltip-float="true"
                        data-tooltip-variant="light"
                        data-tooltip-place="bottom"
                        data-tooltip-position-strategy="fixed"
                      >
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/nicolopez/1.jpg"
                        alt="Nico Lopez"
                      />
                      </Link>
                      <ReactTooltip
                        id="NICOLOPEZ"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(158,131,101,0.8)' }}>Nico Lopez</h5>
                          <span>City Shoot</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
   
   
    {/* Amelia Cagle */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Link href="/ameliacagle"
            data-tooltip-id="AMELIACAGLE"
            data-tooltip-float="true"
            data-tooltip-variant="light"
            data-tooltip-place="bottom"
            data-tooltip-position-strategy="fixed"
          >
          <Image
            width={400}
            height={600}
            src="/img/portfolio/ameliacagle/1.jpg"
            alt="Amelia Cagle"
          />
          </Link>
          <ReactTooltip
            id="AMELIACAGLE"
            place="bottom"
            type="light"
            effect="float"
            className="tooltip-wrapper"
          >
            <div>
              <h5 style={{ background: 'rgba(248,117,1,0.75)' }}>Amelia Cagle</h5>
              <span>Ring Day</span>
            </div>
          </ReactTooltip>
        </div>
      </div>
    </li>
   
    {/* // PORTFOLIO_MODAL_TRIGGER_INSERT */}
    
    
    
    
              </ul>
            </TabPanel>
            {/* END ALL PORTFOLIO */}

  {/* --------------------START OF EVENTS--------------- */}
  <TabPanel>
          <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
    
    {/* ZTA Bid-Day */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Link href="/ztabid-day"
            data-tooltip-id="ZTABID-DAY"
            data-tooltip-float="true"
            data-tooltip-variant="light"
            data-tooltip-place="bottom"
            data-tooltip-position-strategy="fixed"
          >
          <Image
            width={400}
            height={600}
            src="/img/portfolio/ztabid-day/1.jpg"
            alt="ZTA Bid-Day"
          />
          </Link>
          <ReactTooltip
            id="ZTABID-DAY"
            place="bottom"
            type="light"
            effect="float"
            className="tooltip-wrapper"
          >
            <div>
            <h5 style={{ background: 'rgba(228,118,167,0.8)' }}>Bid Day</h5>
            <span >ZTA</span>
            </div>
          </ReactTooltip>
        </div>
      </div>
    </li>
        
    {/* Session D */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Link href="/sessiond"
            data-tooltip-id="SESSIOND"
            data-tooltip-float="true"
            data-tooltip-variant="light"
            data-tooltip-place="bottom"
            data-tooltip-position-strategy="fixed"
          >
          <Image
            width={400}
            height={600}
            src="/img/portfolio/sessiond/1.jpg"
            alt="Session D"
          />
          </Link>
          <ReactTooltip
            id="SESSIOND"
            place="bottom"
            type="light"
            effect="float"
            className="tooltip-wrapper"
          >
          <div>
            <h5 style={{ background: 'rgba(179,30,50,0.8)' }}> Session D</h5>
            <span>Fish Camp</span>
          </div>
          </ReactTooltip>
        </div>
      </div>
    </li>
        
    {/* Glow Out */}
    <li>
      <div className="inner">
        <div className="entry tokyo_tm_portfolio_animation_wrap">
          <Link href="/glowout"
            data-tooltip-id="GLOWOUT"
            data-tooltip-float="true"
            data-tooltip-variant="light"
            data-tooltip-place="bottom"
            data-tooltip-position-strategy="fixed"
          >
          <Image
            width={400}
            height={600}
            src="/img/portfolio/glowout/1.jpg"
            alt="Glow Out"
          />
          </Link>
          <ReactTooltip
            id="GLOWOUT"
            place="bottom"
            type="light"
            effect="float"
            className="tooltip-wrapper"
          >
            <div>
              <h5 style={{ background: 'rgba(2,166,214,0.75)' }}>Glow Out</h5>
              <span>ZTA</span>
            </div>
          </ReactTooltip>
        </div>
      </div>
    </li>
        {/* // PORTFOLIO_EVENT_INSERT */}
    
    
    


            </ul>
          </TabPanel>
          {/* --------------------START OF PLACES--------------- */}
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
