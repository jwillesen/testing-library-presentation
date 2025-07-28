import { useLayoutEffect } from "react"
import Reveal from "reveal.js"

import TitleSlide from "./slides/TitleSlide"

export default function Presentation() {
  useLayoutEffect(() => {
    Reveal.initialize({
      controlsTutorial: false,
    })
  })

  return (
    <div className="reveal">
      <div className="slides">
        <TitleSlide />
        <section>Slide 2</section>
      </div>
    </div>
  )
}
