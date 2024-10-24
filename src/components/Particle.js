import React from 'react';
import Particles from 'react-tsparticles';

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 2000,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.3,
            width: 2,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            out_mode: "out",
          },
          size: {
            value: 3,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.01,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",  // Makes particles "run away" on hover
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 200,  // Controls how far the particles move away from the cursor
              duration: 0.4,
            },
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
        fullScreen: {
          enable: true,
          zIndex: -100,
        },
      }}
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex:-1000,
        pointerEvents: "none",
        backgroundColor: "rgba(0, 0, 0, 0)",
      }}
    />
  );
}

export default Particle;
