## 浏览器内核

浏览器   内核（渲染引擎）：负责读取网页内容，整理讯息，计算网页的显示方式并显示页面。


| 浏览器 | 内核 | 备注 |
| - | - | - |
| IE | Trident | IE、猎豹安全、360激素浏览器、百度浏览器 |
| firfox | Gecko | 火狐浏览器内核 |
| Safari | Webkit | 苹果浏览器内核 |
| chrome/Opera | Blink | chrome / opera 浏览器内核。Blink 其实是WebKit 的分支 |

微软基于 Google 的 Chromium 开发的新版 Microsoft Edge 浏览器已经正式发布。这显示了 JavaScript 引擎世界正在进行整合。

世界上第一款 JavaScript 引擎是伴随第一个能运行 JavaScript 程序的浏览器出现的，也就是 Netscape Navigator。从那以后，包括微软在内的多家浏览器厂商开始制作它们自己的用来解释和编译 JavaScript 的引擎，当时的市场竞争还是良性的。

有一段时间，Internet Explorer 6 垄断了市场，几乎没有人使用任何其他浏览器。但是 Internet Explorer 不兼容标准，并且实现 JavaScript 的新功能速度很慢，导致开发者一直在这种只具备中等水平引擎的中等浏览器上做设计开发工作。

幸运的是，微软在浏览器大战中的胜利是短暂的。虽然 Netscape Navigator 浏览器失败了，但随后也出现了一些 Internet Explorer 很好的替代品，来帮助改善网络环境。

Mozilla 的 Firefox 是第一个试图淘汰微软公司几乎要被废弃的浏览器的主要竞争对手。与 Firefox 一道的，还有包括使用 WebKit 引擎的 Safari 浏览器（隶属于苹果公司）、先使用 Presto 引擎后使用 Blink 引擎的 Opera 浏览器（隶属于 Opera 公司）、最后是先使用 WebKit 引擎后使用 Blink 引擎的 Chrome 浏览器（隶属于 Google 公司）。

所有这些浏览器引擎不仅负责管理网页的布局，同时还包括一个 JavaScript 引擎、用于解释和编译 JavaScript 代码。在这些 JavaScript 引擎中，最受欢迎的是 V8，V8 不是仅被用在了 Chrome 浏览器中。

由 GitHub 开发和维护的用于创建跨平台桌面程序的 Electron，底层就是由 V8 引擎驱动的。

不仅如此，Node.js 运行时系统也是由 V8 引擎驱动的。这使得 Node.js 可以不断受益于 V8 的开发和改进，并提供出色而快速的服务器体验。由于 V8 是用 C++ 编写的，因此能够将 JavaScript 编译为本地机器代码，而不是实时解释它，这使的 Node.js 在服务器市场中如此快速的占据一定的竞争力。

## 三个主要的浏览器引擎

现在，微软基于 Chromium 开发的新版 Edge 浏览器已经发布 ，包括 Opera 在内的其他浏览器厂商也已经进行了转换。当前市场上只有 3 个主要的浏览器引擎：Mozilla 的 Gecko、Google 的 Blink、还有苹果的的 WebKit（Blink 的近亲）。

等等，Blink 是怎么回事？Blink 是 Google Chrome 浏览器的渲染引擎，V8 是 Blink 内置的 JavaScript 引擎。Chromium 是 Google 公司一个开源浏览器项目，使用 Blink 渲染引擎驱动。Chromium 和 Google Chrome 的关系，可以理解为：Chromium + 集成 Google 产品 = Google Chrome。

译注：可以理解为 Google Chrome 是个商业项目，而 Chromium 是一个中立、无立场的（理论上）的开源项目。

V8 对 DOM（文档对象模型）一无所知，因为它仅用于处理 JavaScript。Blink 内置的布局引擎负责处理网页布局和展示。因为 Node.js 不需要使用 DOM，所以 Node.js 只使用了 V8 引擎，而没有把整个 Blink 引擎都搬过来用。

## 三个主要的 JavaScript 引擎

3 个主要的浏览器引擎下，是 3 个不同的 JavaScript 引擎。也就是说现在市场上只有 3 个主要的 JavaScript 引擎。Chromium 市场份占据 65％，再加上从 Edge 和 Internet Explorer 吸收的大约 15％ 的市场份额，后面还会继续扩大。当前，Web 开发人员正在最流行的浏览器引擎上构建能够发挥最佳性能的网站。但是 Chromium 最后有没有可能重蹈 Internet Explorer 6 的覆辙呢？不过还是希望 Chromium 仍能继续跟进标准的步子，并且随着来自 Firefox 和 Safari 的竞争，相信未来的发展也会更加明朗和积极。希望 Google 不会减慢 Chromium 的开发速度，并在如此高的市场份额下继续保持竞争力。

下面做一个总结：

