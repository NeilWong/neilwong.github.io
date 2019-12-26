import React from "react"
import PropTypes from "prop-types"
import TextLoop from "react-text-loop"

function AnimatedText({ items }) {
  const itemsList = items.map((item, index) => <span key={index}>{item}</span>)

  return <TextLoop interval={1500}>{itemsList}</TextLoop>
}

AnimatedText.propTypes = {
  items: PropTypes.array.isRequired,
}

export default AnimatedText
//   let textRef = useRef(null)

//   // Similar to componentDidMount and componentDidUpdate:
//   useEffect(() => {
//     var textWrapper = textRef.current

//     textWrapper.innerHTML = textWrapper.textContent.replace(
//       /\S/g,
//       "<span class='letter'>$&</span>"
//     )

//     anime
//       .timeline({ loop: true })
//       .add({
//         targets: textWrapper,
//         translateX: [40, 0],
//         translateZ: 0,
//         opacity: [0, 1],
//         easing: "easeOutExpo",
//         duration: 1200,
//         delay: (el, i) => 500 + 30 * i,
//       })
//       .add({
//         targets: textWrapper,
//         translateX: [0, -30],
//         opacity: [1, 0],
//         easing: "easeInExpo",
//         duration: 1100,
//         delay: (el, i) => 100 + 30 * i,
//       })
//   })

//   return (
//     <>
//       <h1 ref={textRef} className={ml9}>
//         {text}
//       </h1>
//     </>
//   )
// }

// AnimatedText.propTypes = {
//   text: PropTypes.string.isRequired,
// }
