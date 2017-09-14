












function foo(x) {
  const a = x;
  if (x === 0) {
    x++;

    if (x === a) {
      return 42;
    }
  }
}

