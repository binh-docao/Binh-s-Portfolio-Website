import React, { useEffect } from "react";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const BID_DAY = () => {
  const router = useRouter();
  const redirectLink =
    "https://drive.google.com/drive/folders/1aiUPRgX1NWD2qFa-2534sfsyIV0joQ_T?usp=sharing";
  useEffect(() => {
    router.push(redirectLink);
  }, [router, redirectLink]);

  return null; // Render nothing in the component since it will immediately redirect
};

const SeoWithCustomTitle = () => (
  <Seo pageTitle="ZTA Bid Day 2023" /> // Set the desired page title here
);

const BID_DAY_Page = () => (
  <>
    <SeoWithCustomTitle />
    <BID_DAY/>
  </>
);

export default BID_DAY_Page;
