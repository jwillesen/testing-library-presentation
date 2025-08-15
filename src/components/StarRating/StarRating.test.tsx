import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import StarRating from "../StarRating"

it("displays the current value", async () => {
  render(<StarRating max={5} value={2} onChange={() => {}} />)
  const stars = screen.getAllByRole("radio")
  expect(stars[0]).toHaveClass("gold-star")
  expect(stars[1]).toHaveClass("gold-star")
  expect(stars[2]).toHaveClass("grey-star")
  expect(stars[3]).toHaveClass("grey-star")
  expect(stars[4]).toHaveClass("grey-star")
})

it("displays a greater value on hover", async () => {
  render(<StarRating max={5} value={2} onChange={() => {}} />)
  const user = userEvent.setup()
  const stars = screen.getAllByRole("radio")
  await user.hover(stars[3])
  expect(stars[0]).toHaveClass("gold-star")
  expect(stars[1]).toHaveClass("gold-star")
  expect(stars[2]).toHaveClass("gold-star")
  expect(stars[3]).toHaveClass("gold-star")
  expect(stars[4]).toHaveClass("grey-star")
})

it("displays a lesser value on hover", async () => {
  render(<StarRating max={5} value={2} onChange={() => {}} />)
  const user = userEvent.setup()
  const stars = screen.getAllByRole("radio")
  await user.hover(stars[0])
  expect(stars[0]).toHaveClass("gold-star")
  expect(stars[1]).toHaveClass("grey-star")
  expect(stars[2]).toHaveClass("grey-star")
  expect(stars[3]).toHaveClass("grey-star")
  expect(stars[4]).toHaveClass("grey-star")
})
