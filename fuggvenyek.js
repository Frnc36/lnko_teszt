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
