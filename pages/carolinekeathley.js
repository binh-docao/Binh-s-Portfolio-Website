import React, { useEffect } from "react";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const RING_DAY = () => {
  const router = useRouter();
  const redirectLink =
    "https://drive.google.com/drive/folders/1OD1eEZ4RuwopLXZc2qaVpjmWW8lH3yfY?usp=sharing";
  useEffect(() => {
    router.push(redirectLink);
  }, [router, redirectLink]);

  return null; // Render nothing in the component since it will immediately redirect
};

const SeoWithCustomTitle = () => (
  <Seo pageTitle="Caroline's Ring Day"
  imageUrl="/img/portfolio/previews/caroline.jpg"></Seo>
);

const RING_DAY_PAGE = () => (
  <>
    <SeoWithCustomTitle />
    <RING_DAY />
  </>
);

export default RING_DAY_PAGE;
