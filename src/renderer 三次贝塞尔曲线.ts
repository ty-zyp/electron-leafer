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
} from 'leafer-ui'
import '@leafer-in/editor'

const app = new App({ view: 'app', editor: {} })

// 1、
// const p1 = new Pen()
// p1.editable = true
// p1.setStyle({ fill: '#FF4B4B', windingRule: 'evenodd' })
// p1.roundRect(0, 0, 100, 100, 10).arc(50, 50, 50)
// p1.setStyle({ x: 50, y: 50, fill: '#FEB027' })
// p1.arc(0, 0, 20)
// app.tree.add(p1)

// const p2 = new Pen()
// p2.editable = true
// p2.setStyle({
//   fill: {
//     type: 'radial',
//     stops: [
//       { offset: 0, color: '#FF4B4B' },
//       { offset: 0.5, color: '#FEB027' },
//       { offset: 1, color: 'white' },
//     ],
//   },
// })
// p2.roundRect(0, 0, 100, 100, 30)
// p2.setStyle({ y: -5, fill: 'white' })
// p2.moveTo(40, 30)
//   .bezierCurveTo(70, 30, 90, 60, 63, 80) // 三次贝塞尔曲线
//   .quadraticCurveTo(50, 88, 40, 80) // 二次贝塞尔曲线
//   .bezierCurveTo(10, 60, 50, 40, 40, 30) // 三次贝塞尔曲线
// app.tree.add(p2)

const p3 = new Pen()
p3.editable = true
p3.setStyle({ stroke: '#FF4B4B', strokeWidth: 2, x: 20, y: 20 })
p3.moveTo(20, 20)
p3.bezierCurveTo(20, 100, 200, 100, 200, 20) // 三次贝塞尔曲线
// p3.bezierCurveTo(20, 100, 200, 100, 200, 20)
// p3.bezierCurveTo(20, 100, 200, 100, 200, 20)
app.tree.add(p3)

// polygon.on(PointerEvent.CLICK, (e: PointerEvent) => {
//   console.log('pointerdown', e)
// })
// ellipse.on(PointerEvent.CLICK, (e: PointerEvent) => {
//   console.log('pointerdown', e)
//   console.log('pointerdown', e)
// })
