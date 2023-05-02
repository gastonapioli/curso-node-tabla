const { crearArchivo } = require("./helpers/multiplicar");

const argv = require("./config/yargs");

/* const [, , arg3 = "base=5"] = process.argv; //aca desestructuro los argumentos de process.argv, el tercero es la constante que envio

const [, base = 5] = arg3.split("="); //split separa elementos por el simbolo igual, oseas que tengo dos argumentos */

console.log(argv);
console.log("base: yargs", argv.b);

/* const base = 3; */

crearArchivo(argv.b, argv.h, argv.l)
  .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
  .catch((err) => console.log(err));
