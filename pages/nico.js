import React, { useEffect } from "react";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const Nico = () => {
  const router = useRouter();
  const redirectLink =
    "https://drive.google.com/drive/folders/1KOHxrscNEOJORUraWvW0vZF75FYiKNvk?usp=sharing";
  useEffect(() => {
    router.push(redirectLink);
  }, [router, redirectLink]);

  return null; // Render nothing in the component since it will immediately redirect
};

const SeoWithCustomTitle = () => (
  <Seo pageTitle="Nico Lopez - Downtown" /> // Set the desired page title here
);

const Nico_Page = () => (
  <>
    <SeoWithCustomTitle />
    <Nico />
  </>
);

export default Nico_Page;
