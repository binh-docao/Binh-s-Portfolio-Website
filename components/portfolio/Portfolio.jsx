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

  return (
    <>
      <Gallery>
        <Tabs>
          {/* START FILTER TABLIST */}
          <TabList>
            <Tab>Portraits</Tab>
            <Tab>Landscape</Tab>
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
                      <Item
                        original="/img/portfolio/8-hd.jpg"
                        thumbnail="/img/portfolio/8-hd.jpg"
                        width={400}
                        height={600}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={400}
                            height={600}
                            srl_gallery_image="true"
                            src="/img/portfolio/1.jpg"
                            alt="Childhood"
                            data-tip
                            data-for="shot2"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="shot2"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Gloria jenkins</h5>
                          <span>Shot</span>
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
                        src="/img/portfolio/2.jpg"
                        alt="Portraits"
                        data-tip
                        data-for="detail"
                        onClick={toggleModalOne}
                      />

                      <ReactTooltip
                        id="detail"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Selena Gomez</h5>
                          <span>Details</span>
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
                        src="/img/portfolio/3.jpg"
                        alt="Details"
                        data-tip
                        data-for="detail2"
                        onClick={toggleModalTwo}
                      />

                      <ReactTooltip
                        id="detail2"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Ave Simone</h5>
                          <span>Details</span>
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
