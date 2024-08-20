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
} from 'leafer-ui'
import '@leafer-in/editor'
import aa from './imgs/aa.jpg'
const app = new App({ view: 'app', editor: {} })

const group = new Group({
  x: 100,
  y: 100,
})

const eraser = new Path({
  x: 10,
  y: 10,
  path: 'M 10 10 L 500 500 Z',
  fill: 'black',
  eraser: true,
})

const image = new Image({
  x: 0,
  y: 0,
  width: 600,
  height: 400,
  url: aa,
  cornerRadius: 3,
})

app.tree.add(group)
group.add(eraser)
group.add(image)
window.app = app
