import Seo from "../components/Seo";
import Portfolio from "../components/portfolio/Portfolio";
import Sidebar from "../components/sidebar/Sidebar";
import Social from "../components/portfolio/portfolio-social";
const index = () => {
  return (
    <>
      <Seo pageTitle="Portfolio"
            description="A showcase of my photography work in College Station."
            url="https://www.b1nh.com/portfolio"
            keywords="College Station photography, professional portfolio, photographer, zta, zeta tau alpha"  // Again, assuming Seo can handle it
      
      
      />
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
                      <span>Photography </span>
                      <h3>Portfolio </h3>
                      
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
