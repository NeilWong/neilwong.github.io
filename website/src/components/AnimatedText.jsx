import React, { useEffect } from "react";

import { ml12 } from "./animated-text.module.scss";
import anime from "animejs/lib/anime.es.js";

function AnimatedText({ text }) {
  useEffect(() => {
    var textWrapper = document.querySelector(".ml12");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: ".ml12 .letter",
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 100,
        delay: (el, i) => 200 + 30 * i,
      })
      .add({
        targets: ".ml12 .letter",
        translateX: [0, -30],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 1100,
        delay: (el, i) => 100 + 30 * i,
      });
  });

  return (
    <div>
      <h1 className={ml12}>awdawdsdas</h1>
    </div>
  );
}

export default AnimatedText;
