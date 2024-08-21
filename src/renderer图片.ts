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
  ImageEvent,
} from 'leafer-ui'
import '@leafer-in/editor'
import aa from './imgs/aa.jpg'
const app = new App({ view: 'app', editor: {} })

const group = new Group({
  x: 0,
  y: 0,
})

// const eraser = new Path({
//   x: 10,
//   y: 10,
//   path: 'M 10 10 L 500 500 Z',
//   fill: 'black',
//   eraser: true,
// })

const image = new Image({
  x: 0,
  y: 0,
  // width: 600,
  // height: 400,
  url: aa,
  cornerRadius: 3,
  event: {
    load: () => {
      console.log('load')
    },
    loaded: () => {
      console.log('loaded')
    },
    error: () => {
      console.log('error')
    },
  },
  editable: true,
})

app.tree.add(group)

group.add(image)

image.once(ImageEvent.LOAD, () => {
  console.log('image load')
})
image.once(ImageEvent.LOADED, () => {
  console.log('image loaded')
})
image.once(ImageEvent.ERROR, () => {
  console.log('image load')
})

// group.add(eraser)
window.app = app
