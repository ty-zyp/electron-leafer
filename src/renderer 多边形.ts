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
} from 'leafer-ui'
import '@leafer-in/editor'

const app = new App({ view: 'app', editor: {} })
const polygon = new Polygon({
  editable: true,
  width: 100,
  // height: 50 * Math.tan(Math.PI / 3),
  height: 100,
  sides: 5,
  fill: 'blue',
  cornerRadius: 10,
  // stroke: 'black',
})
const polygon1 = new Polygon({
  editable: true,
  points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90], // [x,y, x,y ...]
  fill: 'rgb(50,205,121)',
})

const ellipse = new Ellipse({
  editable: true,
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  // fill: 'green',
  // cornerRadius: 10,
  stroke: 'black',
  strokeWidth: 1,
})
app.tree.add(ellipse)
app.tree.add(polygon)
app.tree.add(polygon1)

// polygon.on(PointerEvent.CLICK, (e: PointerEvent) => {
//   console.log('pointerdown', e)
// })
