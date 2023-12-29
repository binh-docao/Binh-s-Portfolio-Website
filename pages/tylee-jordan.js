import React, { useEffect } from "react";
import Head from "next/head"; 
import { useRouter } from "next/router";

const MyPage = () => {
  useEffect(() => {
    window.location.href = "https://drive.google.com/drive/folders/1Go0iC7hOjDyDvyS4hp5-d4YkzEBQYASo?usp=sharing";
  }, []);

  return (
    <>
      <Head>
        <title>Tylee & Jordan</title>
        <meta name="description" content="Tylee & Jordan" />
        <meta property="og:image" content="/img/portfolio/previews/tj-park.jpg" />
        {/* Other SEO tags */}
      </Head>
      {/* Your page content */}
    </>
  );
};

export default MyPage;
