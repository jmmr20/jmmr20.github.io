/* eslint-disable no-unused-vars */
import { writeFile, appendFile, open, readFile } from "fs/promises";


// Para que funcione pasarle el array como parametro, por ejemplo escribirDatos(letraA); 
// y ejecutarlo con node escribirDatos.js

let str = "";
async function escribirDatos(array) {
  array.map((l, index) => {
    let explain = "";
    let pie = "";
    if (l.explain.length > 1) {
      //console.log(`En el ${index} hay ${l.explain.length} explains`);
      l.explain.map((e) => {
        explain = explain + `"${e}", `;
      });
    } else {
      //console.log(`En el ${index} hay solo 1 explains`);
      explain = explain + `"${l.explain}"`;
    }

    if (l.pie.length > 1) {
      //console.log(`En el ${index} hay ${l.pie.length} pies`);
      l.pie.map((p) => {
        pie = pie + `"${p}", `;
      });
    } else {
      //console.log(`En el ${index} hay solo 1 pies ${l.word}`);
      pie = pie + `"${l.pie}"`;
    }

    str =
      str +
      `{id: ${index}, word: "${l.word}", explain: [${explain}], pie: [${pie}], img: "${l.img}"},`;
  });
  //console.log(str);
  appendToFile("prueba.txt", str);
  console.log("Archivo escrito y terminado");
}

async function appendToFile(fileName, data) {
  try {
    await appendFile(fileName, data, { flag: "a" });
    console.log(`Appended data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to append the file: {error.message}`);
  }
}

//escribirDatos(letraH)




async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Wrote data to ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to write the file: ${error.message}`);
  }
}

async function openFile(fileName, data) {
  try {
    const file = await open(fileName, "w");
    await file.write(data);
    console.log(`Opened file ${fileName}`);
  } catch (error) {
    console.error(`Got an error trying to open the file: {error.message}`);
  }
}

async function readThisFile(filePath) {
  try {
    const data = await readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: {error.message}`);
  }
}







