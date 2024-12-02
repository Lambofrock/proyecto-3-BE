// import prodManager from "../managers/product.manager.js";
import * as services from "../servicios/product.services.js";

export const getProducts = async (req, res) => {
  try {
    const response = await services.getProducts();
    res.json(response);
  } catch (error) {
    throw new Error(error);
  }
};

export const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await services.getById(id);

    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
};

export const create = async (req, res) => {
  try {
    const newProduct = await services.create(req.body);

    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const productUpdated = await services.update(id, req.body);

    res.json(productUpdated);
  } catch (error) {
    throw new Error(error);
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const prodDel = await services.remove(id);

    res.json({ message: "producto deleteado" });
  } catch (error) {
    throw new Error(error);
  }
};
