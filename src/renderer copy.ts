/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
import { Leafer, Rect, UI, Group } from 'leafer-ui'

// const leafer = new Leafer({ view: window })
const leafer = new Leafer({ view: 'app' })

// const rect = new Rect({
//   x: 100,
//   y: 100,
//   width: 200,
//   height: 200,
//   fill: '#32cd79', // 背景色
// })
const rect1 = Rect.one({ fill: '#32cd79' }, 10, 10, 50, 50)
const rect = UI.one({
  tag: 'Rect',
  x: 100,
  y: 100,
  width: 200,
  height: 200,
  fill: 'yellow', // 背景色
})

const json = {
  x: 20,
  y: 20,
  children: [
    {
      tag: 'Rect',
      x: 500,
      y: 100,
      width: 200,
      height: 200,
      fill: '#32cd79',
      draggable: true,
    },
    {
      tag: 'Rect',
      x: 500,
      y: 400,
      width: 200,
      height: 200,
      fill: '#32cd79',
      draggable: true,
    },
  ],
}
const group = new Group(json)
leafer.add(group)
leafer.add(rect)
leafer.add(rect1)

console.log(leafer.toJSON())
