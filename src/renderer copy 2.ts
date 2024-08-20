import { Leafer, Rect, UI, Group, PointerEvent } from 'leafer-ui'

// const leafer = new Leafer({ view: window })
const leafer = new Leafer({ view: 'app' })

const rect1 = new Rect({
  x: 150,
  y: 150,
  width: 100,
  height: 100,
  // fill: 'blue',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true,
  // event: {
  //   // [PointerEvent.ENTER]: (e: PointerEvent) => {
  //   //   e.current.fill = 'gray'
  //   //   e.current.stroke = 'black'
  //   // },
  //   // [PointerEvent.LEAVE]: (e: PointerEvent) => {
  //   //   e.current.fill = 'blue'
  //   //   e.current.stroke = 'yellow'
  //   // },
  //   'pointer.enter': (e: PointerEvent) => {
  //     e.current.fill = 'gray'
  //     e.current.stroke = 'black'
  //   },
  //   'pointer.leave': (e: PointerEvent) => {
  //     e.current.fill = 'blue'
  //     e.current.stroke = 'yellow'
  //   },
  // },
})
const rect2 = new Rect({
  x: 10,
  y: 10,
  width: 100,
  height: 100,
  fill: 'blue',
  stroke: 'black',
  strokeWidth: 4,
  draggable: true,
})

leafer.add(rect1)
leafer.add(rect2)

function onEnter(e: PointerEvent) {
  ;(e.current as Rect).fill = 'gray'
  ;(e.current as Rect).stroke = 'black'
}
function onLeave(e: PointerEvent) {
  ;(e.current as Rect).fill = 'blue'
  ;(e.current as Rect).stroke = 'yellow'
}

rect1.on(PointerEvent.ENTER, onEnter)
rect1.on(PointerEvent.LEAVE, onLeave)

export function fnB() {
  // rect.stroke = 'green'
  // rect.strokeWidth = 8

  // rect.set({
  //   stroke: 'yellow',
  //   strokeWidth: 10,
  // })

  // rect.reset()
  // rect.reset({
  //   stroke: 'red',
  //   strokeWidth: 4,
  // })

  rect1.off(PointerEvent.ENTER, onEnter)
  rect1.off(PointerEvent.LEAVE, onLeave)
}
export function fnC() {
  rect1.on(PointerEvent.ENTER, onEnter)
  rect1.on(PointerEvent.LEAVE, onLeave)
}
rect1.emit('pointer.enter', { current: rect1 })
