import Social from "../../Social";

const ModalOne = () => {
  return (
    <div className="box_inner">
      <div className="description_wrap scrollable">
        <div className="image">
          <img src="/img/thumbs/4-3.jpg" alt="tumb" />
          <div
            className="main"
            style={{
              backgroundImage: "url(/img/portfolio/6.jpg)",
            }}
          ></div>
        </div>
        {/* END IMAGE */}
        <div className="portfolio_main_title">
          <h3>Selena Gomez</h3>
          <span>Details</span>
        </div>
        {/* END portfolio_main_title */}
        <div className="main_details">
          <div className="textbox">
            <p>
              We live in a world where we need to move quickly and iterate on
              our ideas as flexibly as possible. Building mockups strikes the
              ideal balance between true-life representation of the end product
              and ease of modification.
            </p>
            <p>
              Mockups are useful both for the creative phase of the project -
              for instance when you&lsquo;re trying to figure out your user
              flows or the proper visual hierarchy - and the production phase
              when they will represent the target product. Making mockups a part
              of your creative and development process allows you to quickly and
              easily ideate.
            </p>
          </div>
          <div className="detailbox">
            <ul>
              <li>
                <span className="first">Client</span>
                <span>Alvaro Morata</span>
              </li>
              <li>
                <span className="first">Category</span>
                <span>Details</span>
              </li>
              <li>
                <span className="first">Date</span>
                <span>March 07, 2021</span>
              </li>
              <li>
                <span className="first">Share</span>
                <Social />
                {/* END SOCIAL SHARE */}
              </li>
            </ul>
          </div>
        </div>
        {/* main_details */}

        <div className="additional_images">
          <ul className="gallery_zoom">
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/6.jpg)",
                    }}
                  ></div>
                </div>
              </div>
            </li>
            {/* END SHOT */}
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/2.jpg)",
                    }}
                  ></div>
                </div>
              </div>
            </li>
            {/* END SHOT */}
            <li>
              <div className="list_inner">
                <div className="my_image">
                  <div
                    className="main"
                    style={{
                      backgroundImage: "url(/img/portfolio/3.jpg)",
                    }}
                  ></div>
                </div>
              </div>
            </li>
            {/* END SHOT */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalOne;
