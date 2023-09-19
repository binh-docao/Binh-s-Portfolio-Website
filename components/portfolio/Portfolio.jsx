import Modalbiglil from "./modal/biglil";
import ModalD from "./modal/D";
import ModalAspenAvery from "./modal/AspenAvery";
import ModalGlow from "./modal/Glow";
import ModalSongfest from "./modal/Songfest";
import ModalTrevorZoe from "./modal/TrevorZoe";
import ModalEmilyRiley from "./modal/EmilyRiley";
import React, { useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import dynamic from "next/dynamic";
import Image from "next/image";
import ModalOne from "./modal/ModalOne";
import ModalTwo from "./modal/HL";
import ModalJM from "./modal/JM";
import ModalWS from "./modal/WS";
import ModalHG from "./modal/HG";
import ModalME from "./modal/ME";
import ModalDC from "./modal/DC";
import ModalDC2 from "./modal/DC2";
import ModalBID from "./modal/BID";
import ModalNL from "./modal/NL";
import ModalCK from "./modal/CK";
import ModalKH from "./modal/KH";

// Portfolio.jsx
Modal.setAppElement("#__next");

const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

// Modal.setAppElement("#__next");

const Portfolio = () => {
  // for popup video for youtube
  const [isOpenYoutube, setOpenYoutube] = useState(false);

  // popup video for vimeo
  const [isOpenVimeo, setOpenVimeo] = useState(false);

  // for modal details
  const [isOpenModalOne, setIsOpenModalOne] = useState(false);
  const [isOpenModalTwo, setIsOpenModalTwo] = useState(false);

  // for modal details method
  function toggleModalOne() {
    setIsOpenModalOne(!isOpenModalOne);
  }
  function toggleModalTwo() {
    setIsOpenModalTwo(!isOpenModalTwo);
  }

  const [isOpenModalJM, setIsOpenModalJM] = useState(false);
  function toggleModalJM() {
    setIsOpenModalJM(!isOpenModalJM);
  }

  const [isOpenModalWS, setIsOpenModalWS] = useState(false);
  function toggleModalWS() {
    setIsOpenModalWS(!isOpenModalWS);
  }

  const [isOpenModalHG, setIsOpenModalHG] = useState(false);
  function toggleModalHG() {
    setIsOpenModalHG(!isOpenModalHG);
  }

  const [isOpenModalME, setIsOpenModalME] = useState(false);
  function toggleModalME() {
    setIsOpenModalME(!isOpenModalME);
  }

  const [isOpenModalDC, setIsOpenModalDC] = useState(false);
  function toggleModalDC() {
    setIsOpenModalDC(!isOpenModalDC);
  }

  const [isOpenModalBID, setIsOpenModalBID] = useState(false);
  function toggleModalBID() {
    setIsOpenModalBID(!isOpenModalBID);
  }

  const [isOpenModalNL, setIsOpenModalNL] = useState(false);
  function toggleModalNL() {
    setIsOpenModalNL(!isOpenModalNL);
  }

  const [isOpenModalCK, setIsOpenModalCK] = useState(false);
  function toggleModalCK() {
    setIsOpenModalCK(!isOpenModalCK);
  }

  const [isOpenModalDC2, setIsOpenModalDC2] = useState(false);
  function toggleModalDC2() {
    setIsOpenModalDC2(!isOpenModalDC2);
  }

  const [isOpenModalKH, setIsOpenModalKH] = useState(false);
  function toggleModalKH() {
    setIsOpenModalKH(!isOpenModalKH);
  }

    const [isOpenModalEmilyRiley, setIsOpenModalEmilyRiley] = useState(false);
    function toggleModalEmilyRiley() {
      setIsOpenModalEmilyRiley(!isOpenModalEmilyRiley);
    }
        


    const [isOpenModalTrevorZoe, setIsOpenModalTrevorZoe] = useState(false);
    function toggleModalTrevorZoe() {
      setIsOpenModalTrevorZoe(!isOpenModalTrevorZoe);
    }
        
    const [isOpenModalSongfest, setIsOpenModalSongfest] = useState(false);
    function toggleModalSongfest() {
      setIsOpenModalSongfest(!isOpenModalSongfest);
    }
        


    const [isOpenModalGlow, setIsOpenModalGlow] = useState(false);
    function toggleModalGlow() {
      setIsOpenModalGlow(!isOpenModalGlow);
    }
        


    const [isOpenModalAspenAvery, setIsOpenModalAspenAvery] = useState(false);
    function toggleModalAspenAvery() {
      setIsOpenModalAspenAvery(!isOpenModalAspenAvery);
    }
        


    const [isOpenModalD, setIsOpenModalD] = useState(false);
    function toggleModalD() {
      setIsOpenModalD(!isOpenModalD);
    }
        


    const [isOpenModalbiglil, setIsOpenModalbiglil] = useState(false);
    function toggleModalbiglil() {
      setIsOpenModalbiglil(!isOpenModalbiglil);
    }
        
// PORTFOLIO_MODAL_STATE_INSERT

  

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
                      
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/HL/3.jpg"
                        alt="Hannah Lebow"
                        data-tip
                        data-for="HL1"
                        onClick={toggleModalTwo}
                      />
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
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/ng/NG-2.jpg"
                        alt="NathanRing"
                        data-tip
                        data-for="NG"
                        onClick={toggleModalOne}
                      />

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
                        src="/img/portfolio/jm/1.jpg"
                        alt="Jed"
                        data-tip
                        data-for="Jed"
                        onClick={toggleModalJM}
                      />

                      <ReactTooltip
                        id="Jed"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(105,163,223,0.9)' }}>Jed Moore</h5>
                          <span >Fish Camp</span>
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
                        src="/img/portfolio/ME/ME-3.jpg"
                        alt="ME"
                        data-tip
                        data-for="ME"
                        onClick={toggleModalME}
                      />

                      <ReactTooltip
                        id="ME"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(3,170,153,0.9)' }}>Mallory & Elle</h5>
                          <span >Sunset</span>
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
                        onClick={toggleModalCK}
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
                        src="/img/portfolio/WS/WS-2.jpg"
                        alt="WS"
                        data-tip
                        data-for="WS"
                        onClick={toggleModalWS}
                      />

                      <ReactTooltip
                        id="WS"
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
                {/* END DETAILS */}

                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/BID/1.jpg"
                        alt="BID"
                        data-tip
                        data-for="BID"
                        onClick={toggleModalBID}
                      />

                      <ReactTooltip
                        id="BID"
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
                {/* END DETAILS */}
                <li>
        <div className="inner">
          <div className="entry tokyo_tm_portfolio_animation_wrap">
            <Image
              width={400}
              height={600}
              src="/img/portfolio/songfest/1.jpg"
              alt="Songfest"
              data-tip
              data-for="Songfest"
              onClick={toggleModalSongfest}
            />
            <ReactTooltip
              id="Songfest"
              place="bottom"
              type="light"
              effect="float"
              className="tooltip-wrapper"
            >
              <div>
                <h5 style={{ background: 'rgba(25,78,204,0.65)' }}>Songfest</h5>
                <span>ZTA x BYX</span>
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
                        src="/img/portfolio/glow/1.jpg"
                        alt="Glow"
                        data-tip
                        data-for="Glow"
                        onClick={toggleModalGlow}
                      />
                      <ReactTooltip
                        id="Glow"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(250,149,35,0.8)' }}> Glow - Work Week</h5>
                          <span>ZTA</span>
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
                        src="/img/portfolio/HG/1.JPG"
                        alt="HG"
                        data-tip
                        data-for="HG"
                        onClick={toggleModalHG}
                      />

                      <ReactTooltip
                        id="HG"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(117,161,201,0.9)' }}>Hope Griffin</h5>
                          <span >Fish Camp</span>
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
              src="/img/portfolio/emilyriley/1.jpg"
              alt="EmilyRiley"
              data-tip
              data-for="EmilyRiley"
              onClick={toggleModalEmilyRiley}
            />
            <ReactTooltip
              id="EmilyRiley"
              place="bottom"
              type="light"
              effect="float"
              className="tooltip-wrapper"
            >
              <div>
                <h5 style={{ background: 'rgba(245,190,246,0.8)' }}> Emily & Riley</h5>
                <span>Ice Cream</span>
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
                        src="/img/portfolio/trevorzoe/1.jpg"
                        alt="TrevorZoe"
                        data-tip
                        data-for="TrevorZoe"
                        onClick={toggleModalTrevorZoe}
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
                        onClick={toggleModalNL}
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


                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={400}
                        height={600}
                        src="/img/portfolio/DC/DC-3.jpg"
                        alt="DC"
                        data-tip
                        data-for="DC"
                        onClick={toggleModalDC}
                      />

                      <ReactTooltip
                        id="DC"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(80,109,194,0.8)' }}>Davis Cleveland</h5>
                          <span >Minuti</span>
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
                        src="/img/portfolio/kiki.jpg"
                        alt="KH"
                        data-tip
                        data-for="KH"
                        onClick={toggleModalKH}
                      />

                      <ReactTooltip
                        id="KH"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5 style={{ background: 'rgba(253,1,84,0.9)' }}>Kiki Harrison</h5>
                          <span>Work Week</span>
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
              src="/img/portfolio/aspenavery/1.jpg"
              alt="AspenAvery"
              data-tip
              data-for="AspenAvery"
              onClick={toggleModalAspenAvery}
            />
            <ReactTooltip
              id="AspenAvery"
              place="bottom"
              type="light"
              effect="float"
              className="tooltip-wrapper"
            >
              <div>
                <h5 style={{ background: 'rgba(82,8,24,0.8)' }}> Aspen & Avery</h5>
                <span>Vic Din</span>
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
              src="/img/portfolio/d/1.jpg"
              alt="DFC"
              data-tip
              data-for="DFC"
              onClick={toggleModalD}
            />
            <ReactTooltip
              id="DFC"
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
          
 
        <li>
        <div className="inner">
          <div className="entry tokyo_tm_portfolio_animation_wrap">
            <Image
              width={400}
              height={600}
              src="/img/portfolio/biglil/1.jpg"
              alt="biglil"
              data-tip
              data-for="biglil"
              onClick={toggleModalbiglil}
            />
            <ReactTooltip
              id="biglil"
              place="bottom"
              type="light"
              effect="float"
              className="tooltip-wrapper"
            >
              <div>
                <h5 style={{ background: 'rgba(95,165,170,0.8)' }}> Big Little Reveal</h5>
                <span>ZTA</span>
              </div>
            </ReactTooltip>
          </div>
        </div>
      </li>
          
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

      {/* START YOUTUBE VIDEO POPUP */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpenYoutube}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpenYoutube(false)}
      />
      {/* EMD YOUTUBE VIDEO POPUP */}

      {/* START VIMEO VIDEO POPUP  */}
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpenVimeo}
        videoId="100171151"
        onClose={() => setOpenVimeo(false)}
      />
      {/* END VIMEO VIDEO POPUP */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalOne}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalOne />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      <Modal
        isOpen={isOpenModalKH}
        onRequestClose={toggleModalKH}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalKH}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalKH />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalBID}
        onRequestClose={toggleModalBID}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalBID}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalBID />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalDC2}
        onRequestClose={toggleModalDC2}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalDC2}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalDC2/>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      <Modal
        isOpen={isOpenModalNL}
        onRequestClose={toggleModalNL}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalNL}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalNL />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      <Modal
        isOpen={isOpenModalCK}
        onRequestClose={toggleModalCK}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalCK}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalCK />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalWS}
        onRequestClose={toggleModalWS}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalWS}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalWS />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalJM}
        onRequestClose={toggleModalJM}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalJM}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalJM />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalHG}
        onRequestClose={toggleModalHG}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalHG}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalHG />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalDC}
        onRequestClose={toggleModalDC}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalDC}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalDC />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}




      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalME}
        onRequestClose={toggleModalME}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalME}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}

          <ModalME />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}


      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpenModalTwo}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <ModalTwo />
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
      
 
    <Modal
    isOpen={isOpenModalEmilyRiley}
    onRequestClose={toggleModalEmilyRiley}
    contentLabel="My dialog"
    className="mymodal"
    overlayClassName="myoverlay"
    closeTimeoutMS={500}
  >
    <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
      <button className="close-modal" onClick={toggleModalEmilyRiley}>
        <img src="/img/svg/cancel.svg" alt="close icon" />
      </button>
      <ModalEmilyRiley/>
    </div>
  </Modal>
      
 
    <Modal
    isOpen={isOpenModalTrevorZoe}
    onRequestClose={toggleModalTrevorZoe}
    contentLabel="My dialog"
    className="mymodal"
    overlayClassName="myoverlay"
    closeTimeoutMS={500}
  >
    <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
      <button className="close-modal" onClick={toggleModalTrevorZoe}>
        <img src="/img/svg/cancel.svg" alt="close icon" />
      </button>
      <ModalTrevorZoe/>
    </div>
  </Modal>
      

      
 
    <Modal
    isOpen={isOpenModalSongfest}
    onRequestClose={toggleModalSongfest}
    contentLabel="My dialog"
    className="mymodal"
    overlayClassName="myoverlay"
    closeTimeoutMS={500}
  >
    <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
      <button className="close-modal" onClick={toggleModalSongfest}>
        <img src="/img/svg/cancel.svg" alt="close icon" />
      </button>
      <ModalSongfest/>
    </div>
  </Modal>
      
 
    <Modal
    isOpen={isOpenModalGlow}
    onRequestClose={toggleModalGlow}
    contentLabel="My dialog"
    className="mymodal"
    overlayClassName="myoverlay"
    closeTimeoutMS={500}
  >
    <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
      <button className="close-modal" onClick={toggleModalGlow}>
        <img src="/img/svg/cancel.svg" alt="close icon" />
      </button>
      <ModalGlow/>
    </div>
  </Modal>
      
 
    <Modal
    isOpen={isOpenModalAspenAvery}
    onRequestClose={toggleModalAspenAvery}
    contentLabel="My dialog"
    className="mymodal"
    overlayClassName="myoverlay"
    closeTimeoutMS={500}
  >
    <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
      <button className="close-modal" onClick={toggleModalAspenAvery}>
        <img src="/img/svg/cancel.svg" alt="close icon" />
      </button>
      <ModalAspenAvery/>
    </div>
  </Modal>
      
 
    <Modal
    isOpen={isOpenModalD}
    onRequestClose={toggleModalD}
    contentLabel="My dialog"
    className="mymodal"
    overlayClassName="myoverlay"
    closeTimeoutMS={500}
  >
    <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
      <button className="close-modal" onClick={toggleModalD}>
        <img src="/img/svg/cancel.svg" alt="close icon" />
      </button>
      <ModalD/>
    </div>
  </Modal>
      
 
    <Modal
    isOpen={isOpenModalbiglil}
    onRequestClose={toggleModalbiglil}
    contentLabel="My dialog"
    className="mymodal"
    overlayClassName="myoverlay"
    closeTimeoutMS={500}
  >
    <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
      <button className="close-modal" onClick={toggleModalbiglil}>
        <img src="/img/svg/cancel.svg" alt="close icon" />
      </button>
      <Modalbiglil/>
    </div>
  </Modal>
      
 {/* // PORTFOLIO_MODAL_COMPONENT_INSERT */}

    </>
  );
};

export default Portfolio;
