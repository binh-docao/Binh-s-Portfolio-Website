import Seo from "../components/Seo";
import Sidebar from "../components/sidebar/Sidebar";
import AlgoRhythmsContent from "../components/AlgoRhythmsContent";

const CavsAlgoRhythms = () => {
  return (
    <>
      {/* Adding an SEO-optimized title and meta description for our page */}
      <Seo 
        pageTitle="Cav’s AlgoRhythms: The Future of Algorithmic Rhythms" 
        metaDescription="Dive deep into the world of Cav’s AlgoRhythms with Texas A&M's CSCE 470 class. Explore the intricate connection between algorithms and rhythms, curated by Prof. James Caverlee." 
      />
      {/* End Seo */}

      {/* LEFT MENU CONTENT */}
      <Sidebar />

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              
              {/* Our main content for Cav’s AlgoRhythms */}
              <AlgoRhythmsContent />

            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default CavsAlgoRhythms;
