var name = 'BigBear'
var me = {
  name: 'xiuyan',
  // 声明位置
  hello: () => {
      console.log(this.name)
  }
}

// 调用位置
me.hello() 