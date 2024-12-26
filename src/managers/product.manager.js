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

