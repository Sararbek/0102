{
  // 1-masala
  let a = 16;
  let b = 3;

  while (a >= b) {
    a -= b;
  }
  console.log(a);
}

{
  //2-masala
  let a = 15,
    b = 4,
    max = 0;
  while (a >= b) {
    a -= b;
    max++;
  }
  console.log(max);
}

{
  //3-masala
  let n = 7,
    k = 2,
    integer = 0;
  while (n >= k) {
    n -= k;
    integer++;
  }
  console.log(`${integer} -butun qism ${n} - qoldiq`);
}

{
  //4-masala
  let n = 9;
  while (n >= 3) {
    n -= 3;
  }
  if (n === 0) {
    console.log("3 ning darajasi");
  } else {
    console.log(`3 ning darajasi emas`);
  }
}

{
  //5-masala
  let n = 32,
    k = 0;
  while (n >= 2) {
    n /= 2;
    k++;
  }
  console.log(k);
}

{
  //6-masala
}

{
  //7-masala
  let n = 6,
    k = 1;
  while (k * k <= n) {
    k++;
  }
  console.log(k);
}

{
  //8-masala
  let n = 6,
    k = 1;
  while ((k + 1) * (k + 1) <= n) {
    k++;
  }
  console.log(k);
}

{
  //9-masala
  let n = 9,
    k = 0,
    power = 1;
  while (power <= n) {
    power *= 3;
    k++;
  }
  console.log(k);
}

{
  //10-masala
  let n = 7,
    k = 0,
    power = 1;

  while (power * 3 <= n) {
    power *= 3;
    k++;
  }
  console.log(k);
}
