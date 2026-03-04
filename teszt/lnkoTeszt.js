import { lnko } from "../fuggvenyek.js";

function lnkoTeszt() {
  /* a többszöröse b-nek */
  let a = 9;
  let b = 3;
  let eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 3,
    `a = ${a}, b = ${b}, elvárt: 0, kapott: ${eredmeny}`,
  ); // csak akkor fogja kiírni az eredmény ha hibát kapunk

  /* a nem töbszörröse b-nek, de az lnko > 1 24,18 */
  a = 24;
  b = 18;
  eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 6,
    `a = ${a}, b = ${b}, elvárt: 6, kapott: ${eredmeny}`,
  );

  /* lnko = 1, de egyik szám sem prím, relatív prímek */
  a = 15;
  b = 22;
  eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 1,
    `a = ${a}, b = ${b}, elvárt: 1, kapott: ${eredmeny}`,
  );

  /* két prím szám */
  a = 2;
  b = 3;
  eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 1,
    `a = ${a}, b = ${b}, elvárt: 1, kapott: ${eredmeny}`,
  );

  /* két azonos szám */
  a = 23;
  b = 23;
  eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 23,
    `a = ${a}, b = ${b}, elvárt: 23, kapott: ${eredmeny}`,
  );

  /* két negatív szám */
  a = -6;
  b = -9;
  eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 3,
    `a = ${a}, b = ${b}, elvárt: 3, kapott: ${eredmeny}`,
  );

  /* egyik pozitív, másik negatív */
  a = -18;
  b = 3;
  eredmeny = lnko(a, b);
  console.assert(
    eredmeny === 3,
    `a = ${a}, b = ${b}, elvárt: 3, kapott: ${eredmeny}`,
  );
}

lnkoTeszt();
