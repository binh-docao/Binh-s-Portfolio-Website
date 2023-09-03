import React, { useState } from "react";
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

  return (
    <>
      <Gallery>
        <Tabs>
          {/* START FILTER TABLIST */}
          <TabList>
            <Tab>Friends</Tab>
            {/* <Tab>Landscape</Tab> */}
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
                          <h5 style={{ background: 'rgba(133,162,195,0.9)' }}>Hannah Lebow</h5>
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
                          <h5 style={{ background: 'rgba(144,172,144,0.9)' }}>Whit Smith</h5>
                          <span >Graduation</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END DETAILS */}
              </ul>
            </TabPanel>
            {/* END ALL PORTFOLIO */}

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



      
    </>
  );
};

export default Portfolio;
