import React from "react";

const Intro = () => {
  const introContent = {
    image: "/img/slider/1.jpg",
    name: "Binh Do-Cao",
    designation: "Aspiring Software Engineer",
    text: (
      <>
    <p>Howdy! My name is Binh Do-Cao and I am a senior Computer Science major at Texas A&M!</p>
  <p>
      I am particularly passionate about building intuitive and scalable applications from the ground up. Whether it’s a web app, mobile app, or a machine learning-powered system, I delve deep to ensure that the end product is innovative, robust, and user-friendly. My adaptability and proficiency in various programming languages and frameworks enable me to develop solutions that are not only problem-solving but also sustainable.
  </p>
      </>
    ),
  };

  return (
    <>
      <div className="top_author_image2">
        <img src={"/img/slider/binhcomposite.jpg"} alt="Binh Do-Cao" style={{ width: "328px", height: "450px" }} />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
