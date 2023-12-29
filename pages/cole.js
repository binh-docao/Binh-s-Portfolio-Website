import React, { useEffect } from "react";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const RING_DAY = () => {
  const router = useRouter();
  const redirectLink =
    "https://drive.google.com/drive/folders/1oiWgEflPxDTa38cdmqlRw7n-KEN_-J0r?usp=sharing";
  useEffect(() => {
    router.push(redirectLink);
  }, [router, redirectLink]);

  return null; // Render nothing in the component since it will immediately redirect
};

const SeoWithCustomTitle = () => (
  <Seo pageTitle="Cole Wilkin - Grad"
  imageUrl="/img/portfolio/previews/cw.jpg"></Seo>
);

const RING_DAY_PAGE = () => (
  <>
    <SeoWithCustomTitle />
    <RING_DAY />
  </>
);

export default RING_DAY_PAGE;
