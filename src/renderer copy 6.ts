import { Leafer, Rect, Path } from 'leafer-ui'
import '@leafer-in/state'

const leafer = new Leafer({ view: 'app' })

// const rect = new Rect({
//   width: 100,
//   height: 100,
//   fill: 'rgba(50,205,121, 0.7)',
//   cornerRadius: 30,
//   hoverStyle: { fill: 'rgba(50,205,121, 0.2)' },
//   pressStyle: { fill: 'rgba(50,205,121, 1)' },
//   cursor: 'pointer',
// })
const rect = new Rect({
  width: 100,
  height: 100,
  stroke: 'black',
})

// const path = new Path({
//   path: 'M 0 0 L 100 100 L 0 100 Z',
//   stroke: 'black',
// })
const path = new Path({
  x: 200,
  y: 300,
  path: 'M 0 0 L 100 100 L 0 100 Z',
  stroke: 'black',
})

// leafer.add(rect)
leafer.add(path)

export function fnB() {}
export function fnC() {}
