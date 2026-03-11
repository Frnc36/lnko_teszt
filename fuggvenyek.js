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

export function masodfokuX1(a, b, c) {
  x1 = -b + Math.sqrt(b * b - 4 * a * c);
  x2 = -b - Math.sqrt(b * b - 4 * a * c);
  return { x1: x1, x2: x2 };
}

