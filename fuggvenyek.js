export function lnko(a, b) {
  a = Math.abs(a); // nem kell a let mert paraméterben ott van
  b = Math.abs(b);

  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}

export function szamjegyekOsszege(n) {
  let z = 0;
  while (n > 0) {
    let c = n % 10;
    z = z + c;
    n = Math.floor(n / 10);
  }
  return z;
}

export function masodfoku(a, b, c) {
  const D = b * b - 4 * a * c;
  if (D > 0) {
    let x1 = ((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)).toFixed(2);
    let x2 = ((-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)).toFixed(2);
   /*  console.log(x1);
    console.log(x2); */
    return { x1: x1, x2: x2 };
  } else if (D === 0) {
    let x = (-b / 2) * a;
   /*  console.log(x); */
    return { x1: x, x2: x };
  } else {
    return { x1: "Nincs valós megoldása", x2: "Nincs valós megoldása" };
  }
}
