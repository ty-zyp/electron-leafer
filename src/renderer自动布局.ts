import { Leafer, Rect, Group, PointerEvent, Debug, App } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'

const leafer = new Leafer({ view: 'app' })

const red = new Rect({ fill: '#FF4B4B', width: 20, height: 20 })
const yellow = new Rect({ fill: '#FEB027', width: 20, height: 40 })
const green = new Rect({ fill: '#79CB4D', width: 20, height: 30 })

const flow = new Flow({
  children: [red, yellow, green],
  fill: '#676',
  x: 100,
  y: 100,
  width: 100,
  height: 100,
})

leafer.add(flow)

// const leafer = new Leafer({
//   view: 'app',
//   usePartRender: false
// })

// Debug.showRepaint = true

// const rect1 = new Rect({ x: 10, y: 10, fill: '#32cd79', draggable: true })
// const rect2 = new Rect({ x: 10, y: 10, fill: '#42cd89', draggable: true })

// leafer.add(rect1)
// leafer.add(rect2)

// const rect = new Rect({
//   x: 100,
//   y: 100,
//   width: 200,
//   height: 200,
//   fill: '#32cd79', // 背景色
//   stroke: 'black', // 边框
//   strokeWidth: 2, // 边框粗细
//   draggable: true,
// })

// leafer.add(rect)

// function onEnter(e: PointerEvent) {
//   ;(e.current as Rect).fill = '#42dd89'
// }

// function onLeave(e: PointerEvent) {
//   ;(e.current as Rect).fill = '#32cd79'
// }

// rect.on(PointerEvent.ENTER, onEnter)
// rect.on(PointerEvent.LEAVE, onLeave)

// rect.on(PointerEvent.CLICK, () => {
//   alert('clicked')
// })

// const group = new Group()

// leafer.add(group)

// const json = {
//   x: 20,
//   y: 20,
//   children: [
//     {
//       tag: 'Rect',
//       x: 10,
//       y: 10,
//       width: 100,
//       height: 100,
//       fill: '#32cd79',
//       draggable: true,
//     },
//     {
//       tag: 'Rect',
//       x: 30,
//       y: 30,
//       width: 100,
//       height: 100,
//       fill: '#32cd79',
//       draggable: true,
//     },
//   ],
// }

// group.set(json)

// console.log('leafer', leafer)
// const rect = new Rect({
//   x: 10,
//   y: 10,
//   width: 100,
//   height: 100,
//   fill: '#32cd79',
//   // stroke: 'black',
//   // strokeWidth: 4,
//   draggable: true,
// })
// leafer.add(rect)
// const canvas = leafer.canvas.view
// const context = leafer.canvas.context

// console.log('canvas', canvas) // HTMLCanvasElement
// console.log('2d context', context) // CanvasRenderingContext2D

// const json = {
//   x: 20,
//   y: 20,
//   children: [
//     {
//       tag: 'Rect',
//       x: 100,
//       y: 100,
//       width: 100,
//       height: 100,
//       fill: '#32cd79',
//       stroke: 'red',
//       draggable: true,
//     },
//     {
//       tag: 'Rect',
//       x: 200,
//       y: 200,
//       width: 100,
//       height: 100,
//       fill: '#32cd79',
//       stroke: 'black',
//       draggable: true,
//     },
//   ],
// }
// const group = new Group(json)

// leafer.add(group)

export function fnB() {}
export function fnC() {}
