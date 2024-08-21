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

// const leafer = new Leafer({ view: window })

// const rect = new Rect({
//   width: 200,
//   height: 200,
//   fill: '#32cd79',
//   draggable: true,
// })

// const ellipse = new Ellipse({
//   x: 50,
//   y: 50,
//   width: 100,
//   height: 100,
//   innerRadius: 0.5,
//   fill: 'white',
// })

// const group = new Group({
//   x: 100,
//   y: 100,
// })

// group.add(rect)
// group.add(ellipse)

// leafer.add(group)

const app = new App({ view: 'app', editor: {} })

const rect = new Rect({
  width: 200,
  height: 200,
  fill: '#32cd79',
  editable: true,
  event: {
    click: () => {
      console.log('rect click')
    },
  },
})

const ellipse = new Ellipse({
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  innerRadius: 0.5,
  fill: 'white',
  editable: true,
})

const group = new Group({
  x: 100,
  y: 100,
})
group.add(rect)
group.add(ellipse)
app.tree.add(group)

// rect.on(PointerEvent.CLICK, () => {
//   group.remove(ellipse)
// })
// window.app = app