- [**V8** ](https://www.colabug.com/goto/aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVjhfKEphdmFTY3JpcHRfZW5naW5lKQ==)——开源，由 Google 开发，使用 C++ 编写
- **[SpiderMonkey](https://www.colabug.com/goto/aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU3BpZGVyTW9ua2V5XyhKYXZhU2NyaXB0X2VuZ2luZSk=)** ——第一个 JavaScript 引擎，该引擎过去驱动 Netscape Navigator，如今驱动 Firefox 浏览器。
- **[JavaScriptCore](https://www.colabug.com/goto/aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSmF2YVNjcmlwdENvcmU=)** ——开源，苹果公司为 Safair 浏览器开发的

## Web标准

Web标准是由W3C组织和其他标准化组织指定的一系列标准的合集。W3C(万维网联盟)是国际最著名的标准化组织。

### 为什么需要Web标准

浏览器不同，他们显示页面或者排版就有些许差异。

### Web标准的构成

主要包括 结构（Structure)、表现（Presentation）和行为（Behavior)


| 标准 | 说明 |
| - | - |
| 结构 | 结构用于对**网页元素**进行整理分类，现阶段主要学HTML |
| 表现 | 表现用于设置网页元素的版式、颜色、大小等外观样式，主要指CSS |
| 行为 | 行为是指网页模型的定义及**交互**的编写，现阶段主要学的是JavaScript |

## HTML标签

目标：

+ 能够说出标签的书写规范
+ 能够写出HTML骨架标签
+ 能够写出超链接标签
+ 能够写出图片标签并说出alt和title的区别
+ 能够说出相对路径的三种形式

### 1.HTML语法规范

#### 1.1 基本语法概述

1. HTML标签是**由尖括号包围的关键字**，例如<html>
2. HTML标签通常是成对出现的，例如<html></html> ，我们称为**双标签**。标签对中的第一个标签是开始标签，第二个是结束标签。
3. 有些是单标签

#### 1.2 标签关系

双标签关系可以分为 两类：包含关系和并列关系。

```html
包含
<head>
    <title></title>
</head>

并列
<div></div>
<div></div>
```

### 2.HTML 基本结构标签

#### 2.1 第一个HTML网页

每个网页都会有一个基本的结构标签（也称为骨架标签），页面内容也是在这些基本标签上书写。

HTML页面也成为HTML文档。

### 3.开发工具VSCode

vscode 推荐插件：

Chines Language pack for vscode ,Open in browser   ,JS-CSS-HTML Formatter ,Auto Rename Tag ,css Peek

#### VSCode 工具生成骨架标签新增代码

1. `<!DOCTYPE>`标签
2. lang 语言
3. charset字符集

#### 3.1 文档类型声明标签`<!DOCTYPE>`标签

`<!DOCTYPE>`标签  文档类型声明，作用就是告诉浏览器使用哪种HTML版本来显示网页。这个声明的目的是防止浏览器在渲染文档时，切换到我们称为“[怪异模式(兼容模式)](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)”的渲染模式。“`<!DOCTYPE html>`" 确保浏览器按照最佳的相关规范进行渲染，而不是使用一个不符合规范的渲染模式。

```html
<!DOCTYPE html>
```

**这句话的意思是：当前页面采取的是HTML5版本来显示网页**

**注意：**

1. `<!DOCTYPE>`声明位于文档中的最前面位置，处于html标签之前
2. `<!DOCTYPE>`不是HTML标签，他是文档类型声明标签

#### 3.2 lang 语言种类

用来定义当前文档显示语言

1. en 语言英语
2. zh-CN定义语言为中文

简单来说定义为en就是英文网页，定义为zh-CN就是中文网页。会提示翻译

#### 3.3字符集

字符集（Character set)是多个字符的集合。以便计算机能够识别和存储各种文字。

在<head>标签内可以通过<meta>白哦前的charset属性来规定HTML文档应该使用哪种字符编码。

```html
<meta charset="UTF-8">
```

注意：上面语法是必须要写的代码。否则会乱码。原因后面具体分析。

### 4.HTML 常用标签

#### 标题标签`<h1>-<h6>`

独占一行，又粗又大

#### 段落和换行标签

在网页中，要把文字有条理的显示出来就需要文字分段显示。在HTML中,<p>标签用于定义段落。

```html
<p>
    这是一个段落
</p>
```

**特点：**

1. 文本在一个段落中会根据浏览器窗口的大小自动换行
2. 段落之间保有空隙

换行标签<br/>

单词break的缩写，打断

#### 4.4 文本格式化标签

要设置粗体，斜体或者下划线效果时 就使用文本格式化标签
```html
<strong> 加粗 或者 <b>
<em> 倾斜 <i>
<del> 删除线 <s>
<ins> 下划线 <u>
```
#### 4.5 div标签和span标签

他俩是没有语义的  ，就是一个盒子
div是division 的缩写，表示分割、分区。 span意为跨度，跨距

特点:
1. `<div>` 标签用来布局，但是现在一行智能方一个div 。大盒子
2. `<span>`标签用来布局，一行上可以多个span 。小盒子

#### 4.6 图像标签和路径（重点）
1. 图像标签
在HTML标签中，`<img>`标签用于定义HTML页面中的图像。
```html
<img src="图像URL">
```
2.路径
+ 相对路径和绝对路径
相对路径： 图片相对于HTML页面的位置
绝对路径：是指目录下的绝对位置，直接到达目标位置，通常是从盘符开始的路径。
例如："D:\web\img" 或者完整的网络地址"http://www.github.com/images"

