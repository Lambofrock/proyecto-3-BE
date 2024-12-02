const socketClient = io();
socketClient.on('saludosDesdeBack', (message)=>{
    console.log("el servidor envio este mensaje" , message);
    socketClient.emit("saludosDesdeFront", " holiwi")

});

const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const products = document.getElementById("products");
const form = document.getElementById("form");

form.onsubmit = (e) =>{ console.log("agarra")
 e.preventDefault();
  const name = nameInput.value;
  const price = priceInput.value;
  socketClient.emit('newProduct', { name, price })
};

socketClient.on('arrayProducts', (array)=>{
  let infoProducts = ''
  array.map((p)=>{
      infoProducts += `${p.name} - ${p.price} <br>`
  })
  products.innerHTML = infoProducts
  
})













//   {
//     name: "polera",
//     price: 10000,
//     stock: "15",
//   },
//   {
//     name: "chaqueta",
//     price: 50000,
//     stock: "7",
//   },
//   {
//     name: "pantalon",
//     price: 24990,
//     stock: "6",
//   },
//   {
//     name: "zapato",
//     price: 55000,
//     stock: "4",
//   },
//   {
//     name: "gorro",
//     price: 19990,
//     stock: "20",
//   },
// ];