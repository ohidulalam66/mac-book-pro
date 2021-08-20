// Memory btn id
const eightGbMemory = document.getElementById('first-memory');
const sixteenGbMemory = document.getElementById('second-memory');

// Memory field id
const memoryCostField = document.getElementById('memory-cost');

// Memory btn event handler
eightGbMemory.addEventListener('click', function(){
    memoryCostField.innerText = '0';
    updateTotal();
})
sixteenGbMemory.addEventListener('click', function(){
    memoryCostField.innerText = '180';
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
    storageCostFlied.innerText = '0';
    updateTotal();
})
secondSsd.addEventListener('click', function(){
    storageCostFlied.innerText = '100';
    updateTotal();
})
thirdSsd.addEventListener('click', function(){
    storageCostFlied.innerText = '180';
    updateTotal();
})

// Delivery option btn id
const normalDelivery = document.getElementById('normal-delivery');
const advanceDelivery = document.getElementById('advance-delivery');

// Delivery option field id
const deliveryCostFlied = document.getElementById('delivery-cost');

// Delivery option event handler
normalDelivery.addEventListener('click', function(){
    deliveryCostFlied.innerText = '0';
    updateTotal();
})
advanceDelivery.addEventListener('click', function(){
    deliveryCostFlied.innerText = '20';
    updateTotal();
})

// Total price flied id
const total = document.getElementById('total-cost');

// Discount Total id
const discountTotal = document.getElementById('discount-total');
// Update total
function updateTotal(){
    const memoryPrice = Number(memoryCostField.innerText);
    const storagePrice = Number(storageCostFlied.innerText);
    const deliveryCharge = Number(deliveryCostFlied.innerText);
    const grandTotal = 1299 + memoryPrice + storagePrice + deliveryCharge;
    total.innerText = grandTotal;
    discountTotal.innerText = grandTotal;
}

// Promo Code input filed 
const promoFlied = document.getElementById('promo -input');

// promo Code apply btn
const promoApply = document.getElementById('promo-apply');

// Promo code event handler
promoApply.addEventListener('click', function(event){
    const promoCode = promoFlied.value;
    if(event.target.value == 'stevekaku'){
        const discountTotal = total / 20;
    }
    promoFlied.value ='';
    return discountTotal;
})