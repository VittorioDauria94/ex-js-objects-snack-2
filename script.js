// Code Question 1

// console.log(hamburger.name); // "Double Cheese Burger"
// console.log(secondBurger.name ); // "Double Cheese Burger"

//un solo oggetto è stato creato in memoria

// Code Question 2

// console.log(hamburger.ingredients[0]); // "Salad"
// console.log(secondBurger.ingredients[0]); // "Salad"

// sono stati creati in memoria 3 oggetti
// 2 oggetti che condividono lo stesso array

// Code Question 3

// sono stati creati in memoria 9 oggetti

// Code Question 4

// per clonare chef il metodo migliore è con spreed operator poichè al suo interno abbiamo una funzione
// per clonare restaurant invece possiamo usare structuredClone poichè facciamo una deep copy dell'oggetto e riesce a copiare l'oggetto data correttamente e in memoria abbiamo quindi 4 oggetti totali

// Code Question 5

// console.log(hamburger.maker.name); // ?  "Chef Hyur"
// console.log(secondBurger.maker.name); // ? "Chef Hyur"
// console.log(hamburger.maker.restaurant.name); // ? "Hyur's II"
// console.log(secondBurger.maker.restaurant.name); // ? "Hyur's II"

// sono stati creati 5 oggetti in memoria

// Code Question 6
// per clonare chef il miglior modo è con 3 spreed operator annidati poichè al suo interno abbiamo delle funzioni

// Code Question 7 (Bonus)

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: "Main Street",
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      },
    },
    isOpen: true,
  },
};

// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

function deepClone(obj) {
  if (obj === null) return null;
  if (typeof obj !== "object") return obj;

  const cloneObj = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    cloneObj[key] = deepClone(obj[key]);
  }
  return cloneObj;
}
