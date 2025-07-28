import { useEffect } from "react"
import Reveal from "reveal.js"

import "reveal.js/dist/reveal.css"
import "reveal.js/dist/theme/black.css"

export default function Presentation() {
  useEffect(() => {
    Reveal.initialize({
      controlsTutorial: false,
    })
  })

  return (
    <div className="reveal">
      <div className="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
      </div>
    </div>
  )
}
