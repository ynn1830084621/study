function testA() {
    console.log('执行第一个测试函数的逻辑');
    testB();
    console.log('再次执行第一个测试函数的逻辑');
  }
  
  function testB() {
    console.log('执行第二个测试函数的逻辑');
  }
  
  testA();