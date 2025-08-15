import { useState } from "react"
import StarRating from "../components/StarRating"

export default function ExampleRatingComponentSlide() {
  const [rating, setRating] = useState(0)

  return (
    <section className="text-3xl">
      <h2>Example: Star Rating Component</h2>
      <div className="text-5xl">
        <StarRating
          max={5}
          value={rating}
          onChange={(value) => setRating(value)}
        />
      </div>
    </section>
  )
}
