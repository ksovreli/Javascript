let clothing = {
    type: "ჟაკეტი",
    brand: "Adidas",
    size: "M",
    price: 80,
    inStock: true,
    colors: ["შავი", "ლურჯი"],
    material: "ტყავი",
    isWaterproof: false,
    weight: 0.8,
    ratings: [5, 4, 5, 3, 4]
}

function firstPrint(obj) {
    let firstKey = Object.keys(obj)[0]
    console.log(firstKey, obj[firstKey])
}

function checkPriceOver20(obj) {
    document.write(obj.price > 20);
}

firstPrint(clothing)
checkPriceOver20(clothing)
