import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;

  }

  const avatarImage = resolvedTheme === "dark" ? "/img/slider/1.jpg" : "/img/slider/4.jpg";

  return (
    <>
      <div className="avatar">
        <div className="image avatar_img" style={{ backgroundImage: `url(${avatarImage})` }}></div>
        {/* END AVATAR IMAGE */}
      </div>

      <label
        className="theme-switcher-label"
        onClick={() => {
          setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }}
      >
        {resolvedTheme === "dark" ? <FaSun /> : <FaMoon />}
      </label>
    </>
  );
};

export default ThemeSwitch;
