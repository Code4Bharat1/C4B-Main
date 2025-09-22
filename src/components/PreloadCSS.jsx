// components/PreloadCSS.jsx
"use client";
import { useEffect } from "react";

export default function PreloadCSS() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "style";
    link.href = "/css/main.css";
    link.onload = () => { link.rel = "stylesheet"; };
    document.head.appendChild(link);
  }, []);
  return null;
}
