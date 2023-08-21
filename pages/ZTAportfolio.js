import Seo from "../components/Seo";
import Portfolio from "../components/portfolio/ZTAportfolio";
import Sidebar from "../components/sidebar/ZTA-Sidebar";

const index = () => {
  return (
    <>
      <Seo pageTitle="ZTA Pictures" />
      {/* End page title for seo */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_portfolio">
                <div className="tokyo_tm_title">
                  <div className="title_flex">
                    <div className="left">
                      <span>Albums</span>
                      <h3  style={{color: 'deeppink'}}>ZTA Pictures</h3>
                    </div>
                  </div>
                </div>
                {/* END TOKYO_TM_TITLE */}

                <div className="portfolio_filter">
                  <Portfolio />
                </div>
                {/* END PROFTOLIO FILTER */}
              </div>
            </div>
            {/* End .container */}
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
