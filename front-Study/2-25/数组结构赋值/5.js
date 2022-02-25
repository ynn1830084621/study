function example() {
    return {
      foo: 1,
      bar: 2
    };
  }
  let { foo, bar } = example();
  console.log({foo, bar});