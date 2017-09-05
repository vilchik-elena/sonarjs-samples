function foo(condition) {
  let x;

  if (condition) {
    const x = "Hi, Amsterdam!";
    foo(x);
  }
}
