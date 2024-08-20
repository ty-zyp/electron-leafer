import {
  Leafer,
  Rect,
  Group,
  PointerEvent,
  Debug,
  App,
  Text,
  defineKey,
} from 'leafer-ui'
import '@leafer-in/editor'

const app = new App({ view: 'app', editor: {} })

// const rect = new Rect({
//   editable: true,
//   width: 100,
//   height: 100,
//   fill: 'green',
// })
// app.tree.add(rect)
// rect.windingRule = 'evenodd'
// rect.pen.roundRect(0, 0, 200, 100, 30).drawArc(50, 50, 25)

const rect = new Rect({
  editable: true,
  width: 100,
  height: 100,
  windingRule: 'evenodd',
  path: 'X0 0 100 100 30M75 50P50 50 25',
  fill: 'rgb(50,205,121)',
})

app.tree.add(rect)
