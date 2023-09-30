import React, { useEffect } from "react";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const RING_DAY = () => {
  const router = useRouter();
  const redirectLink =
    "https://drive.google.com/drive/folders/12eBVDog4UavIVvfjLgpt3gZSeH1xBgXh?usp=sharing";
  useEffect(() => {
    router.push(redirectLink);
  }, [router, redirectLink]);

  return null; // Render nothing in the component since it will immediately redirect
};

const SeoWithCustomTitle = () => (
  <Seo pageTitle="Ivan's Ring Day"
  imageUrl="/img/portfolio/previews/ivan.jpg"></Seo>
);

const RING_DAY_PAGE = () => (
  <>
    <SeoWithCustomTitle />
    <RING_DAY />
  </>
);

export default RING_DAY_PAGE;
