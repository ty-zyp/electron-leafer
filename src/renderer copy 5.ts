import { Leafer, Rect } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'

const leafer = new Leafer({ view: 'app' })

const red = new Rect({ fill: '#FF4B4B', width: 20, height: 20 })
const yellow = new Rect({ fill: '#FEB027', width: 20, height: 40 })
const green = new Rect({ fill: '#79CB4D', width: 20, height: 30 })

const flow = new Flow({
  children: [red, yellow, green],
  fill: '#676',
  width: 100,
  height: 100,
})

leafer.add(flow)

export function fnB() {}
export function fnC() {}
