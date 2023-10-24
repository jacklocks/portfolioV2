"use client";
import React, { useEffect, useState } from "react";

const Mouse = () => {
  const [cursorX, setCursorX] = useState();
  const [cursorY, setCursorY] = useState();

  const handleMouseMove = (e) => {
    setCursorX(e.clientX);
    setCursorY(e.clientY);
  };

  useEffect(() => {
    const pointerDiv = document.querySelector(".cursor");

    const element = document.querySelectorAll("#cursor");
    const body = document.body.addEventListener("mousemove", handleMouseMove);

    element.forEach((link) => {
      link.addEventListener("mouseover", () => {
        pointerDiv.classList.add("hoverHead");
      });
    });
    element.forEach((link) => {
      link.addEventListener("mouseleave", () => {
        pointerDiv.classList.remove("hoverHead");
      });
    });
  }, []);
  return (
    <div
      className="cursor"
      style={{
        left: cursorX + "px",
        top: cursorY + "px",
      }}
    ></div>
  );
};

export default Mouse;
