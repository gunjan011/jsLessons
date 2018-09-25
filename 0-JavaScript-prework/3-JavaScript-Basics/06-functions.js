function getMyTaxReturnAndDoMyTaxesAndStuff(a, x, y, z) {
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    console.log(total);
    return total;
}
getMyTaxReturnAndDoMyTaxesAndStuff(10000, 5, 50000, 0);

function add(x, y) {
    let sum = x + y;
    console.log(sum);
    return sum;
}

add(1, 1);

function fullName(first, last){
    var wholeName = first + " " + last;
    console.log(wholeName);
    return wholeName;
}

fullName("Paul", "O'Connor");

function calculatePriceIndiana(quantity, price){
    var tax = 0.07;
    var totalTax = quantity * price * tax;
    var totalPrice = totalTax + quantity * price;
    console.log(totalPrice);
    return totalPrice;
}

calculatePriceIndiana(17, 5);
