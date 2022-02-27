//then入参只能是函数，其他不处理
Promise.resolve(1)
  .then(Promise.resolve(2))
  .then(3)
  .then()
  .then(console.log) //1