import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import Social from "../Social";
import { useTheme } from "next-themes";

const ZTA_Home = () => {
  const [mounted, setMounted] = useState(false);
  const [houseGirls, setHouseGirls] = useState([]);
  const [selectedHouseGirl, setSelectedHouseGirl] = useState(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Fetch list of house girls from the API
    // fetch('http://localhost:4000/api/HouseGirlNames')
    fetch('http://b1nh.com/api/HouseGirlNames')
      .then(response => response.json())
      .then(data => setHouseGirls(data))
      .catch(error => console.error('Error fetching house girls:', error));

    setMounted(true);
  }, []);

  const handleHouseGirlSelect = (event) => {
    const id = event.target.value;
    const girl = houseGirls.find(h => h._id === id);
    setSelectedHouseGirl(girl);
  };

  const requestLatePlate = () => {
    console.log("Requesting late plate for", selectedHouseGirl.name);
    // Here, you can send a request to your API to handle the late plate request
  };

  if (!mounted) {
    return null;
  }

  const avatarImageUrl = selectedHouseGirl 
    ? `/img/hg/${selectedHouseGirl.name.replace(/\s+/g, '').toLowerCase()}.jpg`
    : null; // set to a default image or keep it null if you don't want to show any image before selection

  return (
    <>
      {/* Dropdown to select House Girl */}
      {!selectedHouseGirl && ( // Render the dropdown only if no house girl is selected
            <div className="centered-container">
                <select onChange={handleHouseGirlSelect}>
                <option>Select a House Girl</option>
                {houseGirls.map(girl => <option key={girl._id} value={girl._id}>{girl.name}</option>)}
                </select>
            </div>
        )}

      <div className="tokyo_tm_home">
        <div className="home_content">

          {selectedHouseGirl && (
            <>
              <div className="avatar">
                <div
                  className="image avatar_img"
                  style={{
                    backgroundImage: `url(${avatarImageUrl})`,
                  }}
                ></div>
              </div>

              <div className="details">
                <h3 className="name" style={{ color: 'deeppink' }}>{selectedHouseGirl.name}</h3>
                <h4 className="typer">
                  <Typed
                    strings={selectedHouseGirl.roles || ["House Girl","ZTA","insert adjectives"]}
                    loop
                    typeSpeed={80}
                  />
                </h4>
                <p className="job">
                  {selectedHouseGirl.description || 'Description here...'}
                </p>
                <Social />
                <button onClick={requestLatePlate}>Request Late Plate</button>
              </div>
            </>
          )}
        </div>
      </div>
      <style jsx>{`
        .centered-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; // This takes up the entire viewport height.
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1; // This ensures the centered container is above the tokyo_tm_home container.
        }

        select {
          padding: 8px 16px; // Added some padding for better appearance.
          font-size: 1rem;
        }
      `}</style>
    </>
  );
};

export default ZTA_Home;
