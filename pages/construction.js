import Image from "next/image";
import Link from "next/link";
import Seo from "../components/Seo";

const Construction = () => {
  return (
    <>
      <Seo pageTitle="Construction" />
      {/* End page title for seo */}

      <div className="not-found-wrapper">
        <div className="leftpart">
          <div className="leftpart_inner">
            <div className="logo">
            <Link className="details" href="/"style={{ textDecoration: 'none'}}>
            <h3 className="name" style={{ color: '',fontWeight: 'bold'} }>{"B I N H"}</h3>
          </Link>
            </div>
            {/* END LOGO */}
            <div className="copyright">
              <p>
                &copy; 2023<br />
              </p>
            </div>
            {/* END COPYRIGHT */}
          </div>
        </div>
        {/* END LEFT PART */}

        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div className="container">
                <div className="tokyo_tm_error">
                  <div className="tokyo_tm_error_inner">
                    <h1>Howdy!</h1>
                    <h3>This page is under construction!</h3>
                    <p>Binh is currently hard at work refining this page.</p>
                    <Link href="/" className="ib-button">
                      Go to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END RIGHT PART */}

        <footer className="footer-wrapper">
          <div className="copyright">
          </div>
          {/* END COPYRIGHT */}
        </footer>
      </div>
    </>
  );
};

export default Construction;
