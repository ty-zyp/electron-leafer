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
} from 'leafer-ui'
import '@leafer-in/editor'

const leafer = new Leafer({
  view: 'app',
})

const text = new Text({
  fill: 'rgb(50,205,121)',
  text: 'Hello World afasdfasdfasdfasdfasdadsasdasdfasdfasdf  dfasdfasdfasdfasdfadsfddddfadfasf  adfasdfasdfasdfasdfasdf',
  draggable: true,
  width: 100,
  height: 100,
  x: 100,
  y: 100,
  fontFamily: 'Arial',
  fontSize: 20,
  fontWeight: 'bold',
  textCase: 'upper',
  textDecoration: 'under',
  letterSpacing: 0.5,
  lineHeight: 30,
  // textWrap: 'none',
  // textOverflow: '...',
  paraIndent: 20,
  // fontStyle: 'italic',
})

leafer.add(text)
