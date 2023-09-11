const fs = require('fs');
const path = require('path');
const readline = require('readline');

// const mainPortfolioDir  = path.join(__dirname, "./portfolio/modal");
const portfolioDir = path.join(__dirname, "/"); // Adjust the path
const modalDir = path.join(__dirname, "/modal"); // Adjust the path
const portfolioJsxPath = path.join(portfolioDir, "Portfolio.jsx");

function generateSampleGroup(name, numImages) {
    let images = "";
    for (let i = 1; i <= numImages; i++) {
        images += `
        <li>
        <div className="list_inner">
          <div className="my_image">
            <div
              className="main"
              style={{
                backgroundImage: "url(/img/portfolio/${name.toLowerCase()}/${i}.jpg)",
              }}
            ></div>
          </div>
        </div>
      </li>
        `;
    }

    return `
    import Social from "../../Social";

    const Modal${name} = () => {
      return (
        <div className="box_inner">
          <div className="description_wrap scrollable">
            <div className="portfolio_main_title">
              <h3>${name}</h3>
            </div>
            <div className="additional_images">
              <ul className="gallery_zoom">
                ${images}
              </ul>
            </div>
          </div>
        </div>
      );
    };
    
    export default Modal${name};
        `;
}

function updatePortfolio(name, numImages,rgbaValue, label, description) {
    const content = fs.readFileSync(portfolioJsxPath, 'utf8');

    // Add the import statement to the top of the file
    const importStatement = `import Modal${name} from "./modal/${name}";\n`;

    const modalState = `

    const [isOpenModal${name}, setIsOpenModal${name}] = useState(false);
    function toggleModal${name}() {
      setIsOpenModal${name}(!isOpenModal${name});
    }
        `;

        const modalTrigger = `
        <li>
        <div className="inner">
          <div className="entry tokyo_tm_portfolio_animation_wrap">
            <Image
              width={400}
              height={600}
              src="/img/portfolio/${name.toLowerCase()}/1.jpg"
              alt="${name}"
              data-tip
              data-for="${name}"
              onClick={toggleModal${name}}
            />
            <ReactTooltip
              id="${name}"
              place="bottom"
              type="light"
              effect="float"
              className="tooltip-wrapper"
            >
              <div>
                <h5 style={{ background: '${rgbaValue}' }}>${label}</h5>
                <span>${description}</span>
              </div>
            </ReactTooltip>
          </div>
        </div>
      </li>
          `;

    const modalComponent = `
    <Modal
    isOpen={isOpenModal${name}}
    onRequestClose={toggleModal${name}}
    contentLabel="My dialog"
    className="mymodal"
    overlayClassName="myoverlay"
    closeTimeoutMS={500}
  >
    <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
      <button className="close-modal" onClick={toggleModal${name}}>
        <img src="/img/svg/cancel.svg" alt="close icon" />
      </button>
      <Modal${name}/>
    </div>
  </Modal>
      `;

    const newContent = importStatement + content
        .replace('// PORTFOLIO_MODAL_STATE_INSERT', modalState + '\n// PORTFOLIO_MODAL_STATE_INSERT')
        .replace('{/* // PORTFOLIO_MODAL_TRIGGER_INSERT */}', modalTrigger + '\n {/* // PORTFOLIO_MODAL_TRIGGER_INSERT */}')
        .replace('{/* // PORTFOLIO_MODAL_COMPONENT_INSERT */}', modalComponent + '\n {/* // PORTFOLIO_MODAL_COMPONENT_INSERT */}');

    fs.writeFileSync(portfolioJsxPath, newContent);
}

function addPortfolio(name, numImages, rgbaValue,label, description) {
    const content = generateSampleGroup(name, numImages);
    fs.writeFileSync(path.join(modalDir, `${name}.jsx`), content);
    updatePortfolio(name, numImages, rgbaValue,label, description);
}

// Using readline to prompt user for input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter the name of the new portfolio folder: ", function(name) {
    
    rl.question("Enter the number of images for this item: ", function(num) {
        const numImages = parseInt(num);

        if (isNaN(numImages)) {
            console.error("Please enter a valid number for the images.");
            rl.close();
            return;
        }
        rl.question("Enter the Red value (0-255) for the RGBA: ", function(red) {
            rl.question("Enter the Green value (0-255) for the RGBA: ", function(green) {
                rl.question("Enter the Blue value (0-255) for the RGBA: ", function(blue) {
                    rl.question("Enter the Alpha value (0-1, e.g., 0.9) for the RGBA: ", function(alpha) {
                        const rgbaValue = `rgba(${red},${green},${blue},${alpha})`;
                        rl.question("Enter the tool-tip name", function(label){   // <-- Fixed the typo here
                            rl.question("Enter the description (e.g., Work Week): ", function(description) {
                                addPortfolio(name, numImages, rgbaValue,label, description);
                                console.log("Portfolio item added successfully!");
                                rl.close();
                            });
                        });
                    });
                });
            });
        });
    });
});