import type { Direction } from "../utils/types"
// import { type MouseEvent } from "react"

import "./BottomSection.css"

type BottomSectionProps = {
  changeDirection: (value: Direction) => void
}

export default function BottomSection({ changeDirection }: BottomSectionProps) {
  return (
    <div className="bottom-section">
      <div className="buttons-container">
        <button
          className="up"
          title="up"
          value="up"
          onClick={(e) => changeDirection(e.currentTarget.value as Direction)}>
          <span className="material-symbols-outlined">arrow_upward</span>
        </button>
        <button
          className="right"
          title="right"
          value="right"
          onClick={(e) => changeDirection(e.currentTarget.value as Direction)}>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
        <button
          className="left"
          title="left"
          value="left"
          onClick={(e) => changeDirection(e.currentTarget.value as Direction)}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <button
          className="down"
          title="down"
          value="down"
          onClick={(e) => changeDirection(e.currentTarget.value as Direction)}>
          <span className="material-symbols-outlined">arrow_downward</span>
        </button>
      </div>
    </div>
  )
}
