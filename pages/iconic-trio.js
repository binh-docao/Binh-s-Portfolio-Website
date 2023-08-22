import React, { useEffect } from "react";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const iconic_trio = () => {
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

const iconic_trio_page = () => (
  <>
    <SeoWithCustomTitle />
    <iconic_trio />
  </>
);

export default iconic_trio_page;
