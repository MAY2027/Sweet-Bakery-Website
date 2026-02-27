let orderList =[];
function orderNow(itemName, price) {
    orderList.push ({ name: itemName, price: price});
    updateOrderList();
}
function updateOrderList() {
    const orderDiv =document.getElementById("order-list");
    orderDiv.innerHTML ="<h3> Your Order</h3>";

    let total = 0;
    orderList.forEach((item, index)=>{
    orderDiv.innerHTML +=`<p> ${index +1}. ${item.name}- ¥${item.price}</p>`;
    total += item.price;
       
    });
    orderDiv.innerHTML += `<hr><p><strong>Total: ¥${total}</strong></p>`;
}
function confirmOrder() {
    const orderListElement = document.getElementById("order-list");
    const message = document.getElementById("message");
    if (orderListElement.length === 0) {
        alert("Your Order List is Empty!");
        return;
    }
    message.textContent= " 🌷Thank You For Your Order💙";
    message.style.display="block";

    orderListElement.innerHTML = "";

    orderList = [];

    setTimeout(() =>{
        message.style.display = "none";
    }, 3000);

}

function showDetails(name,price,ingredients,imageSrc) {
    document.getElementById("modal-title").textContent= name + "-" + price;
    document.getElementById("modal-ingredients").textContent= "Ingredients:" + ingredients;
    document.getElementById("modal-img").src = imageSrc;
    document.getElementById("modal").style.display="flex";
}

function closeModal() {
    document.getElementById("modal").style.display="none";
}