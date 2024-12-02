import { prodDao } from "../daos/mongodb/product.dao.js";


export const getProducts = async () => {
  try {
    return await prodDao.getAll();
  } catch (error) {
    throw new Error(error);
  }
};

export const getById = async (id) => {
  try {
    const prod = await prodDao.getById(id);
    return prod;
  } catch (error) {
      throw error;
  }
};

export const create = async (obj) => {
  try {
    const newProd = await prodDao.create(obj);
    return newProd;
  } catch (error) {
    throw error;
  }
};

export const update = async (id, obj) => {
  try {
    const prodUpd = await prodDao.update(id, obj);
    return prodUpd;
  } catch (error) {
    throw error;
  }
};

export const remove = async (id) => {
  try {
    const prodDel = await prodDao.delete(id);
    return prodDel;
  } catch (error) {
    throw new error;
  }
};
