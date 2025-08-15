import { useState } from "react"
import clsx from "clsx"

import "./StarRating/StarRating.css"

type Props = {
  max: number
  value: number
  onChange: (value: number) => void
}

export default function StarRating({ max, value, onChange }: Props) {
  const [hovering, setHovering] = useState(false)
  const [hoverValue, setHoverValue] = useState(0)

  const visibleValue = hovering ? hoverValue : value

  const stars = Array.from({ length: max }, (_, index) => (
    <span
      className={clsx(
        "star-rating-star",
        index < visibleValue ? "gold-star" : "grey-star",
      )}
      key={index}
      role="radio"
      aria-checked={index === value}
      tabIndex={0}
      onClick={() => onChange(index)}
      onMouseEnter={() => setHoverValue(index + 1)}
    >
      <span aria-hidden="true">★</span>
      <span className="sr-only">
        {index + 1} star{index + 1 > 1 ? "s" : ""}
      </span>
    </span>
  ))

  return (
    <span
      className="star-rating"
      role="radiogroup"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {stars}
    </span>
  )
}
