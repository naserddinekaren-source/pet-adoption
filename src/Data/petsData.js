const base = import.meta.env.BASE_URL;

const petsData = [
  { id: 1, name: "Max", type: "Dog", breed: "Golden Retriever", age: "2 Years", img: base + "images/golden-retriever-dog.jpg", stock: 3 },
  { id: 2, name: "Charlie", type: "Dog", breed: "Jack Russell", age: "3 Years", img: base + "images/jack-russell-dog.jpg", stock: 2 },
  { id: 3, name: "Rocky", type: "Dog", breed: "Labrador", age: "4 Years", img: base + "images/labrador-retriever-dog.jpg", stock: 1 },
  { id: 4, name: "Bella", type: "Dog", breed: "Yorkie", age: "1 Year", img: base + "images/yorkie-terrier-dog.jpg", stock: 0 },

  { id: 5, name: "Luna", type: "Cat", breed: "Bengal", age: "1 Year", img: base + "images/bengal-cat.jpg", stock: 2 },
  { id: 6, name: "Misty", type: "Cat", breed: "British Shorthair", age: "2 Years", img: base + "images/british-shorthair-cat.jpg", stock: 3 },
  { id: 7, name: "Shadow", type: "Cat", breed: "Bombay", age: "3 Years", img: base + "images/bombay-cat.jpg", stock: 1 },
  { id: 8, name: "Tiger", type: "Cat", breed: "Tabby", age: "2 Years", img: base + "images/tabby-cat.jpg", stock: 4 },

  { id: 9, name: "Snowball", type: "Rabbit", breed: "American", age: "1 Year", img: base + "images/american-rabbit.jpg", stock: 3 },
  { id: 10, name: "Clover", type: "Rabbit", breed: "European", age: "2 Years", img: base + "images/european-rabbit.jpg", stock: 2 },
  { id: 11, name: "Bugs", type: "Rabbit", breed: "Holland Lop", age: "6 Months", img: base + "images/holland-lop-rabbit.jpg", stock: 5 },
  { id: 12, name: "Thumper", type: "Rabbit", breed: "Netherland Dwarf", age: "3 Years", img: base + "images/netherland-dwarf-rabbit.jpg", stock: 1 },

  { id: 13, name: "Rio", type: "Bird", breed: "Bullfinch", age: "2 Years", img: base + "images/bullfinch-bird.jpg", stock: 2 },
  { id: 14, name: "Sunny", type: "Bird", breed: "Dove", age: "1 Year", img: base + "images/dove-bird.jpg", stock: 0 },
  { id: 15, name: "Peaches", type: "Bird", breed: "Love Birds", age: "2 Years", img: base + "images/love-birds.jpg", stock: 4 },
  { id: 16, name: "Pip", type: "Bird", breed: "Sparrow", age: "1 Year", img: base + "images/sparrow-bird.jpg", stock: 1 },

  { id: 17, name: "Barnaby", type: "Duck", breed: "Pekin Duck", age: "1 Year", img: base + "images/pekin-duck.jpg", stock: 2 },
  { id: 18, name: "Daisy", type: "Duck", breed: "Golden Cascade", age: "6 Months", img: base + "images/golden-cascadeduck.jpg", stock: 2 },
  { id: 19, name: "Oliver", type: "Duck", breed: "Mallard", age: "1.5 Years", img: base + "images/mallard-duck.jpg", stock: 1 },
  { id: 20, name: "Pip Jr", type: "Duck", breed: "Duckling", age: "2 Weeks", img: base + "images/yellow-babyduck.jpg", stock: 3 }
];

export default petsData;