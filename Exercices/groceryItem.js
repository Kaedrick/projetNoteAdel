function getTotalPrice(itemList) {
    var cptPrice = 0;
    itemList.forEach(item => {
        const {product, quantity, price} = item
        cptPrice += quantity * price;
    });
    return cptPrice;
}

const itemList = [
    {product: "Sel", quantity: 2, price: 15}, // 90
    {product: "Poivre", quantity: 45, price:2} // + 30 = 120
]

const resultat = getTotalPrice(itemList)
console.log(resultat) // 120