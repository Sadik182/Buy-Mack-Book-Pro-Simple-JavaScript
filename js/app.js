// Function For Set the Extra Product Cost
function extraProductCost(product, cost) {
    const extraCost = document.getElementById(product + '-cost');
    extraCost.innerText = cost;
    return extraCost;

}

//Function For Total Cost

function totalCost() {
    const bestPriceText = document.getElementById('best-price');
    const bestPrice = parseFloat(bestPriceText.innerText);
    const memoryCostText = document.getElementById('memory-cost');
    const memoryCost = parseFloat(memoryCostText.innerText);
    const storageCostText = document.getElementById('storage-cost');
    const storageCost = parseFloat(storageCostText.innerText);
    const deliveryCostText = document.getElementById('delivery-cost');
    const deliveryCost = parseFloat(deliveryCostText.innerText);
    const totalPrice = bestPrice + memoryCost + storageCost + deliveryCost;
    const subtotal = document.getElementById('total-price');
    return subtotal.innerText = totalPrice;
}
// Function For Promo Total
function promoTotal() {
    const totalPromo = document.getElementById('total-promo');
    totalPromo.innerText = totalCost();
}
// Add Event Listener For Extra Memory Cost
document.getElementById('8gb').addEventListener('click', function () {
    extraProductCost('memory', 0);
    totalCost();
    promoTotal();
})
document.getElementById('16gb').addEventListener('click', function () {
    extraProductCost('memory', 180);
    totalCost();
    promoTotal();
})
// Add Event Listener For Extra Storage Cost
document.getElementById('256gb').addEventListener('click', function () {
    extraProductCost('storage', 0);
    totalCost();
    promoTotal();
})
document.getElementById('512gb').addEventListener('click', function () {
    extraProductCost('storage', 100);
    totalCost();
    promoTotal();
})
document.getElementById('1tb').addEventListener('click', function () {
    extraProductCost('storage', 180);
    totalCost();
    promoTotal();
})

// Add Event Listener For Delivery Charge
document.getElementById('aug-25').addEventListener('click', function () {
    extraProductCost('delivery', 0);
    totalCost();
    promoTotal();
})
document.getElementById('aug-21').addEventListener('click', function () {
    extraProductCost('delivery', 20);
    totalCost();
    promoTotal();
})



// Add Event Listener For Promo Code

document.getElementById('input-field').addEventListener('keyup', function (event) {
    const apply = document.getElementById('apply');
    if (event.target.value == 'stevekaku') {
        apply.removeAttribute('disabled');
    }
    else {
        apply.setAttribute('disabled', true)
    }
    
});

// promo code 
function promoCode() {
    const promoCode = totalCost();
    const discount = (promoCode * 20) / 100;
    console.log(discount);
    const totalPromo = document.getElementById('total-promo');
    const payTotal = promoCode - discount;
    totalPromo.innerText = payTotal;
    const inputField = document.getElementById('input-field');
    inputField.value = '';
}


