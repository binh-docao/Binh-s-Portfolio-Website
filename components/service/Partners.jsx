import Image from "next/image";
import React from "react";

const Partners = () => {
  const partnerImg = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <>
      {partnerImg.map((img, i) => (
        <li key={i}>
          <div className="list_inner">
            <Image
              width={123}
              height={37}
              src={`/img/partners/dark/${img}.png`}
              alt="partners brand"
            />
          </div>
        </li>
      ))}
    </>
  );
};

export default Partners;
