import React, { useEffect, useState } from "react";
import Typed from "react-typed";
import Social from "../Social";
import { useTheme } from "next-themes";

const Home = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return null;
  }

  // Specify the image URL based on the theme
  const avatarImageUrl = resolvedTheme === "dark" ? "/img/slider/4.jpg" : "/img/slider/1.jpg";

  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: `url(${avatarImageUrl})`,
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Binh Do-Cao</h3>
            <h4 className="typer">
              <Typed
                strings={[
                  "Student",
                  "Software Engineer",
                  "Photographer",
                  "Day Trader",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
                Senior Computer Science Major at Texas A&M with an emphasis area in Cloud Computing and Artificial Intelligence.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
