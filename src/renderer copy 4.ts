import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件

const app = new App({
  view: 'app',
  editor: {}, // 会自动创建 editor实例、tree层、sky层
})

app.tree.add(
  Rect.one(
    { editable: false, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] },
    100,
    100
  )
)
app.tree.add(
  Rect.one(
    { editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] },
    300,
    100
  )
)

export function fnB() {}
export function fnC() {}
