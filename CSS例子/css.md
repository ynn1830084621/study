## css知识点
# 1.复合选择器
后代选择器： 子元素，  .nav a
子代选择器： 最近一级元素，  .nav>p
并集选择器： .nav, .a
链接伪类选择器：不同状态的链接，  a:hover  
:focus选择器： 表单选择光标时的状态  input:focus

# 2.元素显示转换
转换成块元素：  display:block
转换成行内元素：  display:inline
转换成行内块元素：  display:inline-block

# 3.css的三大特性
层叠性：样式冲突，就近原则。
继承性：子元素可以继承父元素的样式(text-, font-, line-, color)文字相关样式
优先级：根据权重 
(继承/* ：0000; 元素选择器：0001; 类选择器/伪类选择器：0010; id选择器: 0100; 行内样式：1000; !important: 无穷大)