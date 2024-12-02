import { connect } from "mongoose";

const MONGO_URL = 
  "mongodb+srv://seba:seba@cluster0.t9min.mongodb.net/3ntrega?retryWrites=true&w=majority&appName=Cluster0";

export const initMongoDB = async () => {
  try {
    await connect(MONGO_URL);
    console.log("conectado a mongolico");
    
  } catch (error) {
    throw new Error("fallaste");
  }
};
  