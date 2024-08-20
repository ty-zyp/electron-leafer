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

// Text.setEditConfig({
//   editSize: 'scale',
// })

// Text.setEditConfig(function (text: Text) {
//   return {
//     editSize: text.get('width') ? 'size' : 'scale',
//   }
// })

const app = new App({
  view: 'app',
  editor: {
    circle: {
      width: 16,
      height: 16,
      // pointType: 'button',
      // cursor: 'rotate',
      event: {
        tap: function () {
          alert('独立旋转控制点样式')
        },
      },
    },
    middlePoint: {},
    // buttonsDirection: 'top',
    // keyEvent: false,
    // stroke: 'blue',s
    // strokeWidth: 2,
    // pointSize: 20,
    // pointRadius: 3,
    // editSize: 'font-size',
    // point: [
    //   {},
    //   {
    //     pointType: 'button',
    //     event: {
    //       tap: function () {
    //         alert('我是顶部右侧的点')
    //       },
    //     },
    //   }, // 变为自定义按钮
    //   { pointType: 'rotate' }, // 变为旋转按钮
    //   {},
    // ],
    // middlePoint: {
    //   // pointType: 'button',
    //   // cursor: 'pointer',
    //   event: {
    //     tap: function () {
    //       alert('我是边框中心点')
    //     },
    //   },
    // },
    // rect: {
    //   // 选中后的样式
    //   fill: 'blue',
    //   stroke: 'black',
    //   dashPattern: [5, 5],
    // },
    // area: {
    //   fill: 'white',
    // },
    // buttonsDirection: 'bottom',
    // mask: 'gray',
    // hideOnMove: true,
    // moveCursor: 'grab',
    // resizeCursor: {
    //   url: `
    // <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    //   <g transform="rotate({{rotation}},12,12)">
    //     <path
    //       fill-rule="evenodd"
    //       d="M3 11.4L7.5 8.0V10.4H16.5V8.0L21 11.4L16.5 14.9V12.4H7.5V14.9L3 11.4Z"
    //       fill="black"
    //     />
    //   </g>
    // </svg>`, // svg字符串, {{rotation}}为旋转变量
    //   x: 12, // x轴旋转中心点
    //   y: 12, // y轴旋转中心点
    // },
    // rotateCursor: {
    //   url: `
    // <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    //   <g transform="rotate(135,12,12),rotate({{rotation}},12,12)">
    //     <path
    //       fill-rule="evenodd"
    //       d="M17 3L20.4 7.5H17.9C17.7 13.1 13.1 17.7 7.5 17.9V20.4L3 17L7.5 13.5V15.9C12.0 15.7 15.7 12.0 15.9 7.5H13.5L17 3Z"
    //       fill="black"
    //     />
    //   </g>
    // </svg>`, // svg字符串， {{rotation}}为旋转变量
    //   x: 12, // x轴旋转中心点
    //   y: 12, // y轴旋转中心点
    // },
    // skewCursor: {
    //   url: `
    // <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    //   <g transform="rotate(90,12,12),rotate({{rotation}},12,12)">
    //     <path
    //       fill-rule="evenodd"
    //       d="M17 10.4L21 10.4L15.5 6V8.4H6V10.4H15.5H17ZM8.5 14.4H7L3 14.4L8.5 18.9V16.4H19V14.4H8.5Z"
    //       fill="black"
    //     />
    //   </g>
    // </svg>`, // svg字符串，{{rotation}}为旋转变量
    //   x: 12, // x轴旋转中心点
    //   y: 12, // y轴旋转中心点
    // },
    // buttonsFixed: true,
    // around: 'center',
    // lockRatio: true,
    // rotateGap: 45,
    // selector: false,
    hover: true,
    moveable: true,
    // flipable: false,
  },
})

const rect = Rect.one(
  { editable: true, fill: 'rgb(50,205,121)', cornerRadius: 0 },
  100,
  100
)
const rect1 = Rect.one(
  {
    editable: true,
    fill: 'rgb(255,255,0)',
    cornerRadius: 0,
    // locked: true,
    widthRange: { min: 100, max: 300 },
    heightRange: { min: 100, max: 300 },
  },
  200,
  200,
  150,
  150
)
app.tree.add(rect)
app.tree.add(rect1)
app.editor.target = rect1

window.app = app
console.log(app)

// rect1.scaleOf({ x: 0, y: 0 }, 2, 1, true)
console.log(rect1.scale, rect1.width, rect1.height, rect1.scaleX, rect1.scaleY)

rect.on(PointerEvent.CLICK, (e) => {
  const tem = e.current
  console.log(
    tem.boxBounds,
    tem.renderBounds,
    tem.worldBoxBounds,
    tem.worldRenderBounds
  )
})
rect1.on(PointerEvent.CLICK, (e) => {
  const tem = e.current
  console.log(
    tem.boxBounds,
    tem.renderBounds,
    tem.worldBoxBounds,
    tem.worldRenderBounds
  )
})
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
