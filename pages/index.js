// src/pages/index.js
import React from "react";
import Seo from "../components/Seo";
import Sidebar from "../components/sidebar/Sidebar";
import Home from "../components/home/Home"; // Update the path

const index = () => {
  return (
    <>
      <Seo pageTitle="Home" />
      <Sidebar />

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <Home />
              {/*  */}
              {/*  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
