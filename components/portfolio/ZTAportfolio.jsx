import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import dynamic from "next/dynamic";
import Image from "next/image";
import ModalOne from "./modal/ModalOne";
import { useRouter } from "next/router";

import ModalTwo from "./modal/ModalTwo";

Modal.setAppElement("#__next");



const ReactTooltip = dynamic(() => import("react-tooltip"), {
  ssr: false,
});

// Modal.setAppElement("#__next");

const ZTAportfolio = () => {
  // for popup video for youtube
  const [isOpenYoutube, setOpenYoutube] = useState(false);

  // popup video for vimeo
  const [isOpenVimeo, setOpenVimeo] = useState(false);

  // for modal details
  const [isOpenModalOne, setIsOpenModalOne] = useState(false);
  const [isOpenModalTwo, setIsOpenModalTwo] = useState(false);

  const router = useRouter();
  
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
            <Tab>All</Tab>
            {/* <Tab>Videos</Tab>
            <Tab>Photography</Tab>
            <Tab>Details</Tab> */}
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
                  <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/ZTA-Move.jpg"
                        thumbnail="/img/portfolio/ZTA-Move.jpg"
                        width={600}
                        height={900}
                      >
                        {({ ref, open }) => (
                          <Image
                            srl_gallery_image="true"
                            src="/img/portfolio/ZTA-Move.jpg"
                            alt="Move-In"
                            data-tip 
                            data-for="Move-In"
                            role="button"
                            width={600}
                            height={900}
                            ref={ref}
                            priority={true}
                            onClick={() => {
                              router.push("https://drive.google.com/drive/folders/11y5rmMz1s7IA3aSdtk9Xop-m0KPSe7he?usp=drive_link");
                            }}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="Move-In"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Move-In</h5>
                          <span>August 8th 2023</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>


                  <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/ZTA-Glow.jpg"
                        thumbnail="/img/portfolio/ZTA-Glow.jpg"
                        width={900}
                        height={600}
                      >
                        {({ ref, open }) => (
                          <Image
                            srl_gallery_image="true"
                            src="/img/portfolio/ZTA-Glow.jpg"
                            alt="Work Week - Glow"
                            data-tip 
                            data-for="Work Week - Glow"
                            role="button"
                            width={900}
                            height={600}
                            ref={ref}
                            priority={true}
                            onClick={() => {
                              router.push("https://drive.google.com/drive/folders/1JdGumeuFHwPI9Hba8PKUWy_y1cMuj_Ki?usp=drive_link");
                            }}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="Work Week - Glow"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Work Week - Glow</h5>
                          <span>August 12th 2023</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END VIMEO */}

                {/* <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={300}
                        height={300}
                        src="/img/portfolio/2.jpg"
                        alt="Youtube"
                        data-tip
                        data-for="youtube"
                        onClick={() => setOpenYoutube(true)}
                      />
                      <ReactTooltip
                        id="youtube"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Ashely Flores</h5>
                          <span>Youtube</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li> */}
                {/* END YOUTUBE */}

                {/* <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/4.jpg"
                        thumbnail="/img/portfolio/4.jpg"
                        width={500}
                        height={550}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={300}
                            height={300}
                            srl_gallery_image="true"
                            src="/img/portfolio/4.jpg"
                            alt="Childhood"
                            data-tip
                            data-for="shot"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="shot"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Derek Smith</h5>
                          <span>Shot</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li> */}
                {/* END SHOT */}

                {/* <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/3.jpg"
                        thumbnail="/img/portfolio/3.jpg"
                        width={500}
                        height={550}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={300}
                            height={300}
                            srl_gallery_image="true"
                            src="/img/portfolio/3.jpg"
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
                </li> */}
                {/* END SHOT */}
{/* 
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={300}
                        height={300}
                        src="/img/portfolio/6.jpg"
                        alt="Details"
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
                </li> */}
                {/* END DETAILS */}

                {/* <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={300}
                        height={300}
                        src="/img/portfolio/7.jpg"
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
                </li> */}
                {/* END DETAILS */}
              {/* </ul>
            </TabPanel> */}
            {/* END ALL PORTFOLIO */}

            {/* START VIDEOS */}
            {/* <TabPanel>
              <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={300}
                        height={300}
                        src="/img/portfolio/5.jpg"
                        alt="Vimeo"
                        data-tip
                        data-for="vimeo"
                        onClick={() => setOpenVimeo(true)}
                      />
                      <ReactTooltip
                        id="vimeo"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Teresa Butler</h5>
                          <span>Vimeo</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END VIMEO */}
                {/* <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={300}
                        height={300}
                        src="/img/portfolio/2.jpg"
                        alt="Youtube"
                        data-tip
                        data-for="youtube"
                        onClick={() => setOpenYoutube(true)}
                      />
                      <ReactTooltip
                        id="youtube"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Ashely Flores</h5>
                          <span>Youtube</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li> */}
                {/* END YOUTUBE */}
              {/* </ul> */}
              {/* END PORTFOLIO LIST */}
            {/* </TabPanel> */}
            {/* END VIDEOS */}

            {/* START PHOTOGRAHY */}
            {/* <TabPanel> */}
              {/* <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/4.jpg"
                        thumbnail="/img/portfolio/4.jpg"
                        width={500}
                        height={550}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={300}
                            height={300}
                            srl_gallery_image="true"
                            src="/img/portfolio/4.jpg"
                            alt="Childhood"
                            data-tip
                            data-for="shot"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="shot"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Derek Smith</h5>
                          <span>Shot</span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}
                {/* <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/3.jpg"
                        thumbnail="/img/portfolio/3.jpg"
                        width={500}
                        height={550}
                      >
                        {({ ref, open }) => (
                          <Image
                            width={300}
                            height={300}
                            srl_gallery_image="true"
                            src="/img/portfolio/3.jpg"
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
                </li> } */}
                {/* END SHOT */}
              </ul>
              {/* END PORTFOLIO LIST */}
            {/* </TabPanel> */}
            {/* END PHOTOGRAHY */}

            {/* START PORTFOLIO DETAILS */}
            {/* <TabPanel>
              <ul
                className="portfolio_list"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={300}
                        height={300}
                        src="/img/portfolio/6.jpg"
                        alt="Details"
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
                </li> */}
                {/* END DETAILS */}
                {/* <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Image
                        width={300}
                        height={300}
                        src="/img/portfolio/7.jpg"
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
              {/* </ul> */}
              {/* END DETAILS GALLERY */}
            </TabPanel>
            {/* END PORTFOLIO DETAILS */}
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

export default ZTAportfolio;
