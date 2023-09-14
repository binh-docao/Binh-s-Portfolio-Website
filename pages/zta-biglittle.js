import React, { useEffect } from "react";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const ZTA_BIGLITTLE = () => {
  const router = useRouter();
  const redirectLink =
    "https://drive.google.com/drive/folders/1AuFyMmUfYqghaITCCWr5EoEJKv_RJBE0?usp=sharing";
  useEffect(() => {
    router.push(redirectLink);
  }, [router, redirectLink]);

  return null; // Render nothing in the component since it will immediately redirect
};

const SeoWithCustomTitle = () => (
  <Seo pageTitle="ZTA Big/Little Reveal" /> // Set the desired page title here
);

const ZTA_BIGLITTLE_Page = () => (
  <>
    <SeoWithCustomTitle />
    <ZTA_BIGLITTLE />
  </>
);

export default ZTA_BIGLITTLE_Page;
