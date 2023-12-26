import React, { useEffect } from "react";
import Head from "next/head"; 
import { useRouter } from "next/router";

const MyPage = () => {
  useEffect(() => {
    window.location.href = "https://drive.google.com/drive/folders/1G77Ok3RVshaKG5GPVGXnREbu_gGtax1j?usp=sharing";
  }, []);

  return (
    <>
      <Head>
        <title>Sophia Gagliardi - Graduation</title>
        <meta name="description" content="Sophia Gagliardi - Graduation Pictures" />
        <meta property="og:image" content="sg-grad.jpg" />
        {/* Other SEO tags */}
      </Head>
      {/* Your page content */}
    </>
  );
};

export default MyPage;
