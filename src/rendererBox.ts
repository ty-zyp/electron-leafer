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
} from 'leafer-ui'
import '@leafer-in/editor'

const app = new App({ view: 'app', editor: {} })

const box = new Box({
  width: 100,
  height: 100,
  fill: 'blue',
  overflow: 'hide',
  draggable: true,
  children: [
    {
      tag: 'Text',
      text: 'Hello World',
      fill: 'black',
      padding: [10, 10],
      textAlign: 'left',
      verticalAlign: 'top',
    },
  ],
})
const rect = new Ellipse({
  x: 60,
  y: 60,
  width: 50,
  height: 50,
  fill: '#FEB027',
  draggable: true,
})
app.tree.add(box)
box.add(rect)

// rect.on(PointerEvent.CLICK, () => {
//   group.remove(ellipse)
// })
// window.app = app
