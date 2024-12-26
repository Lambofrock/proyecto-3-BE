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









