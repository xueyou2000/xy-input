| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-input.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-input.svg?style=flat-square)

[![xy-input](https://nodei.co/npm/xy-input.png)](https://npmjs.org/package/xy-input)

# xy-input

输入框, 文本域组件

## 安装

```bash
# yarn
yarn add xy-input
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { Input, InputGroup, TextArea } from "xy-input";
ReactDOM.render(<Input />, container);
```

## API

### 通用属性

| 属性               | 说明               | 类型                                                                 | 默认值 |
| ------------------ | ------------------ | -------------------------------------------------------------------- | ------ |
| disabled           | 是否禁用           | boolean                                                              | false  |
| value              | 输入框值           | string                                                               | 无     |
| defaultValue       | 输入框默认值       | string                                                               | 无     |
| placeholder        | 占位符文本         | string                                                               | 无     |
| autoFocus          | 自动焦点           | boolean                                                              | 无     |
| onFocus            | 输入框焦点事件     | (e: React.FocusEvent<HTMLInputElement>) => void                      | 无     |
| onBlur             | 输入框失去焦点事件 | (e: React.FocusEvent<HTMLInputElement>) => void                      | 无     |
| onKeyDown          | 键盘事件           | (e: React.KeyboardEvent<HTMLInputElement>) => void                   | 无     |
| onChange           | 输入框 change 事件 | (value: string, event?: React.ChangeEvent<HTMLInputElement>) => void | 无     |
| onCompositionStart | 开始输入中文       | (e: React.CompositionEvent<HTMLInputElement>) => void                | 无     |
| onCompositionEnd   | 输入中文完毕       | (e: React.CompositionEvent<HTMLInputElement>) => void                | 无     |

### Input

| 属性        | 说明             | 类型              | 默认值 |
| ----------- | ---------------- | ----------------- | ------ |
| type        | 输入框类型       | "text"/"password" | 无     |
| clearable   | 是否显示清除     | "text"/"password" | 无     |
| onClean     | 清除按钮点击事件 | Function          | 无     |
| addonBefore | 前置标签         | React.ReactNode   | 无     |
| addonAfter  | 后置标签         | React.ReactNode   | 无     |
| prefix      | 前置图标         | React.ReactNode   | 无     |
| suffix      | 后置图标         | React.ReactNode   | 无     |

### InputGroup

| 属性    | 说明         | 类型    | 默认值 |
| ------- | ------------ | ------- | ------ |
| compact | 是否紧凑模式 | boolean | 无     |

### TextArea

| 属性     | 说明             | 类型                 | 默认值 |
| -------- | ---------------- | -------------------- | ------ |
| autosize | 是否自动调整尺寸 | boolean/TextAreaSize | 无     |

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-input is released under the MIT license.
