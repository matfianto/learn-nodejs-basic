const fs = require('fs')

const listnama = fs.readFileSync('./listnama.txt', 'utf-8')

console.log(listnama)

const isi = listnama;

fs.writeFile("hasil.txt", listnama + "\nM Zaky", (err) => {
  console.log("\nDuplikat isi file dan penambahan nama sukses");

});

// const isi = listnama;

// fs.writeFile("hasil.txt", isi+"\nM Zaky", (err) => {console.log("\nDuplikat isi file dan penambahan nama sukses");

//   });



// fs.writeFile("books.txt", data, (err) => {
//   if (err)
//     console.log(err);
//   else {
//     console.log("\nFile written successfully\n");
//     console.log("The written has the following contents:");
//     console.log(fs.readFileSync("books.txt", "utf8"));
//   }
// });

// fs.writeFile('./newfile.txt', 'Learn Node FS module');

// fs.writeFileSync("./hasil.txt", console.log(listnama))