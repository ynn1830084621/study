//提取JSON的数据
let jsonData = {
    id: 42,
    statu: "OK",
    data: [867, 5309]
  };
  
  let { id, statu, data: number } = jsonData;
  
  console.log(id, statu, number);