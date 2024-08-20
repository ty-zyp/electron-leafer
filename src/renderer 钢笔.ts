import {
  Leafer,
  Rect,
  Group,
  PointerEvent,
  Debug,
  App,
  Text,
  defineKey,
  Ellipse,
  Line,
  Polygon,
  Star,
  Path,
  Pen,
} from 'leafer-ui'
import '@leafer-in/editor'

let isDrawing = false
let canDrawing = false

const app = new App({ view: 'app', editor: {} })

let p
// p.editable = true
// p.setStyle({ stroke: '#FF4B4B', strokeWidth: 2, x: 20, y: 20 })
// p.moveTo(20, 20)
// p.lineTo(200, 200)
// p.closePath()
// app.tree.add(p)

let startX = 0
let startY = 0
let endX = 0
let endY = 0
function down(e: PointerEvent) {
  console.log('down', e)
  startX = e.x
  startY = e.y
  p = new Pen()
  p.editable = false
  p.setStyle({ stroke: '#FF4B4B', strokeWidth: 2, x: 20, y: 20 })
  p.moveTo(startX, startY)
  isDrawing = true
  app.tree.add(p)
}
function move(e: PointerEvent) {
  if (!isDrawing || !canDrawing) {
    return
  }
  p.clearPath()
  console.log('move', e)
  endX = e.x
  endY = e.y
  p.moveTo(startX, startY)
  p.lineTo(endX, endY)
}
function up(e: PointerEvent) {
  if (!isDrawing || !canDrawing) {
    return
  }
  console.log('up', e)
  p.lineTo(endX, endY)
  // p.closePath()
  p.editable = true
  isDrawing = false
}

function start() {
  canDrawing = true
  app.on(PointerEvent.DOWN, down)
  app.on(PointerEvent.UP, up)
  app.on(PointerEvent.MOVE, move)
}
function end() {
  canDrawing = false
  app.off(PointerEvent.DOWN, down)
  app.off(PointerEvent.MOVE, move)
  app.off(PointerEvent.UP, up)
}

start()
window.app = app
