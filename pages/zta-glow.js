import { useEffect } from "react";
import Seo from "../components/Seo";
import { useRouter } from "next/router";

const ZTA_GLOW = () => {
  <Seo pageTitle="ZTA Glow Pictures" />
  const router = useRouter();
  const redirectLink = "https://drive.google.com/drive/folders/1JdGumeuFHwPI9Hba8PKUWy_y1cMuj_Ki?usp=drive_link";
  useEffect(() => {
    router.push(redirectLink);
  }, [router, redirectLink]);

  return null; // Render nothing in the component since it will immediately redirect
};

export default ZTA_GLOW;
