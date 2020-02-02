import Drawing from "../../"

const canvas = document.getElementById("canvas")
const tools = document.querySelectorAll(".tool")
let selectedTool = document.querySelector(".selected")
const historyBtns = document.querySelectorAll(".history")
const fileButtons = document.querySelectorAll(".file-button")

const dwg = new Drawing(canvas)

let down = false
let drag = false
let inCanvas = false
const start = { x: 0, y: 0 }

function getTrianglePoints(start, end) {
  const pt1 = {
    x: start.x + (end.x - start.x) / 2,
    y: start.y,
  }

  const pt2 = {
    x: start.x,
    y: end.y,
  }

  const pt3 = {
    x: end.x,
    y: end.y,
  }

  return [pt1, pt2, pt3]
}

function getDiamondPoints(start, end) {
  const a = { x: start.x + (end.x - start.x) / 2, y: start.y }
  const b = { x: end.x, y: start.y + (end.y - start.y) / 2 }
  const c = { x: start.x + (end.x - start.x) / 2, y: end.y }
  const d = { x: start.x, y: start.y + (end.y - start.y) / 2 }

  return [a, b, c, d]
}

function drawMarquee(start, end, tool) {
  const marqueeProps = {
    strokeColor: "gray",
    strokeWidth: 1,
  }
  switch (tool) {
    case "ellipse":
      dwg.ellipse(start, end, marqueeProps, false)
      break
    case "line":
      dwg.line(start, end, marqueeProps, false)
      break
    case "diamond":
      const diamondPts = getDiamondPoints(start, end)
      dwg.polygon(diamondPts, marqueeProps, false)
      break
    case "rectangle":
      dwg.rectangle(start, end, marqueeProps, false)
      break
    case "polygon":
      const trianglePts = getTrianglePoints(start, end)
      dwg.polygon(trianglePts, marqueeProps, false)
      break
    case "selection":
      dwg.rectangle(start, end, { fillColor: "rgba(0, 0, 0, 0.25)" }, false)
  }
}

tools.forEach(tool => {
  tool.addEventListener("click", evt => {
    selectedTool.classList.remove("selected")
    evt.target.classList.add("selected")
    selectedTool = evt.target
  })
})

historyBtns.forEach(historyBtn => {
  historyBtn.addEventListener("click", evt => {
    if (evt.target.id === "undo") {
      dwg.undo()
    } else if (evt.target.id === "redo") {
      dwg.redo()
    }
  })
})

fileButtons.forEach(btn => {
  btn.addEventListener("click", evt => {
    if (evt.target.id === "open") {
      dwg.open()
    } else if (evt.target.id === "save") {
      dwg.save()
    }
  })
})

canvas.addEventListener("mouseenter", () => (inCanvas = true))
canvas.addEventListener("mouseleave", () => {
  inCanvas = false
  down = false
  drag = false
})

canvas.addEventListener("mousedown", evt => {
  if (!inCanvas) return
  if (selectedTool.id === "selection") {
    dwg.selectShapeAtPoint({ x: evt.offsetX, y: evt.offsetY })

    const handleStyle = {
      strokeColor: "black",
      strokeWidth: 1,
      fillColor: "white",
    }

    const boxStyle = {
      strokeColor: "#0D98BA",
      strokeWidth: 2,
    }

    for (const shape of dwg.shapes) {
      if (shape.selected) {
        dwg.boundingBox(shape, boxStyle, handleStyle)
      }
    }
  }

  down = true
  start.x = evt.offsetX
  start.y = evt.offsetY
})

canvas.addEventListener("mouseup", evt => {
  down = false

  const end = {
    x: evt.offsetX,
    y: evt.offsetY,
  }

  const style = {
    strokeColor: "green",
    strokeWidth: 1,
    fillColor: "blue",
  }

  switch (selectedTool.id) {
    case "rectangle":
      dwg.rectangle(start, end, style)
      break
    case "ellipse":
      dwg.ellipse(start, end, style)
      break
    case "line":
      dwg.line(start, end, style)
      break
    case "diamond":
      const diamondPts = getDiamondPoints(start, end)
      dwg.polygon(diamondPts, style)
      break
    case "polygon":
      const trianglePts = getTrianglePoints(start, end)
      dwg.polygon(trianglePts, style)
      break
    case "selection":
      if (drag) {
        dwg.render()
      }
      break
  }
  drag = false
})

canvas.addEventListener("mousemove", evt => {
  if (!down || !inCanvas) return
  const end = {
    x: evt.offsetX,
    y: evt.offsetY,
  }

  if (selectedTool.id === "selection" && dwg.findShapeAtPoint(end) && !drag) {
    console.log("move")
  } else {
    drag = true
    drawMarquee(start, end, selectedTool.id)
  }
})
