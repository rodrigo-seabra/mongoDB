const { ObjectId } = require("mongodb");
const conn = require("../db/conn");

class Product {
  constructor(name, image, price, description) {
    this.name = name;
    this.image = image;
    this.price = price;
    this.description = description;
  }

  save() {
    const product = conn.db().collection("products").insertOne({
      name: this.name,
      image: this.image,
      price: this.price,
      description: this.description,
    });

    return product;
  }

  static getProducts() {
    const products = conn.db().collection("products").find().toArray();
    return products;
  }

  static async removeProductById(id) {
    await conn
      .db()
      .collection("products")
      .deleteOne({ _id: new ObjectId(id) });
  }
  updateProduct(id) {
    conn
      .db()
      .collection("products")
      .updateOne({ _id: new ObjectId(id) }, { $set: this });
    //esse $ se refere a um operador de mongo DB

    return;
  }

  static async getProductById(id) {
    console.log(id);

    // os ids no mongo são diferentes de string, por isso é necessário pegar o id que vem na requisição e transformá-lo para esse objeto espacial para q assim possa realizar a consulta no banco
    const product = await conn
      .db()
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    return product;
  }
}

module.exports = Product;
