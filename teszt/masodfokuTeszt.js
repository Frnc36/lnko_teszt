import { masodfoku } from "../fuggvenyek.js";

function Teszteset() {
  const tesztesetLista = [
    {
      eset: "a = 10, b = 30, c = 20",
      a: 10,
      b: 30,
      c: 20,
      x1: -1,
      x2: -2,
    },
    {
      eset: "a = 4, b = 5, c = 6",
      a: 4,
      b: 5,
      c: 6,
      x1: "Nincs valós megoldása",
      x2: "Nincs valós megoldása",
    },
    {
      eset: "a = 1, b = -1, c = -1",
      a: 1,
      b: -1,
      c: -1,
      x1: 1.62,
      x2: -0.62,
    },
    {
      eset: "a = 1, b = 1, c = -6",
      a: 1,
      b: 1,
      c: -6,
      x1: 2,
      x2: -3,
    },
    {
      eset: "a = 1, b = 4, c = 4",
      a: 1,
      b: 4,
      c: 4,
      x1: -2,
      x2: -2,
    },
    {
      eset: "a = 6, b = 3, c = 2",
      a: 6,
      b: 3,
      c: 2,
      x1: "Nincs valós megoldása",
      x2: "Nincs valós megoldása",
    },
  ];

  for (let index = 0; index < tesztesetLista.length; index++) {
    let eredmeny = masodfoku(tesztesetLista[index].a, tesztesetLista[index].b,tesztesetLista[index].c);
    console.log(eredmeny)
    console.assert(
      eredmeny.x1 == tesztesetLista[index].x1 && eredmeny.x2 == tesztesetLista[index].x2, /* JSON.stringify(eredmeny) == JSON.stringify(tesztesetLista[index]) && JSON.stringify(eredmeny.x2) == JSON.stringify(tesztesetLista[index].x2), */
      `a = ${tesztesetLista[index].a}, b = ${tesztesetLista[index].b}, c = ${tesztesetLista[index].c}, vart: ${tesztesetLista[index].x1}, ${tesztesetLista[index].x2}, eset: ${eredmeny}, ${tesztesetLista[index].eset}`,
    );

  }
  console.log("Minden teszt lefutott");
}

Teszteset();
