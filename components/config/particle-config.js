const particlesConfig = 
{
  "particles": {
    "number": {
      "value": 150,
      "density": {
        "enable": true,
        "value_area": 1950
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 7
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 180,
      "color": "#ffffff",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 10,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

// {
//   particles: {
//     color: '#fff',
//     shape: 'circle', // "circle", "edge" or "triangle"
//     opacity: 1,
//     size: 4,
//     size_random: true,
//     nb: 150,
//     line_linked: {
//       enable_auto: true,
//       distance: 100,
//       color: '#fff',
//       opacity: 1,
//       width: 1,
//       condensed_mode: {
//         enable: false,
//         rotateX: 600,
//         rotateY: 600
//       }
//     },
//     anim: {
//       enable: true,
//       speed: 1
//     }
//   },
//   interactivity: {
//     enable: true,
//     mouse: {
//       distance: 250
//     },
//     detect_on: 'canvas', // "canvas" or "window"
//     mode: 'grab',
//     line_linked: {
//       opacity: .5
//     },
//     events: {
//       onclick: {
//         enable: true,
//         mode: 'push', // "push" or "remove" (particles)
//         nb: 4
//       }
//     } 
//   },
//   /* Retina Display Support */
//   retina_detect: true
// }


export default particlesConfig;