import { Leafer, Rect, RenderEvent } from 'leafer-ui'

const leafer = new Leafer({ view: 'app' })

const rect = new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true })

leafer.add(rect)

leafer.on(RenderEvent.BEFORE, function () {
  console.log('渲染前')
  // render before (Layout has ended)
})
leafer.on(RenderEvent.RENDER, function () {
  console.log('渲染中')
  // render before (Layout has ended)
})
leafer.on(RenderEvent.AFTER, function () {
  console.log('渲染后')
  // render before (Layout has ended)
})

export function fnB() {}
export function fnC() {}
