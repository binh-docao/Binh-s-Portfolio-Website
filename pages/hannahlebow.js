import Seo from "../components/Seo";
import Portfolio from "../components/portfolio/hannahlebow";
import Sidebar from "../components/sidebar/Sidebar";
import Link from 'next/link';

const index = () => {
  return (
    <>
      <Seo pageTitle="Hannah Lebow"
      imageUrl="/img/portfolio/HL/3.jpg"></Seo>
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
                    <Link href="/portfolio">
                    <div className="back-to-portfolio">
                        ← Back to Portfolio
                    </div>
                    </Link>
                      <h3>Hannah Lebow</h3>
                      
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
