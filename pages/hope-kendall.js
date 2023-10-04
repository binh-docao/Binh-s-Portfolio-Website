import Seo from "../components/Seo";
import PasswordPage from "../components/XOpass";
import Sidebar from "../components/sidebar/Sidebar";

const index = () => {

  return (
    <>
      <Seo pageTitle="Hope & Kendall Big Little Reveal"
      imageUrl="/img/portfolio/previews/hope.jpg"></Seo>
      {/* End page title for seo */}

      <Sidebar />
      {/* END LEFT MENU CONTENT */}

      {/* START RIGHT PART CONTENT */}
      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div data-aos="fade-right" data-aos-duration="1200">
              <PasswordPage />
            </div>
          </div>
        </div>
      </div>
      {/* END RIGHT PART CONTENT */}
    </>
  );
};

export default index;
