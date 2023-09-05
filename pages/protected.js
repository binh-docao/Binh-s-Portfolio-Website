import Seo from "../components/Seo";
import PasswordPage from "../components/PasswordRedirect";
import Sidebar from "../components/sidebar/Sidebar";

const index = () => {

  return (
    <>
      <Seo pageTitle="Contact" />
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
