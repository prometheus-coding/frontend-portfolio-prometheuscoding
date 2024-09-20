"use client";

import { useEffect, useState } from "react";
import "./homepage.css";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: { clientX: number; clientY: number }) => {
      const x = (event.clientX - window.innerWidth / 2) / window.innerWidth;
      const y = (event.clientY - window.innerHeight / 2) / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <section>
        <div
          className="background"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          <div
            className="absolute left-0 top-40 text-black left-rectangle"
            style={{
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
              transition: "transform 0.1s ease-out",
            }}
          ></div>
          <div
            className="absolute right-0 top-60 text-black right-rectangle"
            style={{
              transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
              transition: "transform 0.1s ease-out",
            }}
          ></div>
          <h1
            className="flex items-center justify-center h-screen text-black"
            style={{
              transform: `translate(${mousePosition.x * 40}px, ${mousePosition.y * 40}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            Prometheus
          </h1>
        </div>
      </section>
    </>
  );
}
