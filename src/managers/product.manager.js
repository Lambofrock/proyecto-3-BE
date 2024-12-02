import { ProductModel } from "../daos/MongoDb/mongo/model/nombre.model.js";

class productManager {
  constructor(model) {
    this.model = model;
  }
  async getProducts() {
    try {
      return await this.model.find({});
    } catch (error) {
      throw new Error(error);
    }
  }
  async getById(id) {
    try {
      return await this.model.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }
  async Create() {
    try {
      return await this.model.Create(obj);
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete() {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
  async update() {
    try {
      return await this.model.findByIdAndUpdate(id, obj, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }
};

const prodManager = new productManager(ProductModel);
export default prodManager;



// import fs from "node:fs";
// import { v4 as uuidv4 } from "uuid";

// class ProductManager {
//   constructor(path) {
//     this.path = path;
//   }

//   async getAll() {
//     try {
//       if (fs.existsSync(this.path)) {
//         const products = await fs.promises.readFile(this.path, "utf-8");
//         return JSON.parse(products);
//       } else return [];
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }

//   async create(obj) {
//     try {
//       const product = {
//         id: uuidv4(),
//         ...obj,
//       };
//       const products = await this.getAll();
//       const prodExist = products.find((p) => p.id === product.id);
//       if (prodExist) throw new Error("el producto existe");
//       products.push(product);
//       await fs.promises.writeFile(this.path, JSON.stringify(products));
//       return product;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }

//   async getById(id) {
//     try {
//       const products = await this.getAll();
//       if (!products.length > 0) throw new Error("lista vacia");
//       const product = products.find((product) => product.id === id);
//       if (!product) throw new Error("produycto encontrado");
//       return product;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }

//   async update(obj, id) {
//     try {
//       const products = await this.getAll();
//       let prod = await this.getById(id);
//       prod = { ...prod, ...obj };
//       const newArray = products.filter((prod) => prod.id !== id);
//       newArray.push(prod);
//       await fs.promises.writeFile(this.path, JSON.stringify(newArray));
//       return prod;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }

//   async delete(id) {
//     try {
//       const prod = await this.getById(id);
//       const products = await this.getAll();
//       const newArray = products.filter((prod) => prod.id !== id);
//       await fs.promises.writeFile(this.path, JSON.stringify(newArray));
//       return prod;
//     } catch (error) {
//       throw new Error(error);
//     }
//   }

//   async deleteAll() {
//     try {
//       const products = await this.getAll();
//       if (!products.length > 0) throw new Error("lista borrada");
//       await fs.promises.unlink(this.path);
//     } catch (error) {
//       throw new Error(error);
//     }
//   }
// }
// const productManager = new ProductManager('./products.json');
// export default productManager;
