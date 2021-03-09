class Grocery {
    name: string;
    quantity: number;
    price: number;
    
    constructor(name: string, quantity: number, price: number) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

let myGroceries = document.getElementById('Groceries') // groceries UI element

let groceries : Grocery[] = ([ // create new groceries array with 3 items
        new Grocery("milk", 3, 2.49),
        new Grocery("bread", 6, 2.99),
        new Grocery("eggs", 11, 1.29)
    ]);

var list = document.createElement("ul"); // generate HTML unordered list to display my groceries
for (let i = 0; i < groceries.length; i++) { // loop and create an li child item for each grocery
    var item = document.createElement("li");
    item.innerHTML = `Item: ${groceries[i].name} | Price: $${groceries[i].price} | Quanitity: ${groceries[i].quantity}`;
    list.appendChild(item);
}

if (myGroceries != null) { // append the list of groceries if the element was found
    myGroceries.appendChild(list);
}