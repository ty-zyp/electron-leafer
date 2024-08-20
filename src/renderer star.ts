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
} from 'leafer-ui'
import '@leafer-in/editor'

const app = new App({ view: 'app', editor: {} })
const polygon = new Star({
  editable: true,
  width: 100,
  height: 100,
  corners: 5,
  fill: 'red',
  stroke: 'red',
  // rotation: 45,
  innerRadius: 0.5,
  cornerRadius: 0.8,
})
const polygon1 = new Star({
  editable: true,
  width: 100,
  height: 100,
  corners: 8,
  fill: 'red',
  stroke: 'red',
  // rotation: 45,
  innerRadius: 0.7,
  cornerRadius: 0.2,
})

app.tree.add(polygon)
app.tree.add(polygon1)

// polygon.on(PointerEvent.CLICK, (e: PointerEvent) => {
//   console.log('pointerdown', e)
// })
// ellipse.on(PointerEvent.CLICK, (e: PointerEvent) => {
//   console.log('pointerdown', e)
// })
