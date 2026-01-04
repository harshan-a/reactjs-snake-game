import { useState, useEffect } from "react"

import type { Direction } from "./utils/types"

import TopSection from "./components/TopSection"
import MiddleSection from "./components/MiddleSection"
import BottomSection from "./components/BottomSection"

import "./App.css"

function App() {
  const [start, setStart] = useState(false)
  const [direction, setDirection] = useState<Direction>("right")
  const [movingDirection, setMovingDirection] = useState(direction)
  const [refresh, setRefresh] = useState(0)
  const [toRefresh, setToRefresh] = useState(false)

  useEffect(() => {
    const handleClick = (e: KeyboardEvent) => {
      const key = e.key.toLocaleLowerCase()
      if (key === "arrowup" || key === "w") {
        changeDirection("up")
      } else if (key === "arrowdown" || key === "s") {
        changeDirection("down")
      } else if (key === "arrowright" || key === "d") {
        changeDirection("right")
      } else if (key === "arrowleft" || key === "a") {
        changeDirection("left")
      }
    }
    window.addEventListener("keydown", handleClick)

    return () => window.removeEventListener("keydown", handleClick)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toRefresh, start, movingDirection])

  function changeDirection(value: Direction) {
    if (!toRefresh && !start) setStart(true)

    // if (e instanceof KeyboardEvent) {
    //   const key = e.key.toLocaleLowerCase()

    //   if (key === "arrowup" || key === "w") {
    //     value = "up"
    //   } else if (key === "arrowdown" || key === "s") {
    //     value = "down"
    //   } else if (key === "arrowright" || key === "d") {
    //     value = "right"
    //   } else if (key === "arrowleft" || key === "a") {
    //     value = "left"
    //   }
    // } else {
    //   value = e.currentTarget.value as Direction
    // }

    setDirection((p) => {
      if (value === "up" && movingDirection !== "down") {
        return value
      } else if (value === "down" && movingDirection !== "up") {
        return value
      } else if (value === "right" && movingDirection !== "left") {
        return value
      } else if (value === "left" && movingDirection !== "right") {
        return value
      } else return p
    })
  }

  return (
    <>
      <TopSection
        toRefresh={toRefresh}
        setToRefresh={setToRefresh}
        setRefresh={setRefresh}
        start={start}
        setStart={setStart}
        setDirection={setDirection}
      />

      <MiddleSection
        key={refresh}
        direction={direction}
        movingDirection={movingDirection}
        setMovingDirection={setMovingDirection}
        setToRefresh={setToRefresh}
        start={start}
        setStart={setStart}
      />
      <BottomSection changeDirection={changeDirection} />
    </>
  )
}

export default App
