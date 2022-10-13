class Item {
  constructor(name, quantity, price) {
    this.id = this.generateID();
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.bought = false;
  }

  generateID() {
    let ID =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 17) +
      Math.random().toString(36).substring(2, 11);
    return ID;
  }
}

export default Item;
