import { useEffect } from "react";
import { useRouter } from "next/router";

const Pictures = () => {
  const router = useRouter();
  const redirectLink = "https://binh.pic-time.com/portfolio";
  useEffect(() => {
    router.push(redirectLink);
  }, [router, redirectLink]);

  return null; // Render nothing in the component since it will immediately redirect
};

export default Pictures;
