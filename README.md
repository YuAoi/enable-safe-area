enable-safe-area
========================

根据“能力嗅探”检测当前是否是刘海屏，并提供适配工具。

## usage

在 npm 安装

```bash
npm install --save enable-safe-area
```

在 html 设置 viewport-fit=cover

```html
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, viewport-fit=cover">
```

在入口引入嗅探脚本
```js
import 'enable-safe-area';
```

样式适配支持两种方式

less
```less
@import "~enable-safe-area/enable-safe-area";

.selector {
  .safe-area-value(padding-bottom; bottom; 5PX);
}
```

sass
```scss
@import "~enable-safe-area/enable-safe-area";

.o-number-keyboard {
  @include safe-area-value(padding-bottom, bottom, 5PX);
}
```

最终效果

```html
<html enable-safe-area data-dpr="1" style="font-size: 37.5px;">
```

```css
[enable-safe-area] .selector[data-v-2518f88f] {
  padding-bottom: calc(constant(safe-area-inset-bottom) + 5PX);
  padding-bottom: calc(env(safe-area-inset-bottom) + 5PX);
}
[enable-safe-area][data-dpr="1"] .selector[data-v-2518f88f] {
  padding-bottom: calc(constant(safe-area-inset-bottom) + 5PX);
  padding-bottom: calc(env(safe-area-inset-bottom) + 5PX);
}
[enable-safe-area][data-dpr="2"] .selector[data-v-2518f88f] {
  padding-bottom: calc((constant(safe-area-inset-bottom) * 2) + 5PX);
  padding-bottom: calc((env(safe-area-inset-bottom) * 2) + 5PX);
}
[enable-safe-area][data-dpr="3"] .selector[data-v-2518f88f] {
  padding-bottom: calc((constant(safe-area-inset-bottom) * 3) + 5PX);
  padding-bottom: calc((env(safe-area-inset-bottom) * 3) + 5PX);
}
```
