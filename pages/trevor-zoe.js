import React, { useEffect } from "react";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const Trevor_Zoe = () => {
  const router = useRouter();
  const redirectLink =
    "https://drive.google.com/drive/folders/1ded0nMltYUXm84kK5838HL3DXwsjxNbz?usp=sharing";
  useEffect(() => {
    router.push(redirectLink);
  }, [router, redirectLink]);

  return null; // Render nothing in the component since it will immediately redirect
};

const SeoWithCustomTitle = () => (
  <Seo pageTitle="Trevor & Zoe - Photos" /> // Set the desired page title here
);

const trevor_zoe_page = () => (
  <>
    <SeoWithCustomTitle />
    <Trevor_Zoe />
  </>
);

export default trevor_zoe_page;
