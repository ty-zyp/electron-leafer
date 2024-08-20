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
} from 'leafer-ui'
import '@leafer-in/editor'

const app = new App({ view: 'app', editor: {} })
const line1 = new Line({
  editable: true,
  x: 100,
  y: 100,
  width: 100,
  strokeWidth: 5,
  stroke: 'rgb(50,205,121)',
})
const line2 = new Line({
  editable: true,
  x: 100,
  y: 100,
  // width: 100,
  toPoint: { x: 200, y: 200 },
  strokeWidth: 5,
  stroke: 'blue',
})

const line3 = new Line({
  editable: true,
  x: 200,
  y: 200,
  rotation: 45,
  stroke: 'red',
  strokeWidth: 5,
  width: 200,
})

const line4 = new Line({
  x: 10,
  y: 10,
  editable: true,
  width: 100,
  rotation: 90,
  strokeWidth: 5,
  stroke: 'green',
})

const line5 = new Line({
  editable: true,
  points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90],
  stroke: 'purple',
  strokeWidth: 5,
  // curve: 0.9, // 是否转平滑路径 曲率
  // closed: true,
  cornerRadius: 10,
})

const line6 = new Line({
  editable: true,
  points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90], // [x,y, x,y ...]
  curve: true,
  strokeWidth: 5,
  stroke: 'rgb(50,205,121)',
})

app.tree.add(line1)
app.tree.add(line2)
app.tree.add(line3)
app.tree.add(line4)
app.tree.add(line5)
app.tree.add(line6)
