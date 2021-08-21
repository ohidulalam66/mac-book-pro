// Memory btn id
const eightGbMemory = document.getElementById('first-memory');
const sixteenGbMemory = document.getElementById('second-memory');

// Memory field id
const memoryCostField = document.getElementById('memory-cost');

// Memory btn event handler
document.getElementById('first-memory').addEventListener('click', function(){
    memoryCostField.innerText = 0;
    updateTotal();
})
document.getElementById('second-memory').addEventListener('click', function(){
    memoryCostField.innerText = 180;
    updateTotal();
})

// Storage btn id
const firstSsd = document.getElementById('first-ssd');
const secondSsd = document.getElementById('second-ssd');
const thirdSsd = document.getElementById('third-ssd');

// Storage field id
const storageCostFlied = document.getElementById('storage-cost');

// Storage btn event handler
firstSsd.addEventListener('click', function(){
    storageCostFlied.innerText = 0;
    updateTotal();
})
secondSsd.addEventListener('click', function(){
    storageCostFlied.innerText = 100;
    updateTotal();
})
thirdSsd.addEventListener('click', function(){
    storageCostFlied.innerText = 180;
    updateTotal();
})

// Delivery option btn id
const normalDelivery = document.getElementById('normal-delivery');
const advanceDelivery = document.getElementById('advance-delivery');

// Delivery option field id
const deliveryCostFlied = document.getElementById('delivery-cost');

// Delivery option event handler
normalDelivery.addEventListener('click', function(){
    deliveryCostFlied.innerText = 0;
    updateTotal();
})
advanceDelivery.addEventListener('click', function(){
    deliveryCostFlied.innerText = 20;
    updateTotal();
})

// Total price flied id
const total = document.getElementById('total-cost');

// Update total
function updateTotal(){
    const memoryPrice = Number(memoryCostField.innerText);
    const storagePrice = Number(storageCostFlied.innerText);
    const deliveryCharge = Number(deliveryCostFlied.innerText);
    const grandTotal = 1299 + memoryPrice + storagePrice + deliveryCharge;
    total.innerText = grandTotal;
    document.getElementById('discount-total').innerText = grandTotal;
}
// promo Code apply btn
const promoApply = document.getElementById('promo-apply');

// promo code event handler
promoApply.addEventListener('click', function(){
    const promoInputField = document.getElementById('promo-input');
    const promoCodeValue = promoInputField.value;
    const discountTotalField = document.getElementById('discount-total');
    const grandTotal = discountTotalField.innerText;
    if(promoCodeValue.toLowerCase() == 'stevekaku'){
        discountTotalField.innerText = grandTotal - (grandTotal * 0.2);
        promoInputField.value ='';
    }
})