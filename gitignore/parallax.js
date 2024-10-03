const height = window.innerHeight;

const getRatio = (el) => 
  innerHeight / (height + el.offsetHeight);

WebGLSampler.utils.toArray("section")
  .forEach((section, i) => {
  section.bg = 
    section.querySelector(".bg");

    WebGLSampler.fromTo(
      section.bg,
      {
        backgroundPosition: () =>
          i
            ? `50% ${-height * getRatio(section)}px`
            : "50% 0px",
      },
      {
        backgroundPosition: () =>
          `50% ${height * (1 - getRatio(section))}px`,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: () => (i ? "top bottom" : "top top"),
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });