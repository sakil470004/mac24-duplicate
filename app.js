// console.log("hi sakil");

//total price update base function
function updateTotalPrice() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const extraMemoryCost = parseInt(document.getElementById('extra-memory-cost').innerText);
    const extraStorageCost = parseInt(document.getElementById('extra-storage-cost').innerText);
    const deliveryCharge = parseInt(document.getElementById('delivery-charge').innerText);
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryCharge;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total-after-promo').innerText = totalPrice;
}


//extra money set function
function setExtraCost(price, setPlaceId) {
    document.getElementById(setPlaceId).innerText = price;
    updateTotalPrice();
}
// promo code validator if valid then 20% discount
function checkPromo() {
    const inputField = document.getElementById('promo-input');
    const inputText = inputField.value;
    if (inputText == 'stevekaku') {
        let totalAmount = parseInt(document.getElementById('total-price').innerText);
        totalAmount -= totalAmount * 0.2;
        document.getElementById('total-after-promo').innerText = totalAmount;
    }
    inputField.value = '';
}