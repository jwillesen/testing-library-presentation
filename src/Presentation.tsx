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
import TestingLibraryIntroSlide from "./slides/TestingLibraryIntroSlide"
import DomTestingLibrarySlide from "./slides/DomTestingLibrarySlide"
import ReactTestingLibrarySlide from "./slides/ReactTestingLIbrarySlide"
import UserEventSlide from "./slides/UserEventSlide"
import WhichSelectorSlide from "./slides/WhichSelectorSlide"
import JestDomSlide from "./slides/JestDomSlide"
import ExampleRatingComponentSlide from "./slides/ExampleRatingComponentSlide"
import ConclusionSlide from "./slides/ConclusionSlide"
import EndSlide from "./slides/EndSlide"

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
        <TestingLibraryIntroSlide />
        <DomTestingLibrarySlide />
        <WhichSelectorSlide />
        <ReactTestingLibrarySlide />
        <JestDomSlide />
        <UserEventSlide />
        <ExampleRatingComponentSlide />
        <ConclusionSlide />
        <EndSlide />
      </div>
    </div>
  )
}
