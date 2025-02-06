"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Slim version

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing particles...");
    await loadSlim(engine); // Load slim version
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: { color: "#000" },
        particles: {
          number: { value: 100 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
        },
      }}
    />
  );
}
