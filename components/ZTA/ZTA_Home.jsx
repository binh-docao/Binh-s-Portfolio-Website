import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import Link from "next/link";
import { useTheme } from "next-themes";
import LatePlateModal from "./LatePlateModal";

const ZTA_Home = () => {
  const [mounted, setMounted] = useState(false);
  const [houseGirls, setHouseGirls] = useState([]);
  const [selectedHouseGirl, setSelectedHouseGirl] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);




  useEffect(() => {
    // Fetch list of house girls from the API
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getNames', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
        },
          body: JSON.stringify({
            collection: "housegirls",
            database: "test",
            dataSource: "Cluster0",
            projection: { "_id": 1, "name": 1 } // I added "name" since you're using it later in the code.
          })
        });
  
        const data = await response.json();
        console.log(data);
        // Assuming the result contains an array. If not, adjust accordingly.
        const sortedHouseGirls = data.sort((a, b) => a.name.localeCompare(b.name));
        setHouseGirls(sortedHouseGirls);
  
      } catch (error) {
        console.error('Error fetching house girls:', error);
      }
    };
  
    fetchData();
    setMounted(true);
  }, []);

  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);

  const fetchDietaryRestrictions = async (name) => {
    try {
      // Update this line to use the new API route
      const response = await fetch(`/api/getRestrictions?name=${encodeURIComponent(name)}`);
      const data = await response.json();
      setDietaryRestrictions(data);
    } catch (error) {
      console.error('Error fetching dietary restrictions:', error);
    }
  };
  

  useEffect(() => {
    if (selectedHouseGirl) {
      fetchDietaryRestrictions(selectedHouseGirl.name);
    }
  }, [selectedHouseGirl]);

  useEffect(() => {
    const storedHouseGirl = JSON.parse(localStorage.getItem("selectedHouseGirl"));
    if (storedHouseGirl) {
      setSelectedHouseGirl(storedHouseGirl);
    }
    setMounted(true);
  }, []);

  const handleHouseGirlSelect = (event) => {
    const id = event.target.value;
    const girl = houseGirls.find(h => h._id === id);
    setSelectedHouseGirl(girl);
    localStorage.setItem("selectedHouseGirl", JSON.stringify(girl));
  };

  const handleLogout = () => {
    setSelectedHouseGirl(null);
    localStorage.removeItem("selectedHouseGirl");
  };

  const requestLatePlate = () => {
    setIsModalOpen(true);

  };

  const adjectives = [
    "Amazing",
    "Brilliant",
    "Charming",
    "Dynamic",
    "Exquisite",
    "Fantastic",
    "Gracious",
    "Harmonious",
    "Inspirational",
    "Joyful",
    "Knowledgeable",
    "Luminous",
    "Magnificent",
    "Noteworthy",
    "Outstanding",
    "Radiant",
    "Splendid",
    "Tenacious",
    "Unique",
    "Vivacious",
    "Gorgeous",
    "Worthy",
    "Exuberant",
    "Zealous",
    "Adaptable",
    "Energetic",
    "Nurturing",
    "Optimistic",
    "Pioneering",
    "Quixotic",
    "Resilient",
    "Stellar",
    "Talented",
    "Uplifting",
    "Visionary",
    "Wholesome",
    "Xenial",
    "Youthful",
  ];
  const getRandomAdjectives = (count) => {
    const shuffled = adjectives.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  const selectedAdjectives = getRandomAdjectives(10);

  if (!mounted) {
    return null;
  }

  
  const avatarImageUrl = selectedHouseGirl 
    ? `/img/hg/${selectedHouseGirl.name.replace(/\s+/g, '')}.jpeg`
    : null; // set to a default image or keep it null if you don't want to show any image before selection

  return (
    <>
      {/* Dropdown to select House Girl */}
      {!selectedHouseGirl && ( // Render the dropdown only if no house girl is selected
            <div className="centered-container" style = {{color:'deeppink'}}>
                <select className="customDropdown" onChange={handleHouseGirlSelect}>
                <option classname>Select a House Girl</option>
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
                strings={selectedHouseGirl.roles || ["ZTA","House Girl", ...selectedAdjectives]}
                loop
                typeSpeed={85}
                />
                </h4>
                <p className="job" >
                {dietaryRestrictions[0] != ''
                  ? `Dietary Restrictions: ${dietaryRestrictions.join(', ')}`
                  : ''}
              </p>
              <div className="z-button-container">
              <a 
                  onClick={requestLatePlate}
                  className="zta-button" 
                  style={{ marginRight: "10px" }} 
                  color="pink">
                      Request Late Plate
              </a>
              <LatePlateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} selectedId={selectedHouseGirl?._id} name = {selectedHouseGirl?.name}/>
              <a onClick={handleLogout} className="zta-button" color="pink">
                Logout
              </a>
            </div>
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
        .z-button-container {
          display: flex;
          gap: 10px; /* Adjust the space between buttons as needed */
        }
      
      `}</style>
    </>
  );
};

export default ZTA_Home;
