### :nth-child(an+b) 概述

:nth-child(an+b) 这个 CSS 伪类首先找到所有当前元素的兄弟元素，然后按照位置先后顺序从1开始排序，选择的结果为CSS伪类:nth-child括号中表达式（an+b）匹配到的元素集合（n=0，1，2，3...）。示例：

0n+3 或简单的 3 匹配第三个元素。
1n+0 或简单的 n 匹配每个元素。（兼容性提醒：在 Android 浏览器 4.3 以下的版本 n 和 1n 的匹配方式不一致。1n 和 1n+0 是一致的，可根据喜好任选其一来使用。）
2n+0 或简单的 2n 匹配位置为 2、4、6、8...的元素（n=0时，2n+0=0，第0个元素不存在，因为是从1开始排序)。你可以使用关键字 even 来替换此表达式。
2n+1 匹配位置为 1、3、5、7...的元素。你可以使用关键字 odd 来替换此表达式。
3n+4 匹配位置为 4、7、10、13...的元素。
a 和 b 都必须为整数，并且元素的第一个子元素的下标为 1。换言之就是，该伪类匹配所有下标在集合 { an + b; n = 0, 1, 2, ...} 中的子元素。另外需要特别注意的是，an 必须写在 b 的前面，不能写成 b+an 的形式。





### CSS 属性选择器

| [[*attribute*\]](https://www.w3school.com.cn/cssref/selector_attribute.asp) | 用于选取带有指定属性的元素。                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [[*attribute*=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value.asp) | 用于选取带有指定属性和值的元素。                             |
| [[*attribute*~=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) | 用于选取属性值中包含指定词汇的元素。                         |
| [[*attribute*\|=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp) | 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。 |
| [[*attribute*^=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_begin.asp) | 匹配属性值以指定值开头的每个元素。                           |
| [[*attribute*$=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_end.asp) | 匹配属性值以指定值结尾的每个元素。                           |
| [[*attribute**=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_contain.asp) | 匹配属性值中包含指定值的每个元素。                           |

## [组合选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#组合选择器)

- [相邻兄弟选择器](https://developer.mozilla.org/zh-CN/docs/CSS/Adjacent_sibling_selectors) `A + B`
- [普通兄弟选择器](https://developer.mozilla.org/zh-CN/docs/CSS/General_sibling_selectors) `A ~ B`
- [子选择器](https://developer.mozilla.org/zh-CN/docs/CSS/Child_selectors) `A > B`
- [后代选择器](https://developer.mozilla.org/zh-CN/docs/CSS/Descendant_selectors) `A B`