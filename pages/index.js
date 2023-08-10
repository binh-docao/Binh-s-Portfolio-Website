import React from "react";
import Preview from "./preview";
import Seo from "../components/Seo";
import Sidebar from "../components/sidebar/Sidebar";


const MainRoot = () => {
  return (
    <>
      <Seo pageTitle="Home"/>
      {/* En Seo Page Title */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <Preview/>
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default MainRoot;