#### 4.7 超链接标签
1. 语法格式
```html
 <a href="跳转目标" target="目标窗口的弹出方式">文本或图像 </a>
```
单词anchor的缩写，意为 ：锚
target 为_blank，新窗口打开，_self 自己窗口打开
2. 分类
+ 外部链接
+ 内部连接
+ 空链接 `<a href="#">`
+ 下载链接（如果href里面地址是一个文件或者压缩包，就会下载这个文件）。
+ 网页元素链接：在网页中的各种网页元素，如文本，图像，表格，音频，视频等都可以添加超链接
+ 锚点链接：当我们点击链接，可以快速定位到页面中的某个位置
  + 在连接文本的href属性中，设置属性值为**#名字**的形式，如`<a href="#two">第二季</a>`
  + 找到目标位置标签，里面添加一个id属性 = 刚才的名字，如：`<h3 id="two">`

### 5.HTML中的注释和特殊字符
特殊字符：` &nbsp;` 等等



### 6.表格标签

#### 6.1 表格的主要作用

主要用于显示、展示数据。

#### 6.2 基本语法

```html
<table>
    <tr>
      <td>单元格内的文字</td>
    </tr>
</table>
```

1. `<table></table>`是用于定义表格的标签
2. `<tr></tr>`标签用于定义表格中的行，必须嵌套在`<table></table>`中
3. `<td></td>`用于定义单元格，必须嵌套在`<tr></tr>`中
4. 字母td值表格数据（table data），及数据单元格的内容

#### 6.3表头单元格标签

一般表头单元格位于表格的第一行或者第一列，表头单元格里面的文本内容加粗居中显示。

`<th>`标签表示HTML表格的表头部分（table head的缩写）

```html
<table>
    <tr>
      <th>姓名</th>
    </tr>
</table>
```

Pink老师总结：

表头单元格也是单元格，常用于表格第一行，突出重要性，表头单元格里面的文字会加粗剧中显示

#### 6.4表格属性(了解)

实际开发中不常用，后面通过css来设置

目的有两个：

1. 记住这些英语单词，后面css会使用
2. 直观感受表格的外观形态

| 属性名      | 属性值            | 描述                                       |
| ----------- | ----------------- | ------------------------------------------ |
| align       | left,center,right | 规定表格相对于周围元素的对齐方式           |
| border      | 1或者 ""          | 规定表格单元是否有边框，默认为""，表示没有 |
| cellpadding | px                | 规定单元边沿与其内容之间的空白，默认1像素  |
| cellspacing | px                | 规定单元格之间的空白，默认2px              |
| width       | px 或者 百分比    | 规定表格的宽度                             |

#### 6.5表格的结构标签

使用场景：因为表格可能很长，为了更好的表示表格的予以，可以将表格分割成表格头部和表格主题两大部分。

在表格中分别用：`<thead>`标签 表格的头部区域，`<tbody>`标签 表格的主体区域。这样就能更清楚的分清表格的结构

#### 6.6 合并单元格

1. 合并单元格的方式

+ 跨行合并：rowspan=“合并单元格的个数"
+ 跨列合并：colspan=”合并单元格的个数“

2. 目标单元格

+ 跨行： 最上侧单元格为目标单元格，写合并代码
+ 跨列：最左侧单元格为目标单元格，写合并代码

3. 合并单元格三部曲

+ 先确定跨行还是跨列
+ 找到目标单元格，写上合并方式 = 合并单元格数量。比如：`<td colspan='2'>`
+ 删除多余单元格

### 7.列表标签

表格是用来显示数据的，那么**列表就是用来布局的**

列表最大的特点就是整齐、整洁、有序，他作为布局会更加自由和方便

根据使用情景不同列表可以分为：无序列表、有序列表和自定义列表。

#### 7.1 无序列表（重点）

`<ul>`标签表示HTML页面中项目的无序列表，一般会以项目符号呈现列表项，而列表项使用`<li>`标签定义

无序列表的基本语法格式如下：

````html
<ul>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
    ...
</ul>
````

1. 无序列表各个列表项之间没有顺序级别之分，是并列的。
2. ul标签中只能放li标签！，直接在ul标签中放入其他标签或者文字的做法是不被允许的
3. li是个容器，可以放任何东西

#### 7.2有序列表

有顺序的列表,按照一定顺序排列

在HTML标签中，`<ol>`标签用于定义有序列表，并且使用li定义列表项

1.有/无序列表会带有自己的样式，在实际使用时，我们会使用css来设置

#### 7.3 自定义列表

自定义列表的使用场景：

自定义列表常用于对属于或名词进行解释和描述，定义列表的列表项之前没有任何符号。

其基本语法：

````html
<dl>
    <dt>名词1</dt>    
    <dd>名词1 解释1</dd>
    <dd>名词1 解释2</dd>
</dl>
````

通常一个dt 对应 多个dd