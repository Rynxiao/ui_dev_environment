## storybook

storybook的界面清新脱俗，至少个人认为还是比较好看的，像下面这样：

![storybook](./snapshots/apperance.png)

同时，storybook可以更换主题，具体可以戳[这里](https://storybook.js.org/docs/configurations/theming/)，更换的只是配色系统，结构方面改动的话可能有点困难。

storybook 可以支持多种语言，包括`react`,`vue`,`angular`...等主流前端库。

storybook中的一个重要概念就是`story`，翻译过来就是故事，不过可以通俗的理解为一个组件的一种状态。当然这个状态是你自己添加的，如果添加的故事越多，同时也就表明了你编写的组件复杂度就很高了，这时候你就可以考虑是否要拆分组件来使得组件的功能变得单一纯粹了，这样组件维护的成本才会变少，同时可用性也会更加高。

### 简单的入门

下面以一个`React`小项目来练手，如果对`Vue`以及`Angular`感兴趣的童鞋，可以去[官网](https://storybook.js.org/docs/basics/introduction/)了解一下，官方网站上有大量的例子以及新手教程。

#### Step 1: 创建一个项目名为`stroybook`, 同时创建`package.json`文件

```npm
mkdir stroybook
cd storybook
yarn init
```

填写你要初始化的信息，下一步。

#### Step2: 安装依赖

```npm
yarn add @storybook/react react react-dom babel-loader @babel/core --dev
```

#### Step3: 添加npm脚本

```json
{
"scripts": {
    "storybook": "start-storybook -p 6006",
    "build-storybook": "build-storybook",
    "serve": "yarn build-storybook && npx http-server ./storybook-static"
  }
}
```

- `storybook`: 运行这个脚本会起一个本地服务器，监听在6006端口
- `build-storybook`: 通过`webpack`进行打包，生成静态文件
- `serve`: 使用node服务运行静态文件

#### Step4: 创建配置文件，让storybook能够找到stories

```js
import { configure } from '@storybook/react';

// 手动添加所有stories
function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

/**
* 或者匹配指定文件夹下的所有stories
*

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

*/

configure(loadStories, module);
```

#### Step5: 编写组件故事

```js
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));
```

#### Step6: Run

```npm
yarn storybook

// open browser
localhost:6006
```
你就可以看到文章上面的界面了。

### 组件测试

storybook在UI测试方面也提供了多种角度的测试方式：

- 内容结构测试：内容结构测试主要关注点在组件中的内容是否存在，比如内容是否包含`hello world`等字段，是否存在一个`button`等等
- 交互测试：交互测试主要是测试用户的点击、输入事件，会对结果造成的一个影响，比如点击了一个按钮之后，是不是会跳转到一个新的页面
- 视觉(样式)测试: 主要比较的是变更发生前和发生之后的`images`的变化，可能是像素级的
- 手动测试

#### 结构测试

在storybook中使用[jest's snapshot testing](https://facebook.github.io/jest/blog/2016/07/27/jest-14.html)作为组件的结构测试，使用的原理为：

比较变更之前的`html`结构和变更之后的`html`结构，如果不同，要么是现在的变更影响的，这时候我们只需要更新为最新的结构就可以了，反之就是出现了未知的错误造成的，就需要进行排查了。

使用storybook的结构测试也很简单，只需要两步配置即可：

- 安装依赖

```npm
yarn add --dev @storybook/addon-storyshots
```

- 在测试文件中初始化，例如`storyshots.test.js`

```js
import initStoryshots from '@storybook/addon-storyshots';

initStoryshots({ /* configuration options */ });
```

然后运行`yarn test`即可。

#### 交互测试

通常使用[Enzyme](https://github.com/airbnb/enzyme)来测试用户的输入以及点击事件。同时storybook也继承了相关的插件[Specs Addon](https://github.com/mthuret/storybook-addon-specifications)

这里就不多做演示了，详情可以戳上面的链接。

#### 自动化的视觉测试

视觉测试主要的优点就是一目了然，如果视觉测试能够做得非常容易，那么甚至可以取代一些比较脆弱的测试，比如判断是否有哪些`css`声明，`html`标签等等，如果视觉上看起来和变更前后保持一致，这些测试我们都是可以不关注的。

然而视觉测试最大的难点就是人类的对像素的感知度不同，机器相对人眼来说，可以识别的像素辨识度会高出许多，很多看上去相同的页面其实是发生了变化，但是人的肉眼可能看不出来而已。

关于视觉测试，有一些比较知名的库可以进行参考：

- [Applitools](https://applitools.com/storybook)
- [Chromatic](https://www.chromaticqa.com/)
- [Happo](https://happo.io/)
- [Loki](https://loki.js.org/)
- [Percy](https://docs.percy.io/docs/storybook-for-react)
- [Screener](https://screener.io/v2/docs)
- [StoryShots](https://github.com/storybookjs/storybook/tree/master/addons/storyshots) with its [seamless integration](https://github.com/storybookjs/storybook/tree/master/addons/storyshots#configure-storyshots-for-image-snapshots) with [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot)

更多请参看[这里](https://storybook.js.org/docs/testing/react-ui-testing/)

### 强大的插件

storybook集成了许多优秀的插件，这些插件都是可以自由安装和卸载的，下面主要介绍几款实用的插件：

**注1**：storybook的绝大部分插件需要首先安装依赖，然后在`.storybook/addons`中进行注册，最后使用`.storybook/config`进行参数配置。当然也有例外，可以直接在`config`中进行引用，具体使用参看文档。

**注2**：storybook提供了很多有用的插件，这里就不一一列举的了，可以自己去[Addons](https://storybook.js.org/addons/)了解

- [console](https://github.com/storybookjs/storybook-addon-console)

通常我们使用`command + alt + I`(Mac)以及`F12`(Windows)打开`chrome`的控制台来查看打印的日志，而这个插件可以使我们不需要这么做，直接在`Actions`面板中就可以查看打印的日志，并且可以筛选出自己关心的日志，可以分为以下几步

```js
// install dependence
yarn add --dev @storybook/addon-console

// .storybook/config.js
import { setConsoleOptions } from '@storybook/addon-console';

setConsoleOptions({
  panelExclude: [],
});

// or write in story singly
// wrap your stories with specified addon options.
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

storiesOf('withConsole', module)
 .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
 .add('with Log', () => <Button onClick={() => console.log('Data:', 1, 3, 4)}>Log Button</Button>)
 .add('with Warning', () => <Button onClick={() => console.warn('Data:', 1, 3, 4)}>Warn Button</Button>)
 .add('with Error', () => <Button onClick={() => console.error('Test Error')}>Error Button</Button>)
 .add('with Uncatched Error', () =>
   <Button onClick={() => console.log('Data:', T.buu.foo)}>Throw Button</Button>
 )
 // Action Logger Panel:
 // withConsole/with Log: ["Data:", 1, 3, 4]
 // withConsole/with Warning warn: ["Data:", 1, 3, 4]
 // withConsole/with Error error: ["Test Error"]
 // withConsole/with Uncatched Error error: ["Uncaught TypeError: Cannot read property 'foo' of undefined", "http://localhost:9009/static/preview.bundle.js", 51180, 42, Object]
```

![console](./snapshots/console.png)

- [source](https://github.com/storybookjs/storybook/tree/master/addons/storysource)

source插件主要会在工具栏面板中展示出我们当前所在的`story`源码

![source](./snapshots/source.png)

具体配置如下：

```npm
yarn add @storybook/addon-storysource --dev
```

然后在`addon`中注册

```js
import '@storybook/addon-storysource/register';
```

最后在`.storybook`中添加`webpack.config.js`，给每个`story`添加`decorator`

```js
module.exports = function({ config }) {
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  return config;
};
```

- [knobs](https://github.com/storybookjs/storybook/tree/master/addons/knobs)

安装了knobs插件之后，可以在控制面板中编辑`React`组件中的`props`，同时knobs插件也会允许修改在story中编写的临时变量。

```npm
yarn add @storybook/addon-knobs --dev
```

```js
import '@storybook/addon-knobs/register';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Storybook Knobs', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);

// Knobs for React props
stories.add('with a button', () => (
  <button disabled={boolean('Disabled', false)} >
    {text('Label', 'Hello Storybook')}
  </button>
));
```

![knobs](./snapshots/knobs.png)

- [notes](https://github.com/storybookjs/storybook/tree/master/addons/notes)
- [backgrounds](https://github.com/storybookjs/storybook/tree/master/addons/backgrounds)
- [viewport](https://github.com/storybookjs/storybook/tree/master/addons/viewport)
- [spec](https://github.com/mthuret/storybook-addon-specifications)
- [react-live-edit](https://github.com/vertexbz/storybook-addon-react-live-edit)

### 个人观点

storybook作为一个组件开发工具来说，整体上手难度以及接入到已有项目中的成本并不是特别高。

同时对组件的预览、文档生成、测试以及功能编辑等等都提供了很好的支持，所以对于想类似于开发公共组件库的团队来说storybook是一个比较好的选择。
