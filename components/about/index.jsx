// import React from "react";
import React, { useState } from 'react';
import Modal from "react-modal";
import Testimonial from "./Testimonial";
import Intro from "./Intro";
import KnowledgeInterest from "./KnowledgeInterest";
import PersonalInfo from "./PersonalInfo";
import Resume from "./Resume";
import Skills from "./Skills";
import PasswordProtection from '../PasswordProtection';

Modal.setAppElement("#__next");

const AboutMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handleDownloadResume = () => {
    if (isPasswordCorrect) {
      window.open('/img/cv.pdf', '_blank');
    } else {
      setIsModalOpen(true);
    }
  };

  const handlePasswordCorrect = () => {
    setIsPasswordCorrect(true);
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="container">
        <div className="tokyo_tm_about">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
                <h3>About Me</h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <Intro />
          <div className="tokyo_tm_short_info">
            <PersonalInfo />
          </div>
          {/* End personal info */}

          <div className="tokyo_tm_button" data-position="left">
            {/* Updated button style */}
            <a onClick = {handleDownloadResume}>
              <span>Download Resume</span>
            </a>
            {/* End updated button style */}
          </div>
          </div>
        </div>
      {/* End .container */}

      <div className="tokyo_tm_progressbox">
        <div className="container">
          <div className="in">
            <Skills />
          </div>r
          {/* End in */}
        </div>
        {/* End .container */}
      </div>
      {/* End tokyo_tm_progressbox */}

      <div className="tokyo_tm_skillbox">
        <div className="container">
          <div className="in">
            <KnowledgeInterest />
          </div>
        </div>
      </div>
      {/* End .tokyo_tm_skillbox */}

      <div className="tokyo_tm_resumebox">
        <div className="container">
          <div className="in">
            <Resume />
          </div>
        </div>
      </div>
      {/* End tokyo_tm_resumebox */}

      {/* <div className="tokyo_tm_testimonials">
        <div className="container">
          <div className="tokyo_section_title">
            <h3>Testimonials</h3>
          </div>
          <div className="list">
            <Testimonial />
          </div>
        </div>
      </div>
      End tokyo_tm_testimonials */}

      {/* /ABOUT */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Password Modal"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <PasswordProtection onPasswordCorrect={handlePasswordCorrect} />
      </Modal>
    </>
  );
};

export default AboutMain;
