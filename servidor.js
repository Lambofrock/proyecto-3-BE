import handlebars from "express-handlebars";
import express from "express";
import path from "path";
import { Server } from "socket.io";
import viewsRouter from "../proyecto 3 BE/src/routes/views.router.js";
import { initMongoDB } from "./src/daos/MongoDb/mongo/conxion.js";

initMongoDB()
  .then(() => console.log("conectando a mongoDV"))
  .catch((error) => console.log(error));

const PORT = 8080;
const app = express();
const arrayProducts = [  

  {
    name: "polera",
    price: 10000,
    stock: "15",
  },
  {
    name: "chaqueta",
    price: 50000,
    stock: "7",
  },
  {
    name: "pantalon",
    price: 24990,
    stock: "6",
  },
  {
    name: "zapato",
    price: 55000,
    stock: "4",
  },
  {
    name: "gorro",
    price: 19990,
    stock: "20",
  },
];


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(process.cwd(), "src", "public")));
app.get("/", (req, res) => {
  res.render("home");
});

app.engine("handlebars", handlebars.engine());
app.use("/", viewsRouter);
app.set("view engine", "handlebars");
app.set("views", path.join(process.cwd(), "src/views"));
const httpServer = app.listen(8080, () => {
  console.log(`Server is running in port 8080 `);
});
const socketServer = new Server(httpServer);

socketServer.on("connection", (socket) => {
  console.log(`usuario conectado: ${socket.id}`);
  socket.emit("saludosDesdeBack", "Holanda");
  socket.on("saludosDesdeFront", (message) => {
    console.log(message);
  });
  socketServer.emit("arrayProducts", arrayProducts);

  socket.on("newProduct", (prod) => {
       arrayProducts.push(prod);
    console.log(arrayProducts)
    socketServer.emit("arrayProducts",arrayProducts )
  });
});
