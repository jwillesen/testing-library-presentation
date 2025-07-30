import { useLayoutEffect } from "react"
import Reveal from "reveal.js"
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js"
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js"

import TitleSlide from "./slides/TitleSlide"
import TocSlide from "./slides/TocSlide"
import EncapsulationSlide from "./slides/EncapsulationSlide"
import RestExampleSlide from "./slides/RestExample"
import WhyWriteTestsSlide from "./slides/WhyWriteTestsSlide"
import BugStatisticSlide from "./slides/BugStatisticSlide"
import AncientHistorySlide from "./slides/AncientHistorySlide"
import RenaissanceSlide from "./slides/RenaissanceSlide"
import ModernUiTestingSlide from "./slides/ModernUiTestingSlide"
import EnzymeCode from "./slides/EnzymeCode"
import WhiteVsBlackSlide from "./slides/WhiteVsBlackSlide"

export default function Presentation() {
  useLayoutEffect(() => {
    Reveal.initialize({
      plugins: [RevealNotes, RevealHighlight],
      controlsTutorial: false,
      hash: true,
    })
  })

  return (
    <div className="reveal">
      <div className="slides">
        <TitleSlide />
        <TocSlide />
        <EncapsulationSlide />
        <RestExampleSlide />
        <WhyWriteTestsSlide />
        <BugStatisticSlide />
        <WhiteVsBlackSlide />
        <AncientHistorySlide />
        <RenaissanceSlide />
        <EnzymeCode />
        <ModernUiTestingSlide />
      </div>
    </div>
  )
}
