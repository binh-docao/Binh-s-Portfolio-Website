import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import dynamic from "next/dynamic";
import Image from "next/image";
import ModalOne from "./modal/ModalOne";
import ModalTwo from "./modal/ModalTwo";

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


  // Image loading states
  const [imageLoading, setImageLoading] = useState([]);

  // Set the loading state for an image
  const handleImageLoad = (index) => {
    setImageLoading((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

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
            {/* <Tab>Videos</Tab> */}
            {/* <Tab>Portrait</Tab>
            <Tab>Landscape</Tab> */}
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
                {/* START OF IMAGE 5 - Amelia */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/amelia.jpg"
                        thumbnail="/img/portfolio/amelia.jpg"
                        width={600}
                        height={900}
                        
                      >
                        {({ ref, open }) => (
                          <Image
                            srl_gallery_image="true"
                            src="/img/portfolio/amelia.jpg"
                            alt="Amelia"
                            data-tip
                            data-for="Amelia"
                            role="button"
                            ref={ref}
                            onClick={open}
                            loading = "lazy"
                      
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="Amelia"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Amelia</h5>
                          <span></span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}
                
                {/* START OF IMAGE 2 - CORD */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/2.jpg"
                        thumbnail="/img/portfolio/2.jpg"
                        width={1200}
                        height={800}
                      >
                        {({ ref, open }) => (
                          <Image
                            srl_gallery_image="true"
                            src="/img/portfolio/2.jpg"
                            alt="Cord"
                            data-tip
                            data-for="cord"
                            role="button"
                            ref={ref}
                            onClick={open}
                            loading="eager"
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="cord"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Cord</h5>
                          <span></span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                {/* START OF IMAGE 8 - Shikhar */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/shikhar.jpg"
                        thumbnail="/img/portfolio/shikhar.jpg"
                        width={600}
                        height={900}
                      >
                        {({ ref, open }) => (
                          <Image
                            srl_gallery_image="true"
                            src="/img/portfolio/shikhar.jpg"
                            alt="Shikhar"
                            data-tip
                            data-for="Shikhar"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="Shikhar"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Shikhar</h5>
                          <span></span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                {/* START OF IMAGE 4 - BRENDAN */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/brendan.jpg"
                        thumbnail="/img/portfolio/brendan.jpg"
                        width={600}
                        height={900}
                      >
                        {({ ref, open }) => (
                          <Image
                            srl_gallery_image="true"
                            src="/img/portfolio/brendan.jpg"
                            alt="Childhood"
                            data-tip
                            data-for="brendan"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="brendan"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Brendan</h5>
                          <span></span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                {/* START OF IMAGE 6 - Blake */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/blake.jpg"
                        thumbnail="/img/portfolio/blake.jpg"
                        width={1200}
                        height={800}
                      >
                        {({ ref, open }) => (
                          <Image
                            srl_gallery_image="true"
                            src="/img/portfolio/blake.jpg"
                            alt="Blake"
                            data-tip
                            data-for="Blake"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="Blake"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Blake</h5>
                          <span></span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                {/* START OF IMAGE 7 - Ivan */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/ivan.jpg"
                        thumbnail="/img/portfolio/ivan.jpg"
                        width={600}
                        height={900}
                      >
                        {({ ref, open }) => (
                          <Image
                            srl_gallery_image="true"
                            src="/img/portfolio/ivan.jpg"
                            alt="Ivan"
                            data-tip
                            data-for="Ivan"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="Ivan"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Ivan</h5>
                          <span></span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}

                  {/* START OF IMAGE 1 - CHARLIE */}
                  <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/5.jpg"
                        thumbnail="/img/portfolio/5.jpg"
                        width={1200}
                        height={800}
                      >
                        {({ ref, open }) => (
                          <Image
                            srl_gallery_image="true"
                            src="/img/portfolio/5.jpg"
                            alt="Charlie Do-Cao"
                            data-tip
                            data-for="charlie"
                            role="button"
                            ref={ref}
                            onClick={open}
                          />
                        )}
                      </Item>
                      <ReactTooltip
                        id="charlie"
                        place="bottom"
                        type="light"
                        effect="float"
                        className="tooltip-wrapper"
                      >
                        <div>
                          <h5>Charlie Do-Cao</h5>
                          <span></span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}
                
                {/* START OF IMAGE 3 - KYLE FIELD */}
                <li>
                  <div className="inner">
                    <div className="entry tokyo_tm_portfolio_animation_wrap">
                      <Item
                        original="/img/portfolio/3.jpg"
                        thumbnail="/img/portfolio/3.jpg"
                        width={1200}
                        height={800}
                      >
                        {({ ref, open }) => (
                          <Image
                            srl_gallery_image="true"
                            src="/img/portfolio/3.jpg"
                            alt="Kyle"
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
                          <h5>Kyle Field</h5>
                          <span></span>
                        </div>
                      </ReactTooltip>
                    </div>
                  </div>
                </li>
                {/* END SHOT */}








                )
              </ul>
            </TabPanel>
            {/* END ALL PORTFOLIO */}

            {/* START VIDEOS */}
            <TabPanel>
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
                <li>
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
                </li>
                {/* END YOUTUBE */}
              </ul>
              {/* END PORTFOLIO LIST */}
            </TabPanel>
            {/* END VIDEOS */}

            {/* START PHOTOGRAHY */}
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
                        original="/img/portfolio/4.jpg"
                        thumbnail="/img/portfolio/4.jpg"
                        width={600}
                        height={400}
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
                          <h5>Brendan Williams</h5>
                          <span>Ring Order</span>
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
                </li>
                {/* END SHOT */}
              </ul>
              {/* END PORTFOLIO LIST */}
            </TabPanel>
            {/* END PHOTOGRAHY */}

            {/* START PORTFOLIO DETAILS */}
            <TabPanel>
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
                </li>
                {/* END DETAILS */}
                <li>
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
              </ul>
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

export default Portfolio;
