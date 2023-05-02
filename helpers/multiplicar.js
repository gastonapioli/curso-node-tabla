const fs = require("fs");

const crearArchivo = async (base = 5, hasta = 10, listar = false) => {
  try {
    let salida = "";

    for (let i = 0; i < hasta; i++) {
      salida += `${base} X ${i} = ${i * base}\n`;
    }

    if (listar) {
      console.log("======================");
      console.log(`======= Tabla del ${base} =======`);
      console.log("======================");

      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida, (err) => {
      if (err) throw err;
    });

    return `tabla-${base}.txt creado`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
