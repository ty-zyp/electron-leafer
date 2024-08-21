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
  Box,
  Frame,
  ImageEvent,
  Canvas,
  UI,
  registerUI,
} from 'leafer-ui'
import '@leafer-in/editor'

// @registerUI() // 1. 注册元素
class Custom extends Rect {
  public get __tag() {
    return 'Custom'
  } // 2. 定义全局唯一的 tag 名称
}
Custom.registerUI() // 1. 注册元素

const leafer = new Leafer({
  view: 'app',
})
const custom = new Custom({
  x: 0,
  y: 0,
  width: 100,
  height: 200,
  fill: 'blue',
  draggable: true,
})

leafer.add(custom)

const json = custom.toJSON()
console.log(json)
console.log(JSON.stringify(json))

json.y = 300
leafer.add(UI.one(json))
