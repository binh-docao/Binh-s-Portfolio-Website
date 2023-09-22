import React, { useEffect } from "react";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const SOUTH_HAMPTONS = () => {
  const router = useRouter();
  const redirectLink =
    "https://drive.google.com/drive/folders/1rN8hgDeRLcaIB3HmVzVZBtMiTf_VEHkZ?usp=sharing";
  useEffect(() => {
    router.push(redirectLink);
  }, [router, redirectLink]);

  return null; // Render nothing in the component since it will immediately redirect
};

const SeoWithCustomTitle = () => (
  <Seo pageTitle="ZTA South Hamptons Date Party" /> // Set the desired page title here
);

const SOUTH_HAMPTONS_PAGE = () => (
  <>
    <SeoWithCustomTitle />
    <SOUTH_HAMPTONS />
  </>
);

export default SOUTH_HAMPTONS_PAGE;
