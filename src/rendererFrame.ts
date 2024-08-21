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
  Image,
  Box,
  Frame,
} from 'leafer-ui'
import '@leafer-in/editor'

const app = new App({ view: 'app', editor: {} })

const frame = new Frame({
  width: 100,
  height: 100,
  fill: '#f5f5f5',
  draggable: true,
  editable: true,
})
const rect = new Ellipse({
  x: 60,
  y: 60,
  width: 50,
  height: 50,
  fill: '#32cd79',
  draggable: true,
})
app.tree.add(frame)
frame.add(rect)

// rect.on(PointerEvent.CLICK, () => {
//   group.remove(ellipse)
// })
// window.app = app
