import React, { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

const WeepingAngelWallpaper = () => {
  const [isWatched, setIsWatched] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsWatched(!document.hidden);
    };

    const handleBlur = () => setIsWatched(false);
    const handleFocus = () => setIsWatched(true);

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#000",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const textStyle = {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "white",
    fontSize: "18px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  return (
    <div style={containerStyle}>
      <img
        src={
          isWatched
            ? require("./weeping-angel-1.jpg")
            : require("./weeping-angel-2.jpg")
        }
        alt="Weeping Angel"
        style={imageStyle}
      />
      <div style={textStyle}>
        {isWatched ? <Eye /> : <EyeOff />}
        {isWatched ? "The Angel is being watched" : "The Angel has moved!"}
      </div>
    </div>
  );
};

export default WeepingAngelWallpaper;
