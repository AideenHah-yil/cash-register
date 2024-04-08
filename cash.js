let itemsForSale = {
    Phone: 300,
    SmartTV: 220,
    GamingConsole: 150,
}

let shoppingCart = [];

function addItem(itemName) {
    if (itemsForSale.hasOwnProperty(itemName)) {
        shoppingCart.push(itemName);
        console.log(itemName + " added to shopping cart");
    } else {
        console.log("Sorry, we don't sell " + itemName );
    }

}

const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (let item of shoppingCart) {
        totalPrice += itemsForSale[item];
    }
return totalPrice;
}

function pay(amount) {
    let  totalPrice = calculateTotalPrice();
    let discountedPrice = totalPrice;

    if (totalPrice > 400) {
        let discountAmount = totalPrice * 0.1;
        discountedPrice = totalPrice - discountAmount;
        console.log("You have received a 10% discount")
    }


    if (amount >= discountedPrice) {
        let change = amount - discountedPrice;
        console.log("Thank you for the purchase! Your change is $" + change);
    } else {
        console.log("Sorry, you don't have enough money to pay for this purchase");
    }
}

addItem("Phone");
addItem("Fax");
addItem("SmartTV")
pay(520)