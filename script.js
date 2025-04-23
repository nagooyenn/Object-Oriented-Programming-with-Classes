class Product {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotalValue() {
      return this.price * this.quantity;
    }
  
    toString() {
      return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
  
    static applyDiscount(products, discount) {
      products.forEach(product => {
        product.price -= product.price * discount;
      });
    }
  }
  
  class PerishableProduct extends Product {
    constructor(name, price, quantity, expirationDate) {
      super(name, price, quantity);
      this.expirationDate = expirationDate;
    }
  
    toString() {
      return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
  }
  
  class Store {
    constructor() {
      this.inventory = [];
    }
  
    addProduct(product) {
      this.inventory.push(product);
    }
  
    getInventoryValue() {
      return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
    }
  
    findProductByName(name) {
      return this.inventory.find(product => product.name.toLowerCase() === name.toLowerCase()) || null;
    }
  }
  
  // Sample products
  const apple = new Product("Apple", 2.5, 50);
  const banana = new Product("Banana", 1.2, 30);
  const bread = new Product("Bread", 2.0, 40);
  const milk = new PerishableProduct("Milk", 1.5, 10, "2024-12-31");
  const cheese = new PerishableProduct("Cheese", 3.0, 20, "2024-11-15");
  
  // Store setup
  const store = new Store();
  [apple, banana, bread, milk, cheese].forEach(p => store.addProduct(p));
  
  // Output
  console.log("Inventory Value (Before Discount): $" + store.getInventoryValue().toFixed(2));
  Product.applyDiscount(store.inventory, 0.15);
  console.log("Inventory Value (After 15% Discount): $" + store.getInventoryValue().toFixed(2));
  
  const found = store.findProductByName("Milk");
  console.log(found ? "Product found: " + found.toString() : "Product not found.");
  