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
  ImageEvent,
  Canvas,
} from 'leafer-ui'
import '@leafer-in/editor'

const leafer = new Leafer({
  view: 'app',
})

const canvas = new Canvas({ width: 800, height: 600 })
const { context: c } = canvas

c.fillStyle = 'green'
c.beginPath()
c.roundRect(200, 200, 100, 100, 10)
c.fill('evenodd')

c.fillStyle = 'blue'
c.beginPath()
c.arc(250, 250, 20, 0, Math.PI * 2)
c.fill()

canvas.paint()

leafer.add(canvas)

const pen = new Pen()

pen.setStyle({
  fill: {
    type: 'radial',
    stops: [
      { offset: 0, color: '#FF4B4B' },
      { offset: 1, color: '#FEB027' },
    ],
  },
})

pen.roundRect(0, 0, 100, 100, 30)

pen.setStyle({ y: -5, fill: 'white' })
pen
  .moveTo(40, 30)
  .bezierCurveTo(70, 30, 90, 60, 63, 80)
  .quadraticCurveTo(50, 88, 40, 80)
  .bezierCurveTo(10, 60, 50, 40, 40, 30)

canvas.draw(pen)
