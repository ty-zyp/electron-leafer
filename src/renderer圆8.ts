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
} from 'leafer-ui'
import '@leafer-in/editor'

// const leafer = new Leafer({ view: 'app' })

// const ellipse = new Ellipse({
//   width: 100,
//   height: 50,
//   fill: 'blue',
// })

// leafer.add(ellipse)

const app = new App({ view: 'app', editor: {} })

const ellipse = new Ellipse({
  editable: true,
  x: 100,
  y: 100,
  width: 100,
  height: 100,
  fill: 'blue',
})
const ellipse1 = new Ellipse({
  editable: true,
  x: 125,
  y: 125,
  width: 50,
  height: 50,
  fill: 'yellow',
})

const ellipse2 = new Ellipse({
  editable: true,
  x: 150,
  y: 150,
  width: 100,
  height: 100,
  innerRadius: 0.5,
  fill: 'green',
  // startAngle: 20,
  // endAngle: 180,
})

app.tree.add(ellipse)
app.tree.add(ellipse1)
app.tree.add(ellipse2)

// rect.windingRule = 'evenodd'
// rect.pen.roundRect(0, 0, 200, 100, 30).drawArc(50, 50, 25)

// const rect = new Rect({
//   editable: true,
//   width: 100,
//   height: 100,
//   windingRule: 'evenodd',
//   path: 'X0 0 100 100 30M75 50P50 50 25',
//   fill: 'rgb(50,205,121)',
// })

// app.tree.add(rect)
