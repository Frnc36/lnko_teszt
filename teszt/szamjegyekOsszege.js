import { szamjegyekOsszege } from "../fuggvenyek.js";

function szamjegyekOsszegeTeszt() {

  const tesztesetLista = [
    {
      szoveg: "n = 0",
      vart: 0,
      n: 0,
    },

    {
      szoveg: "n = 1",
      vart: 1,
      n: 1,
    },

    {
      szoveg: "n = 5",
      vart: 5,
      n: 5,
    },

    {
      szoveg: "n = 32682",
      vart: 21,
      n: 32682,
    },

    {
      szoveg: "n = -12",
      vart: 0,
      n: -12,
    },
  ];

  for (let index = 0; index < tesztesetLista.length; index++) {
    let eredmeny = szamjegyekOsszege(tesztesetLista[index].n);
    console.assert(
      eredmeny === tesztesetLista[index].vart,
      `n = ${tesztesetLista[index].n}, elvárt: ${tesztesetLista[index].vart}, kapott: ${eredmeny}, ${tesztesetLista[index].szoveg}`,
    );
  }
  console.log("szamjegyekOsszegeTeszt: Minden teszt lefutott");
}

szamjegyekOsszegeTeszt();