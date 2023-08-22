import React, { useEffect } from "react";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const ICONIC_TRIO = () => {
  const router = useRouter();
  const redirectLink =
    "https://drive.google.com/drive/folders/1EpkWg_BAwQ-H1sat4mAVXfF2c2qZv9q0?usp=sharingg";
  useEffect(() => {
    router.push(redirectLink);
  }, [router, redirectLink]);

  return null; // Render nothing in the component since it will immediately redirect
};

const SeoWithCustomTitle = () => (
  <Seo pageTitle="Allie/Hannah/Lauren FDOC" /> // Set the desired page title here
);

const ICONIC_TRIO_Page = () => (
  <>
    <SeoWithCustomTitle />
    <ICONIC_TRIO/>
  </>
);

export default ICONIC_TRIO_Page;
