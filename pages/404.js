import Image from "next/image";
import Link from "next/link";
import Seo from "../components/Seo";

const NotFound = () => {
  return (
    <>
      <Seo pageTitle="404" />
      {/* End page title for seo */}

      <div className="not-found-wrapper">
        <div className="leftpart">
          <div className="leftpart_inner">
            <div className="logo">
              <Link className="navbar-brand" href="/">
                <Image
                  width={126}
                  height={22}
                  src="/img/logo/dark.png"
                  alt="brand"
                />
              </Link>
            </div>
            {/* END LOGO */}
            <div className="copyright">
              <p>
                &copy; 2021 Tokyo <br /> Created by
                <a
                  href="https://themeforest.net/user/ib-themes"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ib-Themes
                </a>
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
                    <h1>404!</h1>
                    <h3>Page not found</h3>
                    <p>The page you were looking for could not be found.</p>
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
            <p>
              &copy; 2021 Tokyo Created by
              <a
                href="https://themeforest.net/user/ib-themes"
                target="_blank"
                rel="noreferrer"
              >
                Ib-Themes
              </a>
            </p>
          </div>
          {/* END COPYRIGHT */}
        </footer>
      </div>
    </>
  );
};

export default NotFound;
