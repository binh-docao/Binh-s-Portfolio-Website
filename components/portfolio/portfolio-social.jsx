import React from "react";

const SocialShare = [
//   {
//     iconName: "facebook",
//     link: "https://www.facebook.com/binh.docao",
//   },
  {
    iconName: "instagram",
    link: "https://www.instagram.com/photo.binh/",
  },
//   {
//     iconName: "tik-tok",
//     link: "https://www.linkedin.com/in/binhdocao/",
//   },
];
const Social = () => {
  return (
    <>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END SOCIAL */}
    </>
  );
};

export default Social;
