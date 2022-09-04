var name = 'ynn'
var me = {
  name: 'hgf',
  // 声明位置
  hello: () => {
      console.log(this.name)
  }
}

// 调用位置
me.hello() // ynn