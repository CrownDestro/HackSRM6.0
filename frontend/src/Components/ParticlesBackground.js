import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: {
      color: "#000000", // Ensure background stays black
    },
    particles: {
      number: {
        value: 80, // Number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff", // White particles
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1, // Fully visible
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.3,
          sync: false,
        },
      },
      size: {
        value: 3, // Adjust particle size
        random: true,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
      },
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse", // Particles move away from cursor
        },
        onclick: {
          enable: true,
          mode: "push", // New particles appear on click
        },
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
  };

  return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default ParticlesBackground;
